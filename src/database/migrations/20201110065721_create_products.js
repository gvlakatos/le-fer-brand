
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table){
        table.increments(); // Retorna valor númerico auto-incremental

        table.string('description').notNullable();
        table.string('color').notNullable();
        table.string('size').notNullable();
        table.string('brand').notNullable();
        table.string('composition').notNullable();

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('products');
};
