import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685574399220 implements MigrationInterface {
    name = 'Default1685574399220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0ddb4bf5779a7e48fee8f76e65a"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_8cbd152a785e57efbdfd721b534"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_0cc24df67f945f1f3da01840b5f"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_20ab5581f99d62d796d59f86e6c"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_a954257cf4502004f19bd85285e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_557112c9955555e7d08fa913f3f"`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_7759cb3dd2cb06830c3a8ba8d8d"`);
        await queryRunner.query(`ALTER TABLE "group" DROP CONSTRAINT "FK_1614feb82556227f52f5aa3ca4a"`);
        await queryRunner.query(`ALTER TABLE "stocks" RENAME COLUMN "group_id" TO "group"`);
        await queryRunner.query(`CREATE TABLE "user_group" ("id" SERIAL NOT NULL, "is_adm" integer NOT NULL, "access" integer NOT NULL, "user" integer, "group" integer, CONSTRAINT "PK_3c29fba6fe013ec8724378ce7c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permissions" ("id" SERIAL NOT NULL, "p_add_remove" integer NOT NULL DEFAULT '1', "p_create" integer NOT NULL DEFAULT '0', "p_delete" integer NOT NULL DEFAULT '0', "user" integer, "group" integer, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "p_add_remove"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "p_create"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "p_delete"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_0ddb4bf5779a7e48fee8f76e65a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "group"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "stock_id"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "group_id"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "stock_id"`);
        await queryRunner.query(`ALTER TABLE "group" DROP COLUMN "adm_id"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "product" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "stock" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "group" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "user" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "value" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "stock" integer`);
        await queryRunner.query(`ALTER TABLE "user_group" ADD CONSTRAINT "FK_25d039b174a23f78a0c4a6fae1e" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_group" ADD CONSTRAINT "FK_1dcda02308ef76d3b04fd17f681" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "FK_997409a7917b3c348a98b02f0aa" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "FK_2ef772d7a97c084ec1ed17954c0" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_c9342c29bbaf8b0cbee709c6734" FOREIGN KEY ("product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_6ae43ee99558116ee7f2d232d28" FOREIGN KEY ("stock") REFERENCES "stocks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_ef150d049cae38858be384b03fc" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_c2587e2de1618501d04edd9c44d" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_84fcd7d6abd6b5ae40d35368941" FOREIGN KEY ("stock") REFERENCES "stocks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_6dea7e345f6cdfcd66b314eb8aa" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_6dea7e345f6cdfcd66b314eb8aa"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_84fcd7d6abd6b5ae40d35368941"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_c2587e2de1618501d04edd9c44d"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_ef150d049cae38858be384b03fc"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_6ae43ee99558116ee7f2d232d28"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP CONSTRAINT "FK_c9342c29bbaf8b0cbee709c6734"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "FK_2ef772d7a97c084ec1ed17954c0"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "FK_997409a7917b3c348a98b02f0aa"`);
        await queryRunner.query(`ALTER TABLE "user_group" DROP CONSTRAINT "FK_1dcda02308ef76d3b04fd17f681"`);
        await queryRunner.query(`ALTER TABLE "user_group" DROP CONSTRAINT "FK_25d039b174a23f78a0c4a6fae1e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "group"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "stock_audit" DROP COLUMN "product"`);
        await queryRunner.query(`ALTER TABLE "group" ADD "adm_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "stock_id" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "group_id" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "stock_id" integer`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD "product_id" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "group" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_0ddb4bf5779a7e48fee8f76e65a" UNIQUE ("group")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "p_delete" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "p_create" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "p_add_remove" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`DROP TABLE "permissions"`);
        await queryRunner.query(`DROP TABLE "user_group"`);
        await queryRunner.query(`ALTER TABLE "stocks" RENAME COLUMN "group" TO "group_id"`);
        await queryRunner.query(`ALTER TABLE "group" ADD CONSTRAINT "FK_1614feb82556227f52f5aa3ca4a" FOREIGN KEY ("adm_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_7759cb3dd2cb06830c3a8ba8d8d" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_557112c9955555e7d08fa913f3f" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_a954257cf4502004f19bd85285e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_20ab5581f99d62d796d59f86e6c" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_0cc24df67f945f1f3da01840b5f" FOREIGN KEY ("stock_id") REFERENCES "stocks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stock_audit" ADD CONSTRAINT "FK_8cbd152a785e57efbdfd721b534" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0ddb4bf5779a7e48fee8f76e65a" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
