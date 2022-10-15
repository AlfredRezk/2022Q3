/** @format */

function main(inputArr) {
  while (inputArr.length > 1) { 
    inputArr = condense(inputArr);
  }
  console.log(inputArr.join(' '));
}


function condense(arr) {
	// Empty array to hold the condensed elements
	let condensed = [];
	// loop through the array item and add it to its adjacent element
	// then store the sum in the condensed array
	for (let i = 0; i < arr.length - 1; i++) {
		condensed.push(arr[i] + arr[i + 1]);
	}
	return condensed;
}

main([2, 10, 3]);
main([5, 0, 4, 1, 2]);
main([1]);
