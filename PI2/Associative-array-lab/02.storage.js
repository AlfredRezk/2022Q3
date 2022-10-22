function main(arr) { 
  // create an Empty Map
  let map = new Map();

  // Iterate through the input array to store key/value in Map
  for (let data of arr) { 

    let [product, qty] = data.split(' ');
    qty = Number(qty);
    // let product = data.split(' ')[0];
    // let qty = data.split(' ')[1];

    if (!map.has(product)) {
      map.set(product, qty)
    } else { 
      // get the old qty
      let oldQty = map.get(product)
      let newQty = oldQty + qty;
      map.set(product, newQty);
    }

  }

  map.forEach((value, key) => { 
    console.log(`${key} -> ${value}`);
  })

}

main(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);