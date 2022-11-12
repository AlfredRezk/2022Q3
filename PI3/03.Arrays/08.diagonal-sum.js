function main(arr) { 
  let output = [];
  let mainSum = 0; 
  let secSum = 0;
  let rowLength = arr[0].length;

  arr.forEach(row => { 
    output = output.concat(row);
  })

  // Main diag
  for (let i = 0; i < output.length; i += rowLength + 1)
    mainSum += output[i];
  
  // Sec diag
  for (let i = rowLength - 1; i < output.length-1; i += rowLength - 1)
    secSum +=output[i]

  console.log(mainSum, secSum);
}

main([
	[20, 40],
	[10, 60],
]);



// [3, 5, 17, -1, 7, 14, 1, -8, 89]