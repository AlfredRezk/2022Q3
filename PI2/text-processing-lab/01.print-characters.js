function main(str) { 

  // Method 1: Loop through the string using for of 
  // for (let ch of str)
  //   console.log(ch);
  
// Method 2: Array Methods
  str.split('').forEach(ch => console.log(ch));

  // Method3: Array Methods;

  console.log(str.split('').join('\n'))
}

main("AWord");