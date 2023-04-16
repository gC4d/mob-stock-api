import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681614531917 implements MigrationInterface {
    name = 'Default1681614531917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "description" text NOT NULL, "cust" double precision NOT NULL, "amount" double precision NOT NULL, "stock_id" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD "value" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD "amount" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_557112c9955555e7d08fa913f3f" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_557112c9955555e7d08fa913f3f"`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD "amount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP COLUMN "value"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
