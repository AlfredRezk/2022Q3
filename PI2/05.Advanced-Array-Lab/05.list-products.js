function main(products) { 

  // sort the products asc ordered by name 
  products.sort((a, b) => a.localeCompare(b));

  // print a numbered array off all the products ordered by name.
  products.forEach((product, index) => { 
    console.log(`${index+1}.${product}`)
  })
}

main(["Potatoes", "Tomatoes", "Onions", "Apples"]);