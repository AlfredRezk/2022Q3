// 6. ATM
// Write a function to simulate an ATM withdrawal:
// • Receives 3 numbers: balance, withdraw and limit
// • Print "The withdrawal was successful." if the balance is enough
// • Print "The limit was exceeded." if the limit is exceeded
// • Print "Insufficient availability." if the balance isn't enough

function main(balance, withdraw, limit) { 
  if (withdraw < limit && withdraw < balance) {
    console.log("The withdrawal was successful.");
  } else if (withdraw < limit && withdraw > balance) {
    console.log("Insufficient availability.")
  } else if (withdraw > limit) { 
    console.log("The limit was exceeded.");
  }
}

main(420, 20, 25);
main(10, 50, 20);