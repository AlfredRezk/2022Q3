const main = require('./subSum');
const { expect, assert, should } = require('chai');
should();

describe('Testing subSum Function ....', () => { 
  it('should return NaN if the first element is not an array', () => { 

    expect(isNaN(main('text', 3, 300))).to.be.true;
    isNaN(main("text", 3, 300)).should.to.be.true;
    assert.equal(isNaN(main("text", 3, 300)), true);

    assert.isNaN(main("text", 3, 300));
    expect(main('test', 3, 300)).to.be.NaN;
    main('test', 3, 300).should.to.be.NaN;

    assert.equal(main([10, 20, 30, 40, 50, 60], 3, 300), 150);
  })

  it('should consider start index value to be zero, if the start index is less than zero', () => { 

    assert.equal(main([1, 2, 3], -5, 2), 6);
    expect(main([1, 2, 3], -5, 2)).to.be.equal(6);
    main([1,2,3],-5,2).should.to.be.equal(6);
  })

  it('should assume it points to the last index of the array, if the end index is outside the bounds of the array', () => { 
    assert.equal(main([1, 2, 3], 1, 10000), 5);
    expect(main([1, 2, 3], 1, 10000)).to.be.equal(5);
    main([1,2,3],1,1000).should.to.be.equal(5);
  })


  it('should return ~3.3 when adding 1.1 and 2.2', () => { 
    expect(main([1.1, 2.2, 3.3], -1, 1)).to.be.closeTo(3.3, 0.1);
    main([1.1, 2.2, 3.3], -1, 1).should.to.be.closeTo(3.3, 0.1);

    expect(Number(main([1.1, 2.2, 3.3], -1, 1).toFixed(1))).to.be.equal(3.3);
    assert.closeTo(main([1.1, 2.2, 3.3], -1, 1), 3.3, 0.1);
  })
  
})