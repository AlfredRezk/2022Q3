function main(arr) { 
  // create an empty object
  let towns = {};


  arr.forEach((town, index) => { 
    if (index % 2 == 0) {
      if (towns.hasOwnProperty(town)) {
        towns[town] += Number(arr[index + 1])
      } else { 
        towns[town] = Number(arr[index + 1]);
      }  
    } 
  })

  console.log(JSON.stringify(towns))
}


main(["Sydney", "20", "Melbourne", "3", "Sydney", "5", "Melbourne", "4"]);