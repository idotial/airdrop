// 0x0B7E0158f2aeDFD565c25c8a6E6728708dc31F79
// 0x00d73cc18a750a9a620c648412dc886c5f039acda206765be5f097338bb862e3
var Web3 = require('web3');
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: '0.0.0.0',
  database: 'batchsend',
})
// var web3 = new Web3('ws://52.47.202.205:9647')
var web3 = new Web3("ws://3.0.240.110:9647")
// const ABI = require('../abi/multiSend')
// const msAddress = '0x7c2184e90ffd5d893cbfbaa5e23afec826d257b3' //合约地址
// var msContract = new web3.eth.Contract(ABI, msAddress);
const TB = 'rzc_list'
// console.log(process.argv[2]);
// console.log(process.argv[3]);
var sender
var nonce = 0

// 0x01C7Eab17A58234168088b5424F8308123930966
// 0x97c95d700d6ffdf7501c0c59f398ae66a5e61a0b9f5fccb5b1e68f220299c387

// 0xE240bd5FCf341b99fA37B96AdD7f3ef8fe37Fd97
// 0x0aa245b0a91c868d9b48786267cb9fe1fa8c96af1a7c7dbdcd0cef3616a6d536

// 0x2445B64866AD9aE509Ae1Df4fB67456A9Fd69059
// 0xcf67332abb1aa31d17168c74bb794f37c9e640c2549b290cba15d8f1cf099315

// 0xe1eEE0DA3266f28B5DFFEf7644834f060BdAdfe4
// 0xadc4cc81e9d05cb05f7ffb3cabc4af59197512b6f063f2fd90a9fe913958cf3e

// 0xaa23d9066Ff31b5774946428672E9379e3A73809
// 0x21986a85ad66e4dcdc18eeeae549e5b4b40523d18f0a5d2763510c676de72cd1

// const amountToSend = '8000000000000000000'
// var addresses = []
var packs = []

// function ontxhash(address) {
//   return async(hash) => {
//     try {
//       await pool.query('UPDATE sending_list SET txhash = $1 where address = $2', [hash, address])
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
//
// function oncomfirm(address) {
//   return async(hash) => {
//     console.log(this);
//     try {
//       await pool.query('UPDATE sending_list SET state = 2 where address = $2', [address])
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

async function prepare() {
  var {rows} = await pool.query(`select * from ${TB} where state = 0 AND id >= $1 AND id < $2`, [process.argv[2], process.argv[3]])
  console.log(rows.length);
  sender = web3.eth.accounts.privateKeyToAccount(process.argv[4]);
  console.log(sender);
  nonce = await web3.eth.getTransactionCount(sender.address)
  // var a = {address: [], values: [], ids: []}
  for (var i = 0; i < rows.length; i++) {
    packs.push({address: rows[i].address, value: rows[i].value, id: rows[i].id})
    // packs.push({address: rows[i].address, value: rows[i].value.substring(0, rows[i].value.length - 6), id: rows[i].id})
    // a.address.push(rows[i].address)
    // a.values.push(rows[i].value.substring(0, rows[i].value.length - 6))
    // a.ids.push(rows[i].id)
    // if (i % 30 == 0) {
    //   packs.push(a)
    //   a = {address: [], values: [], ids: []}
    // }

  }
  // if (a.address.length > 0) {
  //   packs.push(a)
  // }
  // console.log(packs);
}

prepare()

async function send() {
  if (packs.length > 0) {
    let pack = packs.pop()
    try {
        // let data = msContract.methods.multiSendETZ(pack.address, pack.values).encodeABI()
        let txObject = await web3.eth.accounts.signTransaction({
          // from: '0x01C7Eab17A58234168088b5424F8308123930966',
          to: pack.address,
          value: pack.value,
          // data: data,
          nonce: nonce++,
          gas: '210000',
          gasPrice:'1000000000',
        },sender.privateKey)
        let tx = await web3.eth.sendSignedTransaction(txObject.rawTransaction)
        await pool.query(`UPDATE ${TB} SET txhash = $1, state = 1 where id = $2`, [tx.transactionHash, pack.id])
        // await pool.query(`UPDATE ${TB} SET txhash = $1, state = 1 where id = ANY($2::int[])`, [tx.transactionHash, pack.id])
        // console.log(tx);
    } catch (e) {
      console.log(pack,e);
    }
  } else {
    console.log('empty array');
  }
}

// setTimeout(send.bind(this), 1000)
setInterval(send.bind(this), 1000)
