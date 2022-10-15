function main(arr) { 

  for (let i = 0; i < arr.length / 2; i++) { 
    let j = arr.length - 1 - i;
    // swap 2 elements 
    let temp = arr[i]; 
    arr[i] = arr[j];
    arr[j] = temp;
  }

  console.log(arr.join(' '))

  // console.log(arr.reverse().join(' '))
}

main(["a", "b", "c", "d", "e"]);
main(["abc", "def", "hig", "klm", "nop"]);