function main(arr) { 
  let towns = {}

  arr.forEach(townStr => { 
    let [townName, townPop] = townStr.split(' <-> ');
    if (towns.hasOwnProperty(townName)) {
      // Add the pop (to existing pop)
      towns[townName] += Number(townPop)
    } else { 
      towns[townName] = Number(townPop);
    }
  })

  // Iterate through the object
  for (let [key, value] of Object.entries(towns))
    console.log(`${key}: ${value}`);

}

main([
	"Istanbul <-> 100000",
	"Honk Kong <-> 2100004",
	"Jerusalem <-> 2352344",
	"Mexico City <-> 23401925",
	"Istanbul <-> 1000",
]);