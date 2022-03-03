import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateUserForeignKeyInProducts1646185418249 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('products',
            new TableForeignKey({
                name: 'FKUser',
                columnNames: ['userId'],
                referencedColumnNames: ['userId'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products', 'FKUser');
    }

}
