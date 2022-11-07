// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string
// and an error message if the string is not recognized.
// The input comes as a single string argument.
// The output should be returned as a result.

function main(day) { 

  let days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const index = days.indexOf(day);

  // if not found indexOf will return -1
  // if (index == -1) { 
  //   console.log('error');
  //   return;
  // }

  // console.log(index)


  console.log(index==-1? 'error': index)
}

main('Monday');
main('Friday');
main('Invalid');