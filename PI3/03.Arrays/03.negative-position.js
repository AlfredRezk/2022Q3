// function main(arr) {
//   let output = [];

//   arr.forEach((num) => {
//     if (num >= 0) {
//       output.push(num);
//     } else {
//       output.unshift(num);
//     }
//   })
//   console.log(output.join('\n'));

// }


function main(arr) { 

  let output = arr.reduce((acc, num) => num>=0? [...acc, num]: [num, ...acc] ,[])  
  console.log(output.join('\n'));
}

main([3, -2, 0, -1]);