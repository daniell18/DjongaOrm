import { MigrationInterface, QueryRunner } from "typeorm";

export class PrimeiraMigration1701719878353 implements MigrationInterface {
    name = 'PrimeiraMigration1701719878353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "sobrenome" character varying NOT NULL, "idade" integer NOT NULL, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
