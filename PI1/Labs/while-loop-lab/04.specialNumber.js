function main(num) {
  let numCopy = num; 
  let isSpecial = true;

  // determinate if the number is special or not
  while (num != 0) { 
    // Get the last digit 
    let lastDigit = num % 10;
    if (lastDigit !==0 && numCopy % lastDigit !== 0) { 
      isSpecial = false;
      break;
    }

    // remove the last digit
    num = Math.floor(num / 10);
  }


  if (isSpecial) {
    console.log(`${numCopy} is special`)
  } else { 
     console.log(`${numCopy} is not special`);
  }
}




main(204)