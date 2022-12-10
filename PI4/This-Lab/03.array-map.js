function main(arr, func) { 

  const output = arr.reduce((acc, el) => { 
    acc.push(func(el))
    return acc;
  }, [])

  return output
}

// let nums = [1,2,3,4,5];
// console.log(main(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]

let letters = ["a", "b", "c"];
console.log(main(letters, (l) => l.toLocaleUpperCase()));