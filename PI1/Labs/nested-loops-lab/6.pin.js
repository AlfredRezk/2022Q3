function main(max1, max2, max3) {
	// First digit - EVEN
	for (let d1 = 2; d1 <= max1; d1 += 2) {
		// 2nd Prime number
		for (let d2 = 2; d2 <= max2; d2++) {
			// continue if prime number
			if (d2 === 2 || d2 === 3 || d2 === 5 || d2 === 7) {
				// Third digit - EVEN
				for (let d3 = 2; d3 <= max3; d3 += 2) {
					console.log(`${d1}${d2}${d3}`);
				}
			}
		}
	}
}

main(3,5,5)
