
exports.up = async function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('street')
    table.string('city')
    table.string('uf', 2)
  })
}

exports.down = async function down(knex) {
  return knex.schema.dropTable('users')
}
