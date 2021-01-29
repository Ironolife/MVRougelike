import argon2 from "argon2";
import { validate } from "class-validator";
import { Request } from "express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import AppContext from "../../@types/AppContext";
import User from "../../entities/User";
import { AuthProps, AuthResponse } from "./types";

const getSuccessfulAuthResponse = async (user: User, req: Request) => {
  //set cookie and login user
  req.session.userId = user.id;

  return { user };
};

@Resolver(User)
class UserResolver {
  @Mutation(() => AuthResponse)
  async register(
    @Arg("authProps") authProps: AuthProps,
    @Ctx() { req }: AppContext
  ): Promise<AuthResponse> {
    const validationErrors = await validate(authProps);
    if (validationErrors.length) {
      return {
        errors: validationErrors.map((err) => ({
          field: err.property,
          message: Object.values(err.constraints!)[0]
        }))
      };
    }

    let user: User;
    try {
      user = await User.create({
        username: authProps.username!.toLowerCase(),
        email: authProps.email!.toLowerCase(),
        password: await argon2.hash(authProps.password)
      }).save();

      //set cookie and login user
      req.session.userId = user.id;

      return { user };
    } catch (err) {
      if (err.code === "23505") {
        const detail = err.detail as string;
        const field = /\(([^)]+)\)/.exec(detail)![1];
        return {
          errors: [
            {
              field: field,
              message: `${field} already registerd`
            }
          ]
        };
      }

      console.error(err);
      return {
        errors: undefined
      };
    }
  }

  @Query(() => AuthResponse)
  async me(@Ctx() { req }: AppContext): Promise<AuthResponse> {
    if (!req.session.userId) {
      return { user: null };
    }

    const user = await User.findOne(req.session.userId);
    if (!user) {
      return { user: null };
    }

    return getSuccessfulAuthResponse(user, req);
  }

  @Mutation(() => AuthResponse)
  async login(
    @Arg("authProps") authProps: AuthProps,
    @Ctx() { req }: AppContext
  ): Promise<AuthResponse> {
    const queryField = authProps.email != null ? "email" : "username";
    const user = await User.findOne({
      [queryField]: authProps[queryField]!.toLowerCase()
    });
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "user not found"
          }
        ]
      };
    }

    if (!(await argon2.verify(user.password, authProps.password))) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password"
          }
        ]
      };
    }

    return getSuccessfulAuthResponse(user, req);
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: AppContext): Promise<boolean> {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        res.clearCookie(process.env.SESSION_NAME);
        if (!err) {
          resolve(true);
        } else {
          console.error(err);
          resolve(false);
        }
      });
    });
  }
}

export default UserResolver;
