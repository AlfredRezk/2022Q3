function main(n, array) { 
  let sum = 0;

  for (let i = 1; i <= n; i++) { 
    let num = array.shift();
    // if the line (index) is even subtract the number to sum, 
    // otherwise add the number to the sum 
    if (i % 2 == 0) sum -= num
    else sum += num;   
  }
  console.log(sum);
}

main(3, [10,20,5]) //-5