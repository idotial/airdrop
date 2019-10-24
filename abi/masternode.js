const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "bytes8"
			}
		],
		"name": "cleanup",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "bytes8"
			}
		],
		"name": "offlineCheck",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id1",
				"type": "bytes32"
			},
			{
				"name": "id2",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "code",
				"type": "bytes32"
			}
		],
		"name": "register",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setAuditor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "code",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setCoinbase",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_host",
				"type": "uint32"
			},
			{
				"name": "_port",
				"type": "uint32"
			}
		],
		"name": "setHostInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "bytes8"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			}
		],
		"name": "join",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "bytes8"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			}
		],
		"name": "quit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "bytes8"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			}
		],
		"name": "conf",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "code",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "send",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "auditor",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "curBlockNumber",
				"type": "uint256"
			},
			{
				"name": "curOnlineNodes",
				"type": "uint256"
			},
			{
				"name": "rewardBlocks",
				"type": "uint256"
			}
		],
		"name": "calcReward",
		"outputs": [
			{
				"name": "reward",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "countOnlineNode",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fixBlockReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHostInfo",
		"outputs": [
			{
				"name": "_host",
				"type": "uint32"
			},
			{
				"name": "_port",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "code",
				"type": "bytes32"
			}
		],
		"name": "getId",
		"outputs": [
			{
				"name": "",
				"type": "bytes8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getIdByNodeAddress",
		"outputs": [
			{
				"name": "",
				"type": "bytes8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "bytes8"
			}
		],
		"name": "getInfo",
		"outputs": [
			{
				"name": "id1",
				"type": "bytes32"
			},
			{
				"name": "id2",
				"type": "bytes32"
			},
			{
				"name": "preId",
				"type": "bytes8"
			},
			{
				"name": "preOnlineId",
				"type": "bytes8"
			},
			{
				"name": "coinbase",
				"type": "address"
			},
			{
				"name": "code",
				"type": "bytes32"
			},
			{
				"name": "blockRegister",
				"type": "uint256"
			},
			{
				"name": "blockLastPing",
				"type": "uint256"
			},
			{
				"name": "blockOnline",
				"type": "uint256"
			},
			{
				"name": "blockOnlineAcc",
				"type": "uint256"
			},
			{
				"name": "blockRewardAcc",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "code",
				"type": "bytes32"
			}
		],
		"name": "getInfoByCode",
		"outputs": [
			{
				"name": "coinbase",
				"type": "address"
			},
			{
				"name": "blockRegister",
				"type": "uint256"
			},
			{
				"name": "blockLastPing",
				"type": "uint256"
			},
			{
				"name": "blockOnline",
				"type": "uint256"
			},
			{
				"name": "blockOnlineAcc",
				"type": "uint256"
			},
			{
				"name": "blockRewardAcc",
				"type": "uint256"
			},
			{
				"name": "reward",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "bytes8"
			}
		],
		"name": "getReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "id",
				"type": "bytes8"
			}
		],
		"name": "has",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastId",
		"outputs": [
			{
				"name": "",
				"type": "bytes8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastOnlineId",
		"outputs": [
			{
				"name": "",
				"type": "bytes8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minBlockCleanup",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minBlockReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "minBlockTimeout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "secMin",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = ABI;
