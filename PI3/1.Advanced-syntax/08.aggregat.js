function main(arr) { 

  // solve for sum 
  console.log(solve(arr, 0, (a, b) => a + b))
  // solve for sum of inverse 
  console.log(solve(arr, 0, (a, b) => a + 1 / b).toFixed(4));
  // Solve for concatenation 
  console.log(solve(arr, "", (a, b) => a + b));

}

function solve(nums, initVal, func) { 

  // initialize my result with the initial value
  let result = initVal;
  // loop through the array of numbers
  nums.forEach(num => { 
    result = func(result, num)
  })

  return result;
}

main([1, 2, 3]);