const db = require('../../data/db-config')

module.exports = {
  find,
  add,
  findBy,
  findById
}

function find() {
  return db("users as u")
  .select("id", "firstName", "lastName", "email", "password", "role")
  .orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter)
  .orderBy("id")
}

async function add(user) {
  const [id] = await db("users").insert(user)
  return findById(id)
}

function findById(id) {
  return db("users as u")
    .select("id", "firstName", "lastName", "email", "password", "role")
    .where("u.id", id)
    .first()
}
