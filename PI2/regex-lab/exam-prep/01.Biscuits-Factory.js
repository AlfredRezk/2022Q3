function main(biscuits, workers, otherBiscuits) {
	// Calculate how much biscuits I make per 30days (per month)
	let thirdDayProd = Math.floor(biscuits * workers * 0.75) * 10;
	let regularProd = Math.floor(biscuits * workers) * 20;
	let totalProd = thirdDayProd + regularProd;
	// print "You have produced {countBiscuits} biscuits for the past month."
	console.log(`You have produced ${totalProd} biscuits for the past month.`);

	// calculate the percentage difference bet your company and the other company
	let percentage = Math.abs(
		((totalProd - otherBiscuits) / otherBiscuits) * 100
	).toFixed(2);

	// if (totalProd > otherBiscuits) {
	// 	console.log(`You produce ${percentage} percent more biscduits.`);
	// } else {
	// 	console.log(`You produce ${percentage} percent less biscuits.`);
  // }
  
  console.log(`You produce ${percentage} percent ${totalProd>otherBiscuits? 'more': 'less'} biscuits.`);
}

main(78, 8, 16000);
