import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684637633848 implements MigrationInterface {
    name = 'Default1684637633848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_11516be7bc9c9cf70a4f67c9297"`);
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_401c4403472c8dc57cb82df34f1"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "groupsId" TO "group"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_11516be7bc9c9cf70a4f67c9297" TO "UQ_0ddb4bf5779a7e48fee8f76e65a"`);
        await queryRunner.query(`ALTER TABLE "stocks" RENAME COLUMN "user_id" TO "group_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0ddb4bf5779a7e48fee8f76e65a" FOREIGN KEY ("group") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_7759cb3dd2cb06830c3a8ba8d8d" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stocks" DROP CONSTRAINT "FK_7759cb3dd2cb06830c3a8ba8d8d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0ddb4bf5779a7e48fee8f76e65a"`);
        await queryRunner.query(`ALTER TABLE "stocks" RENAME COLUMN "group_id" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_0ddb4bf5779a7e48fee8f76e65a" TO "UQ_11516be7bc9c9cf70a4f67c9297"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "group" TO "groupsId"`);
        await queryRunner.query(`ALTER TABLE "stocks" ADD CONSTRAINT "FK_401c4403472c8dc57cb82df34f1" FOREIGN KEY ("user_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_11516be7bc9c9cf70a4f67c9297" FOREIGN KEY ("groupsId") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
