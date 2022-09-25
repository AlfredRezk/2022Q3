/** @format */

// 4. Vacation Expenses
// Write a function, which calculates vacation expenses:
// • Receives season, accommodation type and count of the days
// • Prints the total expenses, based on the price table below,
// formatted to the 2nd digit after the decimal point

function main(season, type, days) {
	let total;

	if (season === "Spring") {
		if (type === "Hotel") {
			total = days * 30 * 0.8;
		} else {
			total = days * 10 * 0.8;
		}
	} else if (season === "Summer") {
		if (type === "Hotel") {
			total = days * 50;
		} else {
			total = days * 30;
		}
	} else if (season === "Autumn") {
		if (type === "Hotel") {
			total = days * 20 * 0.7;
		} else {
			total = days * 15 * 0.7;
		}
	} else if (season === "Winter") {
		if (type === "Hotel") {
			total = days * 40 * 0.9;
		} else {
			total = days * 10 * 0.9;
		}
	}

	console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);
