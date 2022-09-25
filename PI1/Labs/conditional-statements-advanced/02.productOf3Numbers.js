// 2. Product of 3 Numbers' Sign
// Calculate the sign of the product of 3 numbers:
// • Function should receive 3 floating-point numbers
// • Print the sign of the product of the entered 3 numbers: positive, negative or zero
// • Try to do this without multiplying the 3 numbers
// Examples
// Input Output
// 2*3*-1  => Negative
// -3*-4*5 => Positive

function main(num1, num2, num3) { 
  // check if any of the numbers is zero 
  if (num1 === 0 || num2 === 0 || num3 === 0) { 
    console.log('zero');
    return;
  }

  // if all numbers are non zero 
  let negativeCounter = 0;
  if (num1 < 0) negativeCounter++;
  if (num2 < 0) negativeCounter++;
  if (num3 < 0) negativeCounter++;

  // check if the number of negative numbers are even or add 
  if (negativeCounter % 2 === 0) {
    // even count => -1*-2*3 = +6 , count = 2 
    console.log('Positive');
  } else { 
    // odd count => -1*-2*-3 = -6  , count = 3
    console.log('Negative');
  }
}

main(2, 3, -1); // Negative
main(-3, -4, 5); // Positive