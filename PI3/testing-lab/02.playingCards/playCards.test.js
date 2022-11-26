const makeCard = require('./playCards');
const { expect, assert, should } = require('chai');
should();


describe('Testing the card Factory Function', () => { 
  it('Should throw an error if initialized with invalid face or suit', () => { 

    expect(() => { makeCard('1', 'S') }).to.throw('Error');

    try {
      expect(makeCard('1', 'S')).to.not.throw();
    } catch (err) { 
      expect(err.message).to.be.equal('Error');
    }
  })

  it('should throw and error if an attempt is made to change the face or suit to invalid values', () => { 
    let card = makeCard('2', 'S');


    expect(() => { card.face = '1' }).to.throw()
    

    try {
      assert.doesNotThrow(card.suit = 'z');
    } catch (err) { 
      assert.equal(err.message, 'Error')
    }
  })
})