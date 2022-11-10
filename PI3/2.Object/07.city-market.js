function main(inputArr) {
  let towns = {}

  inputArr.forEach(townStr => { 
    let [name, product, quantityPrice] = townStr.split(' -> ')
    let [quantity, price] = quantityPrice.split(' : ');
    // calculate the income 
    let income = Number(quantity) * Number(price);

    if (!towns.hasOwnProperty(name)) { 
      towns[name] = []; 
    }
    let obj = {};
    obj[product] = income;
    towns[name].push(obj);

  })

  for (let town in towns) { 
    console.log(`Town - ${town}`);
    towns[town].forEach(product => {
      let key = Object.keys(product).join('');
      console.log(`$$$${key} : ${product[key]}`);
    })
  }

}

main(['Sydney -> Laptops HP -> 200 : 2000',
'Sydney -> Raspberry -> 200000 : 1500',
'Sydney -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])