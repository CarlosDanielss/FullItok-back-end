import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1645481999191 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'productId',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'productName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'productDescription',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'productPrice',
                    type: 'float',
                    isNullable: false,
                },
                {
                    name: 'productQuantity',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'userId',
                    type: 'uuid',
                },
                {
                    name: 'productCreatedAt',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'productUpdatedAt',
                    type: 'timestamp',
                    default: 'now()',
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
