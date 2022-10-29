function main(nums) {
	let pattern = /\+404(-| )\d{3}\1\d{4}\b/g;

	// Method1: match
	// let matches = nums.match(pattern);
	// console.log(matches.join(", "));

	// Method 2
	let validNums = [];
	let validNum = pattern.exec(nums);
	while (validNum) {
		validNums.push(validNum[0]);
		validNum = pattern.exec(nums);
	}
  console.log(validNums.join(', '))

}


main("+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222")