const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'community',
})

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  }
}
