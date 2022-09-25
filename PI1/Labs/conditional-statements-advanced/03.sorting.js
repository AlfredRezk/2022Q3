// 3. Sorted Numbers
// Write a function, which checks for sorted 3 numbers:
// • Receives 3 real numbers
// • Prints "Ascending" if the numbers are in ascending order
// • Prints "Descending" if the numbers are in descending order
// • Prints "Not sorted" in any other case
// Examples
// 1, 2, 3  =>  Ascending
// 3, 1, 2 =>  Not sorted


// Ascending num1<num2<num3  => n1 < n2 && n2 <n3
// Descending num1> num2 >num3 => n1> n2 && n2>n3
// Not sorted (1,3,2);

function main(n1, n2, n3) { 
// Ascending
  if (n1 < n2 && n3 > n2) {
    console.log('Ascending');
  }
  // Descending
  else if (n1 > n2 && n2 > n3) {
    console.log('Descending');
  }
  // Not sorted 
  else { 
    console.log('Not sorted');
  }
}

main(1, 2, 3); // Ascending
main(3, 2, 1); // Descending
main(1, 3, 2); //Not sorted