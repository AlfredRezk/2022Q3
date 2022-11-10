
function main(inputArr) { 

  // let obj = {
  //   product: [{ town: 'new york', price: }, {town2: price2}]
  // }
  
  let outputObj = {}

  inputArr.forEach(townInfo => { 
    let [town, product, price] = townInfo.split(' | ');
    if (!outputObj.hasOwnProperty(product))
      outputObj[product] = [];
    let obj = {}
    obj.town = town; 
    obj.price = price
    outputObj[product].push(obj);
  })

  // sort the towns array 
  let productsArr = Object.keys(outputObj);
  productsArr.forEach(product => { 
    outputObj[product].sort((a,b)=> Number(a.price) - Number(b.price))
  })

  // printing 
  productsArr.forEach(product => { 
    console.log(
			`${product} -> ${outputObj[product][0].price} (${outputObj[product][0].town})`
		);
  })

}

main(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sydney | Orange | 3',
'Sydney | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])