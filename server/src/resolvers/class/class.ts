import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import Class from "../../entities/Class";
import { Stats } from "./types";

@Resolver(Class)
export class ClassResolver {
  @FieldResolver(() => Stats)
  stats(@Root() _class: Class): Stats {
    return {
      attributes: { ..._class },
      skills: { ..._class }
    };
  }

  @Query(() => [Class])
  async classes(): Promise<Class[]> {
    return Class.find({});
  }
}
