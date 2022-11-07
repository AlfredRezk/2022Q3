// Write a JS function that takes two numbers and a string as an input.
// The string may be one of the following: '+', '-', '*', '/', '%', '**'.
// Print on the console the result of the mathematical operation between both numbers and the operator
// you receive as a string.
// The input comes as two numbers and a string argument passed to your function.
// The output should be printed on the console.

function main(num1, num2, opt) { 

  // Method 1
  switch (opt) { 
    case '+': console.log(num1 + num2); break;
    case '-': console.log(num1 - num2); break;
    case '*': console.log(num1 * num2); break;
    case '/': console.log(num1 / num2); break;
    case '%': console.log(num1 % num2); break;
    case '**': console.log(num1 ** num2); break;
  }
  
  // Method 2
  // eval('2+2/5*6')

  // console.log(eval(`${num1}${opt}${num2}`));
}

// main(5, 6, "+");
main(3, 5.5, "*");