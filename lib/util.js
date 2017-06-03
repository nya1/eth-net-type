const ethConst = require('./ethereum.constants')

const chainFound = {
  'match': true
}

const chainNotFound = {
  'match': !chainFound
}

module.exports.getByGenBlockHash = function (blockHash) {
  if (typeof blockHash !== 'string' || blockHash.replace('0x', '').length !== 64) throw new Error('Invalid block hash provided')
  let blockHashStr = '0x' + blockHash.toLowerCase().replace('0x', '')
  if (ethConst.blockHashList.indexOf(blockHashStr) > -1) {
    let chainRes = Object.assign(ethConst.chainInfo[blockHashStr], chainFound)
    return chainRes
  } else return chainNotFound
}

module.exports.getByNetId = function (netId) {
  if (typeof netId !== 'number') throw new Error('Invalid network ID provided')
  var chain = chainNotFound
  for (var i = 0; i < ethConst.blockHashList.length; i++) {
    if (ethConst.chainInfo[ethConst.blockHashList[i]].network_id === netId) {
      chain = ethConst.chainInfo[ethConst.blockHashList[i]]
      break
    }
  }
  return chain
}

module.exports.guess = function (chain) {
  let chainVarType = typeof chain
  if (chainVarType === 'string') return module.exports.getByGenBlockHash(chain)
  else if (chainVarType === 'number') return module.exports.getByNetId(chain)
  else throw new Error('Invalid input')
}
