import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'songs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.string('album').notNullable()
      table.string('autor').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}