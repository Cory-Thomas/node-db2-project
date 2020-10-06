
exports.seed = async function(knex) {
  await knex("cars").truncate();

  await knex("cars").insert([
        {id: 1, VIN: 4546546, Make: "Honda", Model: "Civic", Mileage: 24},
        {id: 2, VIN: 4576846, Make: "Volkswagen", Model: "Beetle", Mileage: 26},
        {id: 3, VIN: 4897651, Make: "Hondai", Model: "Accord", Mileage: 27},
      ]);
};
