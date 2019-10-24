var Web3 = require('web3');
const execFile = require('child_process').execFile;
// var net = require('net');
var taskLogger = require('./taskLogger')
var accounts = require('../config/accounts')
var nodes = require('../config/nodes')
// var web3 = new Web3(nodes[0].url, net);
var web3 = new Web3(nodes[0].url);
const controllerAddress = '0x4A671df5F3930134BbbBDc163B8d9366E6c8b335'
const privateKey = "0x5a73d298902422ef8276bb928177b0b7d6151868c10ba1f41ea8c91ff23fc5c4"
const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: '0.0.0.0',
    database: 'batchsend',
})

var Power = {
    property: 'etz',
    methods: [{
        name: 'getPower',
        call: 'eth_getPower',
        params: 2,
        inputFormatter: [web3.extend.formatters.inputAddressFormatter, web3.extend.formatters.inputDefaultBlockNumberFormatter],
        // outputFormatter: web3.utils.hexToNumberString
    }]
}

web3.extend(Power)

const table_name = 'sending_list';

// const PowerLimit = 2509715260000000
// const transPerBatch = 4

class RepeatBatchSendCoin {
    constructor() {
        this.nonce;
        this.sended = 0;
        this.isAvailble = true;
    }

    onSended(sendingId) {
        var doSended = (txhash) => {
            var updateSendedSql = "UPDATE " + table_name + " SET state = 1, txHash='" + txhash + "' WHERE id = " + sendingId;
            console.log(txhash, sendingId);
            pool.query(updateSendedSql).catch(e => {
                // console.log(e);
                logger.error(e.toString());
                logger.error('txHash update pending error: ' + txhash, 'datebaseUpdate');
            })
        }
        return doSended
    }

    async sendcoin() {
        let power = await web3.etz.getPower(controllerAddress);
        power = web3.utils.fromWei(String(power), 'gwei')
        let tx = this.res[this.sended];
        this.sended++;
        // console.log(power);
        if (Number(power) > 420000) {
                try {
                    let id = tx.id;
                    let address = tx.address.trim();
                    // console.log(id, address);
                    let txObject = await web3.eth.accounts.signTransaction({
                        to: address,
                        value: web3.utils.toWei(tx.value, 'ether'),
                        gas: '210000',
                        gasPrice: '2000000000',
                        nonce: this.nonce++,
                    }, privateKey)
                    web3.eth.sendSignedTransaction(txObject.rawTransaction)
                        .once('transactionHash', this.onSended(id))
                        .once('error', console.log)
                    // this.sended++;
                } catch (e) {
                    console.error(e);
                }
            console.log('sended: ' + this.sended);
            if (this.sended >= this.res.length) {
              console.log('stop');
            }
        }
    }

    async start() {
        this.res = (await pool.query("SELECT * FROM " + table_name + " WHERE state=0")).rows;
        // this.res.length = 2;
        // console.log(this.res);
        this.nonce = await web3.eth.getTransactionCount(controllerAddress);
        // console.log(this.res);
        setInterval(this.sendcoin.bind(this), 2000);
    }
}

var task = new RepeatBatchSendCoin()
task.start()
