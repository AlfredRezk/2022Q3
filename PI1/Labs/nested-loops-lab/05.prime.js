function main(start, end) { 


  // outer loop for [start - end] [20-30]
  for (let num = start; num <= end; num++) { 
    let prime = true;

    // check if the number is prime number or not 
    for (let i = 2; i <= num; i++) { 
      if (num % i == 0&& num !==i) { 
        prime = false;
        break;
      }
    }


    if (prime) console.log(num);
  }
}

main(20,30)