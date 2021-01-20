import { Field, Float, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import Equipment from "./Equipment";

@ObjectType()
@Entity()
class Weapon extends Equipment {
  @Field(() => Float)
  @Column({ type: "float" })
  attack!: number;

  @Field(() => Float)
  @Column({ type: "float" })
  speed!: number;
}

export default Weapon;
