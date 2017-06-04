const chai = require('chai')
const assert = chai.assert

// load modules
const ethConst = require('../lib/ethereum.constants')
const util = require('../lib/util')

// test settings
const errorRegex = 'Invalid'
const generThrowInputList = [
  undefined,
  null,
  '',
  '0x0',
  '0x97e6747d5268667684cda8f7f8bcd97762d93f99',
  '0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e17',
  '6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e17',
  '6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e17'
]
const getByGenBlockHashInvalid = [
  0,
  100,
  1e12
]

function assertThrowFn (inputsList, fn) {
  for (var i = 0; i < inputsList.length; i++) {
    assert.throws(function () { fn(inputsList[i]) }, errorRegex)
  }
}

const objParamCheck = [
  'block_hash',
  'network_id',
  'name',
  'disused',
  'start_date'
]

function checkReturnedObj (ogObj, returnObj, negativeFlag) {
  var isDefined = typeof negativeFlag === 'undefined' ? true : negativeFlag
  for (var i = objParamCheck.length - 1; i >= 0; i--) {
    if (isDefined) {
      assert.isDefined(returnObj[objParamCheck[i]])
      assert.strictEqual(ogObj[objParamCheck[i]], returnObj[objParamCheck[i]])
    } else {
      assert.isUndefined(returnObj[objParamCheck[i]])
    }
  }
}

describe('constants check', function () {
  it('check chainInfos index match blockHashList', function () {
    assert.equal(ethConst.blockHashList.length, Object.keys(ethConst.chainInfo).length, 'blockHashList and chainInfo length should be equal')
    for (var i = ethConst.blockHashList.length - 1; i >= 0; i--) {
      assert.isDefined(ethConst.chainInfo[ethConst.blockHashList[i]])
      assert.strictEqual(ethConst.chainInfo[ethConst.blockHashList[i]].block_hash, ethConst.blockHashList[i])
    }
  })
})

describe('check return object', function () {
  it('getChainByBlockHash matching object check', function () {
    var returnObj = util.getByGenBlockHash(ethConst.blockHashList[0])
    assert.isTrue(returnObj.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj)
  })
  it('getChainByBlockHash not matching object check', function () {
    var returnObj = util.getByGenBlockHash('0x1234567891234567891234567891234567891234567891234567891234567891')
    assert.isFalse(returnObj.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj, false)
  })
  it('getChainByNetId matching object check', function () {
    var returnObj = util.getByNetId(ethConst.chainInfo[ethConst.blockHashList[0]].network_id)
    assert.isTrue(returnObj.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj)
  })
  it('getChainByNetId not matching object check', function () {
    var returnObj = util.getByNetId(1234567891234567891234567891234567891234567891234567891234567891)
    assert.isFalse(returnObj.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj, false)
  })
  it('guessChain matching object check', function () {
    var returnObj = util.guess(ethConst.chainInfo[ethConst.blockHashList[0]].network_id)
    assert.isTrue(returnObj.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj)
    var returnObj2 = util.guess(ethConst.blockHashList[0])
    assert.isTrue(returnObj2.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj2)
  })
  it('guessChain not matching object check', function () {
    var returnObj = util.guess('0x1234567891234567891234567891234567891234567891234567891234567891')
    assert.isFalse(returnObj.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj, false)
    var returnObj2 = util.guess(1234567891234567891234567891234567891234567891234567891234567891)
    assert.isFalse(returnObj2.match)
    checkReturnedObj(ethConst.chainInfo[ethConst.blockHashList[0]], returnObj2, false)
  })
})

describe('functions throw test', function () {
  it('getChainByBlockHash should throw (invalid inputs)', function () {
    assertThrowFn(generThrowInputList, util.getByGenBlockHash)
    assertThrowFn(getByGenBlockHashInvalid, util.getByGenBlockHash)
  })
  it('getChainByNetId should throw (invalid inputs)', function () {
    assertThrowFn(generThrowInputList, util.getByNetId)
  })
  it('guessChain should throw (invalid inputs)', function () {
    assertThrowFn(generThrowInputList, util.guess)
  })
})
