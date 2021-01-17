import { Field, Int, ObjectType } from "type-graphql";
import { Column } from "typeorm";
import Item from "./Item";

@ObjectType()
abstract class Equipment extends Item {
  @Field(() => Int)
  @Column()
  slot!: number;
}

export default Equipment;
