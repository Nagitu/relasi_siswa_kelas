/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('siswa', table =>{
      table.uuid('id').primary()
      table.string('full_name').notNullable()
      table.string('alamat').notNullable()
      table.uuid('id_kelas').references('id').inTable('kelas').onDelete('CASCADE')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('siswa')
  };
