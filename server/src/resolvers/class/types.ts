import { Field, Int, ObjectType } from "type-graphql";
import {
  Attributes as _Attributes,
  Skills as _Skills,
  Stats as _Stats
} from "@mvrougelike/shared/types";

@ObjectType()
class Attributes implements _Attributes<number> {
  @Field(() => Int)
  strength!: number;

  @Field(() => Int)
  dexterity!: number;

  @Field(() => Int)
  vitality!: number;

  @Field(() => Int)
  intelligence!: number;

  @Field(() => Int)
  wisdom!: number;

  @Field(() => Int)
  charisma!: number;
}

@ObjectType()
class Skills implements _Skills<number> {
  @Field(() => Int)
  fishing!: number;

  @Field(() => Int)
  mining!: number;

  @Field(() => Int)
  harvesting!: number;

  @Field(() => Int)
  cooking!: number;

  @Field(() => Int)
  smithing!: number;

  @Field(() => Int)
  alchemy!: number;
}

@ObjectType()
export class Stats implements _Stats<number> {
  @Field(() => Attributes)
  attributes!: Attributes;

  @Field(() => Skills)
  skills!: Skills;
}
