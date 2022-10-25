function main(text, word) {
  
  // Method1: Text processing 
  // let counter = 0; 
  // while (text.includes(` ${word} `)) { 
  //   text = text.replace(` ${word} `, "");
  //   counter++;
  // }

  // console.log(counter);
  
  
  // Method 2: Array Filter
  // let words = text.split(' ');
  // let match = words.filter((w) => w == word) // ['is', 'is']
  // console.log(match.length)
  
  // Alt 
  console.log(text.split(' ').filter(w => w == word).length);
}


main("This is a word and it also is a sentence", "is");



