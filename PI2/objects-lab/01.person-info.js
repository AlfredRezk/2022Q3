function main(firstName, lastName, age){

  // 1. create an object from function inputs 
  let obj = { firstName, lastName, age }
  
  // 2. loop through the object entries and print results 
  // for (let [key, value] of Object.entries(obj)) { 
  //   console.log(`${key}: ${value}`)
  // }

  let entries = Object.entries(obj);
  entries.forEach((entry) => {
    let [key, value] = entry;
    console.log(`${key}: ${value}`)
    
  })
}

main("Peter", "Pan", "20");