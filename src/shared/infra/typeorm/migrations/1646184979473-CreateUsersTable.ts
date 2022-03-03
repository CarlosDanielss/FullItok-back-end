import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1646179158558 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'userId',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'userName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'userEmail',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'userPassword',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'userCreatedAt',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'userUpdatedAt',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
