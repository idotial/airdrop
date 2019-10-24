const xlsx = require('node-xlsx');
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'batchsend',
})

async function task() {
  const workSheetsFromFile = xlsx.parse('/Users/chenrui/Desktop/333.xlsx');
  addresses = workSheetsFromFile[0].data
  let total = 0;
  for (var i = 0; i < addresses.length; i++) {
    console.log(addresses[i][0]);
    let address = addresses[i][0].toLowerCase();

    try {
      total += Number(addresses[i][1])
      await pool.query('INSERT INTO sending_list (address,value) VALUES ($1, $2)', [address, addresses[i][1]])
    } catch (e) {
      console.log(address, e);
    }
  }
  console.log(total);
}
task()
