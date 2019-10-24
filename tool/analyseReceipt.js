var Web3 = require('web3');
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'batchsend',
})
var nodes = require('../config/nodes')
var web3 = new Web3(nodes[0].url);

const TB = 'sending_list'

async function task() {
  let {rows} = await pool.query(`select txhash,id from ${TB} where state = 1`)
  console.log(rows.length);
  for (var i = 0; i < rows.length; i++) {
    let txr
    if (i % 5 == 0) {
      console.log(i);
    }
    try {
      txr = await web3.eth.getTransactionReceipt(rows[i].txhash)
    } catch (e) {
      console.log(rows[i].txhash, e);
      continue
    }
    // console.log(txr);
    let status = false
    try {
      status = txr.status
    } catch(e) {
      console.log(txr,e);
    }
    if (status == true) {
      await pool.query(`UPDATE ${TB} set state = 2 where id = $1`, [rows[i].id])
    } else {
      await pool.query(`UPDATE ${TB} set state = 3 where id = $1`, [rows[i].id])
      console.log(txr);
    }
  }
  console.log('finish');
}

task()
