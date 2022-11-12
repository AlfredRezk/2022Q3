function main(n, k) { 

  let output = [1];

  for (let i = 1; i < n; i++) { 
    // get the sum of previous k digits 
    let seq = output.slice(-k)
      .reduce((sum, num) => sum + num, 0)
    output.push(seq);
  }

  console.log(output.join(' '));

}



main(6,3)