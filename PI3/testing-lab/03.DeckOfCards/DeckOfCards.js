const makeCard = require('../02.playingCards/playCards');

function printDeckOfCards(cards) {

  // Validate cards input is an array 
  if (!Array.isArray(cards)) return false;
  // ["5S", "3D", "QD", "1C"];
  let stringCheck = cards.every(card => typeof card === 'string')
  if (!stringCheck) return false;

  // output array 
  let cardsArr = [];
  let invalid; 

  cards.forEach(card => {
    // parse the card string
    if (card.length > 3 || card.length < 2)
      throw new Error('Invalid face or suit');
    
    let ca = card.split('')  //['3', 'D']
    let suit = ca.pop();
    let face = ca.join('');

    let cardObj;
    try {
      cardObj = makeCard(face, suit);
      cardsArr.push(cardObj);
    }
    catch (err) { 
      console.log(`Invalid Card: ${card}`)
      invalid = true;
    }

  })

  if (!invalid) console.log(cardsArr.join(' '))
  else return 

}
// printDeckOfCards(["5S", "3D", "QD", "1C"]);


module.exports = printDeckOfCards;