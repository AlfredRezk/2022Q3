// 4. Vacation Expenses
// Write a function, which calculates vacation expenses:
// • Receives season, accommodation type and count of the days
// • Prints the total expenses, based on the price table below,
// formatted to the 2nd digit after the decimal point

function main(season, type, days) {
	let total;
	if (season === "Spring" && type === "Hotel") {
		total = days * 30 * 0.8;
	} else if (season === "Spring" && type === "Camping") {
		total = days * 10 * 0.8;
	} else if (season === "Summer" && type === "Hotel") {
		total = days * 50;
	} else if (season === "Summer" && type === "Camping") {
		total = days * 30;
	} else if (season === "Autumn" && type === "Hotel") {
		total = days * 20 * 0.7;
	} else if (season === "Autumn" && type === "Camping") {
		total = days * 15 * 0.7;
	} else if (season === "Winter" && type === "Hotel") {
		total = days * 40 * 0.9;
	} else if (season === "Winter" && type === "Camping") {
		total = days * 10 * 0.9;
  }
  
  console.log(total.toFixed(2));
}

main('Winter', 'Hotel', 5)