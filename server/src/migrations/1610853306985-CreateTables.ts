import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1610853306985 implements MigrationInterface {
  name = "CreateTables1610853306985";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "item" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "type" character varying NOT NULL,
                "value" double precision NOT NULL,
                "weight" double precision NOT NULL,
                CONSTRAINT "UQ_c6ae12601fed4e2ee5019544ddf" UNIQUE ("name"),
                CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "armor" (
                "slot" integer NOT NULL,
                "defense" double precision NOT NULL,
                CONSTRAINT "UQ_aa2e84dffa204f95d8a1927097d" UNIQUE ("name"),
                CONSTRAINT "PK_9897d8f2edafda53ca0412ddeec" PRIMARY KEY ("id")
            ) INHERITS ("item")
        `);
    await queryRunner.query(`
            CREATE TABLE "location" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "stage" integer NOT NULL,
                CONSTRAINT "UQ_f0336eb8ccdf8306e270d400cf0" UNIQUE ("name"),
                CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "username" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "weapon" (
                "slot" integer NOT NULL,
                "attack" double precision NOT NULL,
                "speed" double precision NOT NULL,
                CONSTRAINT "UQ_c0a6e6eabffa74c4a025ce2eeca" UNIQUE ("name"),
                CONSTRAINT "PK_41fe726bde6432339c1d4595d29" PRIMARY KEY ("id")
            ) INHERITS ("item")
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "weapon"
        `);
    await queryRunner.query(`
            DROP TABLE "user"
        `);
    await queryRunner.query(`
            DROP TABLE "location"
        `);
    await queryRunner.query(`
            DROP TABLE "armor"
        `);
    await queryRunner.query(`
            DROP TABLE "item"
        `);
  }
}
