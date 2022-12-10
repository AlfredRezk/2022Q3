let nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, item) => acc + item, 0)


// using reduce as map to transform the array 
const output = nums.reduce((acc, item) => {
  acc.push(item * 2);
  return acc;
}, [])
console.log(output);