module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/altrest.db3'
    },
    useNullAsDefault: true, // sqlite specific
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },

  staging: {

  },

  production: {

  }
}
