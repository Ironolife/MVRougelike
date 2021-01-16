import User from "../../entities/User";
import { Field, InputType, ObjectType } from "type-graphql";
import { IsEmail, Length } from "class-validator";

@ObjectType()
class FieldError {
  @Field(() => String)
  field!: string;

  @Field(() => String)
  message!: string;
}

@ObjectType()
export class AuthResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[] | null;

  @Field(() => User, { nullable: true })
  user?: User | null;
}

@InputType()
export class AuthProps {
  @Field(() => String, { nullable: true })
  @Length(5, 20)
  username?: string | null;

  @Field(() => String, { nullable: true })
  @IsEmail()
  email?: string | null;

  @Field(() => String)
  @Length(5, 20)
  password!: string;
}
