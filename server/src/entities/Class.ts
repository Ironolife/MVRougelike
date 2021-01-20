import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class Class extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @Column()
  strength!: number;

  @Column()
  dexterity!: number;

  @Column()
  vitality!: number;

  @Column()
  intelligence!: number;

  @Column()
  wisdom!: number;

  @Column()
  charisma!: number;

  @Column()
  fishing!: number;

  @Column()
  mining!: number;

  @Column()
  harvesting!: number;

  @Column()
  cooking!: number;

  @Column()
  smithing!: number;

  @Column()
  alchemy!: number;
}

export default Class;
