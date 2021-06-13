const db = require('../../data/db-config')

function getUsers() {
    return db('users as u')
            .select('u.*')

}

async function createUser(user) {
  const [user_id] = 
    await db('users')
    .insert(user)

  return getUsers()
    .where({ user_id })
    .first()

}


module.exports = {
  getUsers,
  createUser,
}