const blockHashList = [
  '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3'.toLowerCase(),
  '0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d'.toLowerCase(),
  '0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9'.toLowerCase(),
  '0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177'.toLowerCase(),
  '0x0cd786a2425d16f152c658316c423e6ce1181e15c3295826d7c9904cba9ce303'.toLowerCase()
]

const chainInfo = {
  [blockHashList[0]]: {
    'block_hash': blockHashList[0],
    'network_id': 1,
    'name': 'mainnet',
    'disused': false,
    'start_date': 1438269973 // Jul-30-2015 03:26:13 PM +UTC
  },
  [blockHashList[1]]: {
    'block_hash': blockHashList[1],
    'network_id': 3,
    'name': 'ropsten',
    'disused': false,
    'start_date': 1479642530 // Nov-20-2016 11:48:50 AM +UTC
  },
  [blockHashList[2]]: {
    'block_hash': blockHashList[2],
    'network_id': 42,
    'name': 'kovan',
    'disused': false,
    'start_date': 1488459412 // Mar-02-2017 12:56:52 PM +UTC
  },
  [blockHashList[3]]: {
    'block_hash': blockHashList[3],
    'network_id': 4,
    'name': 'rinkeby',
    'disused': false,
    'start_date': 1492010450 // Apr-12-2017 03:20:50 PM +UTC
  },
  [blockHashList[4]]: {
    'block_hash': blockHashList[4],
    'network_id': 2,
    'name': 'morden',
    'disused': true,
    'start_date': null
  }
}

module.exports = {
  blockHashList,
  chainInfo
}
