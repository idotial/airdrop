var Web3 = require('web3');
const { Pool, Client } = require('pg')
var nodes = require('../config/nodes');
var RepeatBatchSendCoin = require('./batchcall');
var ABI = require('../abi/masternode');
var web3 = new Web3(nodes[0].url);
var contract = new web3.eth.Contract(ABI)
const pool = new Pool({
    user: 'postgres',
    host: '0.0.0.0',
    database: 'batchsend',
})
const table_name = 'contract_call_list';
let resource = [];

function prepareTxData(contract, method, args) {
  return contract.methods[method](...args).encodeABI()
}

async function prepareAddress(number) {
  for (var i = 0; i < number; i++) {
    let account = web3.eth.accounts.create();
    await pool.query(`INSERT INTO sec_test_account (address, privateKey) values ('${account.address.toLowerCase()}', '${account.privateKey}')`);
  }
}

async function prepareTx() {
  let res = (await pool.query("SELECT * FROM sec_test_account WHERE txhash is NULL")).rows;
  for (var i = 0; i < res.length; i++) {
    let data = prepareTxData(contract, 'register(bytes32,bytes32,address,bytes32)', res[i]) //// TODO: 生成data
    let result = await pool.query(`INSERT INTO contract_call_list (address, privateKey) values ('0x000000000000000000000000000000000000000a', '${data}') RETURNING id`);
  }
}

async function prepare() {
  for (var i = 0; i < resource.length; i++) {
    let account = web3.eth.accounts.create();
    resource[i]
  }
}

prepareAddress(4)
