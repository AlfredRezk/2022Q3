function main(arr) { 

  let output = [];

  arr.forEach(row => { 
    output = [...output, ...row]
  })

  // output.sort((a, b) => a - b);
  // console.log(output.pop());

  console.log(Math.max(...output))
}

main([
	[20, 50, 10],
	[8, 33, 145],
]);