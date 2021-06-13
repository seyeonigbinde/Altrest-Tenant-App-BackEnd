
exports.seed = function(knex, Promise) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {"user_id":1,"user_firstName":"Seye","user_lastName":"Onigbinde","user_email":"seyeonigbinde@gmail.com","user_password":"Canada", "user_role":"Tenant"},
        {"user_id":2,"user_firstName":"Tosin","user_lastName":"Animashaun","user_email":"tanimashaun@gmail.com","user_password":"Nigeria", "user_role":"Landlord"}
      ]);
    });
};
