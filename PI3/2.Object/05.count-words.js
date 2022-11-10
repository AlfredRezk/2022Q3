function main(arr) { 
  // get the text 
  let text = arr[0];
  // pattern letters, digits and _
  let regex = /\w+/g;
  // create empty object 
  let words = {};
  // all words matching the pattern 
  let wordsArr = text.match(regex); 
  wordsArr.forEach(word => { 
    // filter the word and return an array of all matches
    let count = wordsArr.filter(w => w == word).length
    words[word] = count;
  })

  console.log(JSON.stringify(words));
}

main(["JS devs use Node.js for server-side JS.-- JS for devs"]);