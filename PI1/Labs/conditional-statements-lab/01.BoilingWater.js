// 1. Boiling Water
// Write a function to check for boiling water, which:
// ● Receives a number: the water temperature (in °C)
// ● Prints "The water is boiling " if the number > 100
// ● Prints "The water is not hot enough" in all other cases
//   Examples 
//   104.8 The water is boiling
//   29 The water is not hot enough


function main(temp) {
  let output;
  
  if (temp>100) { 
    output = 'The water is boiling';
  } else { 
    output = 'The water is not hot enough'
  }
  console.log(output)
}

main(104.8);
main(29)