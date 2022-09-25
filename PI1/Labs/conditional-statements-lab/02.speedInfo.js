// 2. Speed Info
// Write a function to check for fast / slow speed, which:
// ● Receives a number (speed)
// ● Prints "Slow" if the number <= 30
// ● Prints "Fast" if the number > 30
// Examples
// 30 Slow
// 60 Fast

function main(speed) { 
  if (speed <= 30) {
    console.log('Slow');
  } else { 
    console.log('Fast');
  }
}

main(30);
main(60)