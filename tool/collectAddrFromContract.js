const xlsx = require('node-xlsx');
const { Pool, Client } = require('pg')
var Web3 = require('web3');
//var web3 = new Web3('http://etzrpc.org:80');
var web3 = new Web3("ws://3.0.240.110:9647")
const ABI = require('../abi/rzc')
const rzcAddress = '0x7c2184e90ffd5d893cbfbaa5e23afec826d257b3' //合约地址
var rzcContract = new web3.eth.Contract(ABI, rzcAddress);
const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'batchsend',
})



async function task1() {
  var total_value1 = 0;
  for (let pindex= 10612; pindex < 17951; pindex++) {
    try {
        let plyrout  = await  rzcContract.methods.plyrout(pindex,1).call();
        let pID = plyrout.pID;
        let plyr = await  rzcContract.methods.plyr_(pID).call();
        let sendaddr = plyr.addr;
        let sendvalue = plyrout.eth*0.8;
        total_value1 += plyrout.eth/(10**18);

        console.log("sendaddr",sendaddr);
        console.log("pID",pID);
        console.log("send value: ",sendvalue);
        console.log("pindex",pindex)


      await pool.query('INSERT INTO rzc_list (address,value) VALUES ($1, $2)', [sendaddr, sendvalue])
    } catch (e) {
      console.log(addresses[i][0], e);
    }
  }
  console.log('total: ', total_value1);
}
//第二轮，返还单号 58 到 86
async function task2() {
  var total_value2 = 0;
  for (let pindex= 58; pindex < 87; pindex++) {
    try {
        let plyrout  = await  rzcContract.methods.plyrout(pindex,2).call();
        let pID = plyrout.pID;
        let plyr = await  rzcContract.methods.plyr_(pID).call();
        let sendaddr = plyr.addr;
        let sendvalue = plyrout.eth*0.8;
        console.log("sendaddr",sendaddr);
        console.log("pID",pID);
        console.log("send value: ",sendvalue);
        console.log("pindex",pindex)
        total_value2 += plyrout.eth/(10**18);
      await pool.query('INSERT INTO rzc_list (address,value) VALUES ($1, $2)', [sendaddr, sendvalue])
    } catch (e) {
      console.log(addresses[i][0], e);
    }
  }
  console.log('total: ', total_value2);
}
task1()
task2()
