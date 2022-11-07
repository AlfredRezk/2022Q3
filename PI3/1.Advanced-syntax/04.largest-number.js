// Write a function that takes three number arguments as an input and find the largest of them. Print the
// following text on the console: 'The largest number is {number}.'.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function main(num1, num2, num3) {
	// Method 1 : Arrays
	// let arr = [num1, num2, num3];
	// let largest = arr.sort((a, b) => b - a).shift()


	// Method 2: Math.max()
	let largest = Math.max(num1, num2, num3);

	console.log(`The largest number is ${largest}.`);
}

main(5, -3, 16);
main(-3, -5, -22.5);