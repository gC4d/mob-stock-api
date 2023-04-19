import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681862795936 implements MigrationInterface {
    name = 'Default1681862795936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stocks" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "stocks" ALTER COLUMN "amount" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stocks" ALTER COLUMN "amount" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD "value" real NOT NULL`);
    }

}
