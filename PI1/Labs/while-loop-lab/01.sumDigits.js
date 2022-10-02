function main(num){

  // 1. Get the absolute value of number
  num = Math.abs(num);   // Math.abs(-17) => 17 Math.abs(17)=> 17

  // 2.Create sum variable and initialize with value 0
  let sum = 0;

  while (num!==0) { 
    // get the last digit 
    let lastDigit = num % 10;  //5634 %10=> 4 
    sum += lastDigit;
    // remove the last digit 
    num = Math.floor(num/10) //5634/10=> 563.4 => 563 
  }

  console.log(sum);

}

main(5634);
main(150);
main(-532);