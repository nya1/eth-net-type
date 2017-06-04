### eth-net-type

[![npm version](https://badge.fury.io/js/eth-net-type.svg)](https://badge.fury.io/js/eth-net-type) [![Build Status](https://travis-ci.org/nya1/eth-net-type.svg?branch=master)](https://travis-ci.org/nya1/eth-net-type)


Get infos about your current network type, supported networks so far: mainnet, morden, ropsten, kovan, rinkeby.

```
npm install eth-net-type --save
```

```
	const ethNetType = require('eth-net-type')
	ethNetType.guess(myWeb3Instance.eth.getBlock(0))

	// returns (kovan example):
	{
		'match': true,
	    'block_hash': '0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9',
	    'network_id': 42,
	    'name': 'kovan',
	    'disused': false,
	    'start_date': 1488459412
	}
```

### API

```
ethNetType.guess(<Number / String>)
```

Get network type by the network id number or the the genesis block hash.

```
ethNetType.getByGenBlockHash(<String>)
```

Get network type by the genesis block hash (block number 0).

```
ethNetType.getByNetId(<Number>)
```

Get network type by the network id number.


### TESTS

Unit tests (chai+mocha) are included in `test/general.js`

```
npm run test
```

### LICENSE

MIT

