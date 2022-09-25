// 2. Min and Max Number
// Write a function to find the biggest and the smallest number
// • Input:
//   • Integer n: the count of numbers to be read
//   • n floating-point numbers (as array)
//   • Finds and prints the min and the max number
// main(3, [10,350,50]) => Min number: 10
//                         Max number: 350

function main(n, array) { 
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < n; i++) { 
    // get the number from the array 
    let num = array.shift();
    // if num is less than min
    if (num < min) { 
      min = num;
    }
    // if num is bigger than max
    if (num > max) { 
      max = num;
    }
  }

  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);
}
main(3, [10, 350, 50]);