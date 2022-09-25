// 1. Power of Number
// Write a function to calculate n^p:
// • Read n (the number) and p (the power)
// • Print the result of n to the power of p
// • Don't use Math.pow(), use loops
// Examples
// 2, 5 => 32

// 1*2*2*2*2*2 = 32

function main(n, p) {
  let result = 1;
  
	for (let i = 0; i < p; i++) {
		result *=  n; //result = result * n
	}
	console.log(result);
}

main(2, 5);