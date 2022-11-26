require('mocha-sinon');
const { expect, assert, should } = require('chai'); 
const printDeckOfCards = require('./DeckOfCards');
should();


describe('Testing PrintDeckOfCards Function', () => { 
  // configuration 
  beforeEach(function () { 
    this.sinon.stub(console, 'log')
  })


  it('Should takes an array of strings', () => { 
    expect(printDeckOfCards({})).to.be.false;
    assert.isFalse(printDeckOfCards('test'))
  })

  // It print cards separated by space 
  it('Should print them in a sequence separated by space', () => { 
    printDeckOfCards(["AS", "10D", "KH", "2C"]);
    expect(console.log.calledWith('A♠ 10♦ K♥ 2♣')).to.be.true;
    assert.notEqual(console.log("A♠10♦K♥2♣"), true);
  })

  it('should print invalid card when invalid card is passed', () => { 
    printDeckOfCards(["5S", "3D", "QD", "1C"]);
    expect(console.log.calledWith("Invalid Card: 1C")).to.be.true;
  })
})