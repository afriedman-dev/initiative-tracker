
exports.up = function(knex) {
  return knex.schema.createTable('character', table => {
    table.increments('id');
    table.string('name');
    table.integer('intiative');
    table.integer('armor_class');
    table.integer('health');
    table.string('attack');
    table.string('img_url');
    table.string('status_array')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('character');
};
