function main(arr) { 

  let oddSum = 0;
  let evenSum = 0;

  // loop through the array 
  for (let num of arr) { 
    if (num % 2 == 0) { 
      evenSum += Number(num);
    } else {
      oddSum += Number(num);
    }
  }

  console.log(evenSum - oddSum);

}

main([1, '2', 3, '4', 5, 6]);
main([3, 5, '7', '9']);