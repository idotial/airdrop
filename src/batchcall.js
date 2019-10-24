var Web3 = require('web3');
// var net = require('net');
// var taskLogger = require('./taskLogger')
var accounts = require('../config/accounts');
var nodes = require('../config/nodes');
var ABI = require('../abi/masternode');
// var web3 = new Web3(nodes[0].url, net);
var web3 = new Web3(nodes[0].url);
const controllerAddress = '0x2E30DDdd89F2701deCb527D54C2c293463bc417B'
const privateKey = "0xf2bd1457702b4edd7b2f2a4d06f025b38f83dc0bc9bbf61a7f569e8412c794da"
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: '0.0.0.0',
    database: 'batchsend',
})
var table_name = 'contract_call_list';

// const PowerLimit = 2509715260000000
const transPerBatch = 4

module.exports = class RepeatBatchSendCoin {
    constructor(tableName) {
        table_name = tableName || table_name;
        this.nonce;
        this.sended = 0;
        this.isAvailble = true;
    }

    onSended(sendingIdArrayStr) {
        var doSended = (txhash) => {
            // var updateSendedSql = "UPDATE " + table_name + " SET txHash='" + txhash + "' , state = 1 WHERE id IN " + sendingIdArrayStr;
            pool.query("UPDATE " + table_name + " SET txHash='" + txhash + "' , state = 1 WHERE id = ANY($1::int[]) ",sendingIdArrayStr).catch(e => {
                // console.log(e);
                console.log(e.toString());
                console.log('txHash update pending error: ' + txhash, 'datebaseUpdate');
            })
        }
        return doSended
    }

    async sendcoin() {
        if (this.isAvailble) {
            try {
                let id = this.res[this.sended].id
                let address = this.res[this.sended].address;
                let txObject = await web3.eth.accounts.signTransaction({
                    to: address,
                    value: this.res[this.sended].value,
                    data: this.res[this.sended].data,
                    gas: '210000',
                    gasPrice: '1000000000',
                    nonce: this.nonce++,
                }, privateKey);
                this.sended++;
                console.log(this.sended);
                web3.eth.sendSignedTransaction(txObject.rawTransaction)
                    .once('transactionHash', this.onSended(id))
                    .once('error', console.log)
            } catch (e) {
                console.log(e.toString());
            }
            console.log('sended: ' + this.sended);
        }
    }

    async start() {
        this.res = (await pool.query("SELECT * FROM " + table_name + " WHERE state=0")).rows;
        try {
          this.nonce = await web3.eth.getTransactionCount(controllerAddress);
          console.log(this.nonce);
        } catch (e) {
          console.log(e);
        }
        setInterval(this.sendcoin.bind(this), 2000)
    }
}

// var task = new RepeatBatchSendCoin()
// task.start()
