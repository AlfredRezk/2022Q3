function main(stopNum, numbers) { 
  // first number in the array 
  let prevNum = numbers.shift();  //20
  
  while (prevNum !== stopNum && prevNum !== undefined) { 
    let currentNum = numbers.shift(); //30
    if (currentNum == stopNum) { 
      console.log(prevNum*1.2);
      break;
    }

    prevNum = currentNum   // 30
  }



}

main(25, [20,30,25])