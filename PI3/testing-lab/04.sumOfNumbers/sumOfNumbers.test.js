// ● Take an array of numbers as argument
// ● Return the sum of the values of all elements inside the array

const sum = require('./sumOfNumbers');
const { expect, assert, should} = require('chai')

should();

describe('Testing sum Function ....', () => { 

  it('should take an array of numbers as arguments', () => {
		// sum([1,2,3])===6
		// sum(['test']) === NaN
		assert.equal(sum([1, 2, 3]), 6);
		expect(sum([1, 2, 3])).to.be.equal(6);
		sum([1, 2, 3]).should.to.be.equal(6);
		// sum(['test']) === NaN
    assert.isNaN(sum(['test']));
    // expect(sum(['test'])).to.be.equal(NaN)  //NaN === NaN  => {} ==={}
    expect(sum(['test'])).to.be.NaN;
    sum(['test']).should.to.be.NaN;
  })

  it("should return the sum of the values of all elements inside the array", () => { 

    assert.equal(sum([10, 20, 30]), 60);
    expect(sum([5, 4, 3])).to.be.equal(12);
    sum([10, 5, 5]).should.to.be.equal(20);
    
  });
})