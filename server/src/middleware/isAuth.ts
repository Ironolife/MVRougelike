import AppContext from "../@types/appContext";
import { MiddlewareFn } from "type-graphql";

const isAuth: MiddlewareFn<AppContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }

  return next();
};

export default isAuth;
