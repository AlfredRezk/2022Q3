function main(drink, qty) { 
  let drinks = ['water', 'coffee', 'coke', 'snacks'];
  let prices = [1, 1.5, 1.4, 2];

  let index = drinks.indexOf(drink); 
  let output = prices[index] * qty;
  console.log(output.toFixed(2));
}

main('water', 5)