const Knex = require('knex');

exports.up = function(knex) {
  return knex.schema.createTable('rooms', table => {
    table.increments(),
    table.string('name'),
    table.string('slug'),
    table.string('type'),
    table.string('price'),
    table.int('size'),
    table.int('capacity'),
    table.boolean('pets'),
    table.boolean('breakfast'),
    table.boolean('featured'),
    table.string('description'),
    table.json('images')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rooms');
};
