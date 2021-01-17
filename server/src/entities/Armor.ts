import { Field, Float, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import Equipment from "./Equipment";

@ObjectType()
@Entity()
class Armor extends Equipment {
  @Field(() => Float)
  @Column({ type: "float" })
  defense!: number;
}

export default Armor;
