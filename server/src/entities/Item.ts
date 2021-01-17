import { Field, Float, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class Item extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @Field(() => String)
  @Column()
  type!: string;

  @Field(() => Float)
  @Column({ type: "float" })
  value!: number;

  @Field(() => Float)
  @Column({ type: "float" })
  weight!: number;
}

export default Item;
