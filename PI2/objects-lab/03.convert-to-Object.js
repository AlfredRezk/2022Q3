function main(json) {
	// 1. json-> object   JSON.parse
	// 2. object -> array  Object.entries()
	// 3. loop through the array

	// 1. json-> object   JSON.parse
	let obj = JSON.parse(json);
	// 2. object -> array  Object.entries()
	let entries = Object.entries(obj);
	// 3. loop through the array
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}

main('{"name": "George", "age": 40,"town": "Atlanta"}')