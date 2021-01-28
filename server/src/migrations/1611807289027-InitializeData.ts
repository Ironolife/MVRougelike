import { MigrationInterface, QueryRunner } from "typeorm";

export class InitializeData1611807289027 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "class" (
                "name", "strength", "dexterity", "vitality", "intelligence", "wisdom", "charisma", "fishing", "mining", "harvesting", "cooking", "smithing", "alchemy"
            ) VALUES (
                'barbarian', 14, 10, 12, 6, 8, 8, 10, 12, 8, 10, 12, 8
            )
        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
