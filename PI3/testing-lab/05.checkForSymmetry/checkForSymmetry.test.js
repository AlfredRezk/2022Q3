// ● Take an array as argument
// ● Return false for any input that isn’t of the correct type
// ● Return true if the input array is symmetric
// ● Otherwise, return false

const isSymmetric = require('./checkForSymmetry');
const { should, assert, expect } = require('chai');
should();

describe('Testing isSymmetric Function ....', () => {
  describe('General Tests', () => { 
    it('should be a function', () => { 
      expect(isSymmetric.constructor ===Function ).to.be.true
    })

    it('Should return false if arguments is not an array', () => { 
      assert.isFalse(isSymmetric('test'));
      expect(isSymmetric(1)).to.be.false;
    })
  })


  describe('Value specific tests', () => { 

    it('should return false for any input that is not symmetric', () => {
      assert.isFalse(isSymmetric([1,2,3]))
      expect(isSymmetric([3, 2, 1])).to.be.false;
    })

    it('should return true for any input that is symmetric', () => {
      assert.isTrue(isSymmetric([1,2,2,1]))
      assert.isTrue(isSymmetric([1,'Hi','Hi',1]))
      assert.isTrue(isSymmetric([3,2,1,1,2,3]))
      expect(isSymmetric([])).to.be.true;
    })


  })
})