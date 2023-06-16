import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684637761095 implements MigrationInterface {
    name = 'Default1684637761095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" ADD "key" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "key"`);
    }

}
