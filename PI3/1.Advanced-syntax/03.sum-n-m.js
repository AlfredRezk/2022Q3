function main(n, m) { 
  // parse n and m to numbers
  n = Number(n);
  m = Number(m);
  let sum = 0; 
  for (let i = n; i <= m; i++) { 
    sum += i;
  }

  // print the result;
  console.log(sum);
}

// main("1", "5");
main("-8", "20");