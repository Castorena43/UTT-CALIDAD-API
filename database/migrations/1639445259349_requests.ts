import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Requests extends BaseSchema {
  protected tableName = 'requests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('documento_id').unsigned().references('documents.id').notNullable()
      table.string('nombre', 100).notNullable()
      table.string('version', 50).notNullable()
      table.string('status', 50).notNullable().defaultTo('pendient')
      table.string('punto_cambio', 100).notNullable()
      table.string('descripcion_actual', 255).notNullable()
      table.string('descripcion_cambio').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
