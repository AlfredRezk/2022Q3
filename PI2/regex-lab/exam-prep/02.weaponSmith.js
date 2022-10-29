function main(arr) {
	// get the particles name, first element in the array
	let particles = arr.shift().split("|");
	// Remove the done command
	arr.pop();

	arr.forEach((cmdStr) => {
		let [command, input, index] = cmdStr.split(" ");
		index = Number(index);
		switch (command) {
			case "Move":
				if (input === "Right" && particles[index + 1]) {
					let temp = particles[index];
					particles[index] = particles[index + 1];
					particles[index + 1] = temp;
				} else if (input === "Left" && particles[index - 1]) {
					let temp = particles[index];
					particles[index] = particles[index - 1];
					particles[index - 1] = temp;
				}
			case "Check":
				switch (input) {
					case "Odd":
						console.log(
							particles.filter((item, index) => index % 2 !== 0).join(" ")
						);
						break;
					case "Even":
						console.log(
							particles.filter((item, index) => index % 2 === 0).join(" ")
						);
						break;
				}
		}
	});

	console.log(`You crafted ${particles.join("")}!`);
}

main([
	`ha|Do|mm|om|er`,
	`Move Right 0`,
	`Move Left 3`,
	`Check Odd`,
	`Move Left 2`,
	`Move Left 10`,
	`Move Left 0`,
	`Done`,
]);
