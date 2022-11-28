
function solve() {
	const inputText = document.getElementById("text").value;
	const inputNum = document.getElementById("number").value;
	const result = document.getElementById("result");
	result.innerText = textSeparator(inputText, Number(inputNum));
}

function textSeparator(text, num) {
	// RandomInput1234  , 2
	const textLength = text.length; //15
	// Get the remainder
	const remainder = textLength % num; //15%2 => 1
	if (remainder) {
		text = text + text.slice(0, num - remainder); // RandomInput1234R  => 16
	}

	let regex = new RegExp(`.{${num}}`, "gi");
	return text.match(regex).join(" ");
}
