const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'localstack-lambda',
  password: 'password',
  port: 5432,
})

module.exports.getCustomers = async () => {
  const { rows } = await pool.query('SELECT * FROM "customer-data" WHERE id = $1', [1])
  console.log('user:', rows[0])
  return rows
}