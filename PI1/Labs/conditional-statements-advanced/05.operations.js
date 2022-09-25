// 5. Operations with Numbers
// Write a function to apply an operator for given two numbers:
// • Receives two real numbers and math operator
// • The math operator could be: "+", "-", "*", "/" and "%"
// • The output should be in the following format:
// "{N1} {operator} {N2} = {result}"
// Example
// 10, 12, + => 10 + 12 = 22

function main(num1, num2, operator) { 
  let result;
  switch (operator) { 
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    case '%': result = num1 % num2; break;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

main(10, 12, '+');  //10 + 12 = 22