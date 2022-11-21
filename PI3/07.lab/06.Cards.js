
function main() {
  return (function () {
    
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = {
      SPADES: '♠',
      HEARTS: '♥',
      DIAMONDS: '♦',
      CLUBS: '♣'
    }

    class Card {

      constructor(face, suit) { 
        if (validFaces.includes(face))
          this._face = face;
        else
          console.log('Error');
        
        if (Object.values(suits).includes(suit))
          this._suits = suit
        else 
          console.log('Error')
      }


      get face() { 
        return this._face;
      }

      get suits() { 
        return this._suits;
      }

      set face(f) {
        if (validFaces.includes(f))
          this._face = f;
        else
          console.log("Error");
      }

      set suits(s) { 
        if (Object.values(suits).includes(s))
          this._suits = s;
        else
          console.log("Error");
      }
    }

    return {
      Suits:suits,
			Card
		};
	})();
}


	let result = main();
	let Card = result.Card;
	let Suits = result.Suits;
	let card = new Card("Q", Suits.CLUBS);
	console.log(card);
	card.face = "A";
	console.log(card);
	card.suits = Suits.DIAMONDS;
	console.log(card);
	// let card2 = new Card("1", Suits.DIAMONDS);

card._face = 15;
console.log(card);