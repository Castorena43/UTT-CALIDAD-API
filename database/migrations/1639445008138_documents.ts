import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Documents extends BaseSchema {
  protected tableName = 'documents'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tipo', 100).notNullable()
      table.string('nombre', 100).notNullable()
      table.string('version', 50).notNullable()
      table.string('status', 50).notNullable()
      table.string('responsable', 255).notNullable()
      table.string('areas', 255).notNullable()
      table.string('documentos_relacionados', 255).notNullable()
      table.boolean('sustituye').notNullable()
      table.string('codigo', 50)
      table.timestamp('conservacion', { useTz: true }).notNullable()
      table.string('tipo_resguardo', 100).notNullable()
      table.string('disposicion_final', 255).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
