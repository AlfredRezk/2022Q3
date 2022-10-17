function main(drink, qty) {
  let output; 

  switch(drink){
    case 'water': output = 1 * qty; break; 
    case 'coffee': output = 1.5 * qty; break; 
    case 'coke': output = 1.4 * qty; break; 
    case 'snacks': output = 2 * qty; break; 
  }

  console.log(output.toFixed(2));
}
main('water', 5)