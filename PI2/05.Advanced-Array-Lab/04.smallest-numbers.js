function main(numsArr) { 

  // sort the array asc.
  numsArr.sort((a, b) => a - b)
  // first two numbers 
  // let first = numsArr[0];
  // let second = numsArr[1];

  let [first, second]= numsArr; 
  console.log(`${first} ${second}`);
}

main([30, 15, 50, 5]);