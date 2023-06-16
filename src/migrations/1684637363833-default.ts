import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684637363833 implements MigrationInterface {
    name = 'Default1684637363833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_401c4403472c8dc57cb82df34f1"`);
        await queryRunner.query(`CREATE TABLE "stock_audit" ("id" SERIAL NOT NULL, "type" text NOT NULL, "message" text NOT NULL, "amount" integer NOT NULL, "product_id" integer, "stock_id" integer, "group_id" integer, "user_id" integer, CONSTRAINT "PK_ef5c7504d12ed082bbf3d2634ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group" ("id" SERIAL NOT NULL, "token" text NOT NULL, "description" text NOT NULL, "password" text NOT NULL, "adm_id" integer, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "p_add_remove" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "p_create" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "p_delete" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "groupsId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_11516be7bc9c9cf70a4f67c9297" UNIQUE ("groupsId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_11516be7bc9c9cf70a4f67c9297" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_8cbd152a785e57efbdfd721b534" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_0cc24df67f945f1f3da01840b5f" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_20ab5581f99d62d796d59f86e6c" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_a954257cf4502004f19bd85285e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_401c4403472c8dc57cb82df34f1" FOREIGN KEY ("user_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_1614feb82556227f52f5aa3ca4a" FOREIGN KEY ("adm_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_1614feb82556227f52f5aa3ca4a"`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_401c4403472c8dc57cb82df34f1"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_a954257cf4502004f19bd85285e"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_20ab5581f99d62d796d59f86e6c"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_0cc24df67f945f1f3da01840b5f"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_8cbd152a785e57efbdfd721b534"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_11516be7bc9c9cf70a4f67c9297"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_11516be7bc9c9cf70a4f67c9297"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "groupsId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "p_delete"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "p_create"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "p_add_remove"`);
        await queryRunner.query(`DROP TABLE "group"`);
        await queryRunner.query(`DROP TABLE "stock_audit"`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_401c4403472c8dc57cb82df34f1" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
