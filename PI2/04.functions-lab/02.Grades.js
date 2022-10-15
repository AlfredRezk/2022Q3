// Write a function that receives a grade a grade between 2.00
// and 6.00 and prints the corresponding grade in words
// Between 2.00 and 2.99 Fail
// Between 3.00 and 3.49 Poor
// Between 3.50 and 4.49 Good
// Between 4.50 and 5.49 Very good
// Between 5.50 and 6.00 Excellent

function main(grade) {
  if (grade >= 2 && grade <= 2.99)
    console.log("Fail");
  else if (grade >= 3 && grade <= 3.49)
    console.log("Poor");
  else if (grade >= 3.5 && grade <= 4.49)
    console.log("Good");
  else if (grade >= 4.5 && grade <= 5.49)
    console.log("Very good");
  else if (grade >= 5.5 && grade <= 6.0)
    console.log("Excellent");
}

main(3.33);
main(4.50);
main(2.99);
