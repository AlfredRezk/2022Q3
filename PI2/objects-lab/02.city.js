// Receive five single strings.
// Create a city object which will hold the city name, area, population, country and postcode.
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// The input will be in the following order: name, area, population, country and ZIP code.
// See the examples below.
// "Atlanta", "343", "416474", "USA", "404" 
// name -> Atlanta
// area -> 343
// population -> 416474
// country -> USA
// postCode -> 404

function main(name, area, population, country, postCode) {
  // 1. create the city object 
  let city = { name, area, population, country, postCode }
  
  // 2. loop through the object and print key -> value
  let entries =  Object.entries(city)
//  [ ['name', 'Atlanta'], ['area', '343'], ['population', '416474'], ['country', 'USA'], ['postCode', '404']  ]
  
  entries.forEach(([key, value]) => console.log(`${key} -> ${value}`))
  
  // for (let entry of entries) { 
  //   console.log(`${entry[0]} -> ${entry[1]}`)
  // }
  
}

main("Atlanta", "343", "416474", "USA", "404");