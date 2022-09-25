// 1. Day of Week
// Write a function to print the day of week as words:
// • Receives integer n: the day of the week in range [1..7]
// • Prints the name of the day (as words, in English)
// • Prints "Error" if the number is not in the given range
// Examples
// 1 => Monday
// 7 =>Sunday
// 9 =>Error
// 0=>Error
// 5 =>Friday
// 2 => Tuesday
// *Hint: Use the weekday number in each case to calculate the weekday name
// Use the switch statement to select one of many code blocks to be executed.

function main(n) { 
  switch (n) { 
    case 1: console.log('Monday'); break;
    case 2: console.log('Tuesday'); break;
    case 3: console.log('Wednesday'); break;
    case 4: console.log('Thursday'); break;
    case 5: console.log('Friday'); break;
    case 6: console.log('Saturday'); break;
    case 7: console.log('Sunday'); break;
    default: console.log('Error'); break

  }
}

main(1);
main(7);
main(9);
main(0);
main(5);
main(2);