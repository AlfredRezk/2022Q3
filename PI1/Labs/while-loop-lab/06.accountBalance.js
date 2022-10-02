function main(array) { 

  // initial balance 
  let balance = 0;
  let transaction = array.shift();
  while (transaction !== 'End') { 

    // add the transaction to balance 
    balance += transaction;
    if (transaction >= 0) {
      console.log(`Increase: ${transaction.toFixed(2)}`)
    } else { 
      console.log(`Decrease: ${Math.abs(transaction).toFixed(2)}`)
    }

    // Get the next transaction
    transaction = array.shift();
  }

  console.log(`Balance: ${balance.toFixed(2)}`)



}


main([500,15.5,-80.35, 'End'])