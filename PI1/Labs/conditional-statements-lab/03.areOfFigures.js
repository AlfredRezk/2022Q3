// 3. Area of Figures
// Write a function to calculate figure area, which:
// ● Receives the type of the figure (string)
// ● Receives the size of the figure (number)
// ● Checks if the figure is square or circle
// ● Prints the calculated area formatted to the second decimal
// ● Formula for calculating the area of the square: size * size
// ● Formula for calculating the area of the circle: Math.PI * size * size
// Example input output
// square, 5 => 25.00

function main(type, size) {
	let area;
  // Checks if the figure is square or circle
	if (type === "square") {
		area = size * size;
	} else if (type === "circle") {
		area = Math.PI * size * size;
	}

	//Prints the calculated area formatted to the second decimal
	console.log(area.toFixed(2));
}

main("square", 5);