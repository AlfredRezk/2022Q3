function main(arr) {
  let first = Number(arr[0]);
  let last = Number(arr[arr.length - 1]);
  console.log(arr);

  // let first = Number(arr.shift());
  // let last = Number(arr.pop());

  console.log(first + last);

}

main(["20", "30", "40"]);