// Simple Calculator
// Write a function that receives three parameters and write
// an arrow function, that calculates a result depending on
// operator
// The operator can be multiply ', divide ', add ',
// subtract '
// The input comes as three parameters two numbers and
// an operator as a string



function main(n1, n2, command) { 

  const add = (x, y) => x + y;
	const sub = (x, y) => x - y;
	const mul = (x, y) => x * y;
	const div = (x, y) => x / y;

  switch (command) { 
    case 'multiply': console.log(mul(n1, n2)); break;
    case 'divide': console.log(div(n1, n2)); break;
    case 'add': console.log(add(n1, n2)); break;
    case 'subtract': console.log(sub(n1, n2)); break;
  }
}




main(5, 10, "multiply");