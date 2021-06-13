exports.up = function (knex) {
    return knex.schema
      .createTable('users', table => {
        table.increments('user_id')
        table.string('user_firstName', 138)
              .notNullable()
        table.string('user_lastName', 138)
              .notNullable()
        table.string('user_email', 138)
                .notNullable().unique()
        table.string('user_password', 138)
                .notNullable().unique()
        table.string('user_role', 138)
                .notNullable()
    
      })
  };
  
  exports.down = function (knex) {
   
    return knex.schema
        .dropTableIfExists('users')
  };

