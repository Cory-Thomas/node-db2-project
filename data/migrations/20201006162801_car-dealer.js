
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        // creates a primary key that auto increments
      tbl.increments("ID");
  
        // vin - required - unique 
      tbl.integer("VIN", 50).unique().notNullable()
  
        // make - required 
      tbl.string("Make", 128).notNullable(); 
  
      // model - required
      tbl.string("Model", 128).notNullable(); 
  
      // mileage - required 
      tbl.integer("Mileage", 50).unique().notNullable()
  
      // transmission type - not required 
      tbl.string("Transmission", 128)
  
      // status of title - not required 
      tbl.string("Title Status", 128)
  
    })
  };
  
  exports.down = function(knex) {
        return knex.schema.dropTableIfExists("cars");
  
  };
