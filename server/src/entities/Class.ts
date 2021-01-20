import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class Class extends BaseEntity implements attributes, skills {
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

export type stats = {
  attributes: attributes;
  skills: skills;
};

export type attributes = {
  strength: number;
  dexterity: number;
  vitality: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export type skills = {
  fishing: number;
  mining: number;
  harvesting: number;
  cooking: number;
  smithing: number;
  alchemy: number;
};
