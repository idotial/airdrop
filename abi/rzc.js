const ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "activate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "activateBuy",
				"type": "bool"
			}
		],
		"name": "activeBuy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyXid",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pfrom",
				"type": "uint256"
			},
			{
				"name": "pend",
				"type": "uint256"
			}
		],
		"name": "calcMidPartner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_rID",
				"type": "uint256"
			}
		],
		"name": "calcNodeGen",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_pID",
				"type": "uint256"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "calcNodePoint",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			}
		],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "potSwap",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_pID",
				"type": "uint256"
			},
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_laff",
				"type": "uint256"
			}
		],
		"name": "receivePlayerInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pfrom",
				"type": "uint256"
			},
			{
				"name": "pend",
				"type": "uint256"
			}
		],
		"name": "registerFromOrigianl",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_affCode",
				"type": "uint256"
			}
		],
		"name": "registerNameXID",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "currentSetter",
				"type": "address"
			}
		],
		"name": "removeSetter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "set_bet_limit_min",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setBet_limit_day",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setEndindex",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_pID",
				"type": "uint256"
			}
		],
		"name": "setPartner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "setPartnerValue",
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
		"name": "setPlayerBookAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "setter",
				"type": "address"
			}
		],
		"name": "setSetterr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "upgrade",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawCold",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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
				"indexed": true,
				"name": "playerID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "laffMid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "affiliateID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "affiliateAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timeStamp",
				"type": "uint256"
			}
		],
		"name": "onNewName",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_pID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "userType",
				"type": "uint256"
			}
		],
		"name": "onUpgrade",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "compressedData",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "compressedIDs",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethIn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "keysBought",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "winnerAddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountWon",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newPot",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "genAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "potAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "airDropPot",
				"type": "uint256"
			}
		],
		"name": "onEndTx",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "playerID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethOut",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timeStamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "playerID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "onBuy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethOut",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "compressedData",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "compressedIDs",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "winnerAddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountWon",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newPot",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "genAmount",
				"type": "uint256"
			}
		],
		"name": "onWithdrawAndDistribute",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "playerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethIn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "compressedData",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "compressedIDs",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "winnerAddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amountWon",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newPot",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "genAmount",
				"type": "uint256"
			}
		],
		"name": "onBuyAndDistribute",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "roundID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amountAddedToPot",
				"type": "uint256"
			}
		],
		"name": "onPotSwapDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "roleName",
				"type": "string"
			}
		],
		"name": "RoleAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "roleName",
				"type": "string"
			}
		],
		"name": "RoleRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "activateBuy_",
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
		"name": "activated_",
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
		"name": "airDropPot_",
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
		"name": "bet_limit_max",
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
		"name": "bet_limit_min",
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
				"name": "addr",
				"type": "address"
			},
			{
				"name": "roleName",
				"type": "string"
			}
		],
		"name": "checkRole",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "endindex",
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
		"name": "FeeAddr",
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
		"name": "getCurrentRoundInfo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
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
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getPlayerInfoByAddress",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
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
				"name": "_pID",
				"type": "uint256"
			}
		],
		"name": "getPlayerVaults",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
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
		"name": "getTimeLeft",
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
		"name": "gindex",
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
				"name": "addr",
				"type": "address"
			},
			{
				"name": "roleName",
				"type": "string"
			}
		],
		"name": "hasRole",
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
		"name": "midValue",
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
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "num_miduser",
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
		"name": "num_partner",
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
		"name": "partnerValue",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pIDShare",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "pIDxAddr_",
		"outputs": [
			{
				"name": "pID",
				"type": "uint256"
			},
			{
				"name": "pShare",
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
		"name": "pindex",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "playerNode",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyr_",
		"outputs": [
			{
				"name": "addr",
				"type": "address"
			},
			{
				"name": "win",
				"type": "uint256"
			},
			{
				"name": "gen",
				"type": "uint256"
			},
			{
				"name": "aff",
				"type": "uint256"
			},
			{
				"name": "affMid",
				"type": "uint256"
			},
			{
				"name": "lrnd",
				"type": "uint256"
			},
			{
				"name": "laff",
				"type": "uint256"
			},
			{
				"name": "laffMid",
				"type": "uint256"
			},
			{
				"name": "userType",
				"type": "uint256"
			},
			{
				"name": "active",
				"type": "bool"
			},
			{
				"name": "gen_see",
				"type": "uint256"
			},
			{
				"name": "gen_node",
				"type": "uint256"
			},
			{
				"name": "node_draw",
				"type": "bool"
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyrout",
		"outputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "release_eth",
				"type": "uint256"
			},
			{
				"name": "out",
				"type": "bool"
			},
			{
				"name": "index",
				"type": "uint256"
			},
			{
				"name": "pID",
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyrRnds_",
		"outputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "keys",
				"type": "uint256"
			},
			{
				"name": "mask",
				"type": "uint256"
			},
			{
				"name": "out_eth",
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyrRndsIndex_",
		"outputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "pindex",
				"type": "uint256"
			},
			{
				"name": "out",
				"type": "bool"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plyrtime_",
		"outputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "eth_day",
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
		"name": "rID_",
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
		"name": "ROLE_SETTER",
		"outputs": [
			{
				"name": "",
				"type": "string"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "round_",
		"outputs": [
			{
				"name": "plyr",
				"type": "uint256"
			},
			{
				"name": "end",
				"type": "uint256"
			},
			{
				"name": "ended",
				"type": "bool"
			},
			{
				"name": "strt",
				"type": "uint256"
			},
			{
				"name": "keys",
				"type": "uint256"
			},
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "pot",
				"type": "uint256"
			},
			{
				"name": "mask",
				"type": "uint256"
			},
			{
				"name": "out_eth",
				"type": "uint256"
			},
			{
				"name": "thres_eth",
				"type": "uint256"
			},
			{
				"name": "mask_node",
				"type": "uint256"
			},
			{
				"name": "pindex",
				"type": "uint256"
			},
			{
				"name": "gindex",
				"type": "uint256"
			},
			{
				"name": "eth_node",
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
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports = ABI;