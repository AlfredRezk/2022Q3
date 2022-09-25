// 4. Ticket Price
// Write a function to calculate ticket price, which:
// ● Receives a ticket type: either "student" or "regular"
// ● Prints the price in the following format "${price}":
// ○ Student ticket price: 1.60
// ○ Regular ticket price: 1.00
// ○ For invalid type "Invalid ticket type!"
// Examples input output
// student => $1.60
// regular => $1.00


function main(type) { 
  if (type === 'student') {
    console.log('$1.60');
  } else if (type === 'regular') {
    console.log('$1.00');
  } else { 
    console.log("Invalid ticket type!");
  }
} 

main('student');
main('regular');