import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1613744866051 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      },
      {
        name: 'name',
        type: 'varchar'
      },
      {
        name: 'email',
        type: 'varchar',
        isUnique: true
      },
      {
        name: 'password',
        type: 'varchar'
      },
      {
        name: 'activation',
        type: 'integer'
      },
      {
        name: 'isAdmin',
        type: 'boolean'
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      }]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user')
  }
}
