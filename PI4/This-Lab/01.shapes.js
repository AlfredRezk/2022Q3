function area() {
	return this.x * this.y;
}

function vol() {
	return this.x * this.y * this.z;
}

function main(area, vol, inputs) {
	// Parse the string to an array
	const shapes = JSON.parse(inputs);

	// Loop through the shapes array and calculate the area and volume

	const output = shapes.map((shape) => ({
		area: area.call(shape),
		volume: vol.call(shape),
	}));

	console.log(output);
}

main(
	area,
	vol,
	`[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);
