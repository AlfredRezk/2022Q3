// Write a program that adds, inserts, removes and swaps cards into a new deck.
// On the first line, you will receive all cards as a string separated by ":". On all of the following lines you will
// receive commands, until you finally receive the "Ready" command, in the following format:
// • Add {card name}
// • Adds the card to the end of the deck.
// • If the card doesn't exist in print "Card not found."
// • Insert {card name} {index}
// • Insert the card at the given index of the deck.
// • If the card doesn't exist or the index is invalid print "Error!"
// • Remove {card name}
// • Remove the card from the deck.
// • If the card doesn't exist in print "Card not found."
// • Swap {card name 1} {card name 2}
// • Swap the positions of the cards.
// • Input will always be valid
// • Shuffle deck
// • Reverse the deck

// When you receive the "Ready" command print the cards in the deck separated by a space.

function main(arr) { 
  // Get the cards 
  let cards = arr.shift().split(':');
  // New cards Array
  let newArr = [];
  arr.pop();

  arr.forEach((cmdStr) => { 
    let [command, card, arg] = cmdStr.split(' ');
    switch (command) {
      case "Add":
        // If the card doesn't exist in print "Card not found."
        if (!cards.includes(card))
          console.log("Card not found.");
        else
          newArr.push(card);
        break;
      case "Insert":
        let index = Number(arg);
        // If the card doesn't exist or the index is invalid print "Error!"
        if (!cards.includes(card) || !newArr[index])
          console.log("Error!");
        else
          newArr.splice(index, 0, card);

        break;
      case "Remove":
        if (!newArr.includes(card))
          console.log("Card not found.");
        else
          newArr = newArr.filter(c => c !==card)
        break;
      case "Shuffle":
        newArr.reverse();
        break;
      case "Swap":
        let card2 = arg;
        let index1 = newArr.indexOf(card);
        let index2 = newArr.indexOf(card2);
        let temp = card;
        newArr[index1] = card2;
        newArr[index2] = temp;
        break;
		}


  })


  console.log(newArr.join(' '))
}

main([
	`Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop`,
	`Add Pop`,
	`Add Exodia`,
	`Add Aso`,
	`Remove Wrath`,
	`Add SineokBqlDrakon`,
	`Shuffle deck`,
	`Insert Pesho 0`,
	`Ready`,
]);