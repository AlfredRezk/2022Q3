function main(floors, estates) {
	// loop for the floors
	for (let f = floors; f >= 1; f--) {
		let result = "";
		// loop for the estates
		for (let e = 0; e < estates; e++) {
			// add spaces between col except the first column
			if (e != 0) result += " ";
			// check for the type office or apt or last apt
			if (f % 2 == 0 && f !== floors) result += `O${f}${e}`;
			else if (f === floors) result += `L${f}${e}`;
			else result += `A${f}${e}`;
		}
		console.log(result);
	}
}

main(5, 3);
