function main(arr) { 

  // Create empty Map
  let map = new Map();

  // unique words Array
  let uniqueArr = [...new Set(arr)];

  //  Iterate through the unique words arr
  uniqueArr.forEach(word => { 
    let count = arr.filter(el => el === word).length
    map.set(word, count);
  })

  // convert Map to array 
  let mapArr = Array.from(map);
  mapArr.sort((a, b) => b[1] - a[1]);

  mapArr.forEach(([word, occr])=> console.log(`${word} -> ${occr} times`))



}

main([
	"Here",
	"is",
	"the",
	"first",
	"sentence",
	"Here",
	"is",
	"another",
	"sentence",
	"And",
	"finally",
	"the",
	"third",
	"sentence",
]);