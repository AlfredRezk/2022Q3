/** @format */

// 4. Vacation Expenses
// Write a function, which calculates vacation expenses:
// • Receives season, accommodation type and count of the days
// • Prints the total expenses, based on the price table below,
// formatted to the 2nd digit after the decimal point

function main(season, type, days) {
  let total;
  
  if (type === 'Hotel') {
    switch (season) { 
      case 'Spring': total = days * 30 * 0.8; break;
      case 'Summer': total = days * 50; break;
      case 'Autumn': total = days * 20 * 0.7; break;
      case 'Winter': total = days * 40 * 0.9; break;
    }
  } else { 
    switch (season) { 
      case 'Spring': 	total = days * 10 * 0.8; break;
      case 'Summer': total = days * 30; break;
      case 'Autumn': total = days * 15 * 0.7; break;
      case 'Winter': total = days * 10 * 0.9; break;
    }
  }

	console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);
