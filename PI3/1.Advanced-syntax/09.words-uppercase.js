// Write a program that extracts all words from a passed in string and converts them to upper case. The
// extracted words in upper case must be printed on a single line separated by ", ".
// The input comes as a single string argument - the text to extract and convert words from.
// The output should be a single line containing the converted string.
// Examples
// Input Output Input Output
// 'Hi, how are you?' HI, HOW, ARE,

// YOU

// 'hello' HELLO

// Hints
// ● You may need to use a Regular Expression or alternatively check for all delimiters that can be found
// in a sentence (ex. ",", " ", "!", "?" and so on).

function main(text) {
	let pattern = /[^,! ?]+/g;

	text = text.toUpperCase();
	// Method 1: using Match 
  // let match = text.match(pattern);

  // Method2 : split
	let match = text.split(/[!?, ]+/g).filter((w) => w !== "");
	
  console.log(match.join(', '));
}

main("Hi, how are you?");