
function main(firstName, lastName, hairColor) { 
  // create an object from function inputs
  // convert the object to json JSON.stringify()
  // print the json data 

  let person = { firstName, lastName, hairColor }
  let personJson = JSON.stringify(person);
  console.log(personJson);

// Alternative sol.
  // console.log(JSON.stringify({ firstName, lastName, hairColor }))

}

main('George', 'Jones', 'Brown')