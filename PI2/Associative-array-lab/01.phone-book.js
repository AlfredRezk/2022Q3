// 1. Phone Book
// Write a function that stores information about a person’s name and his phone number. The input comes as an array
// of strings. Each string contains the name and the number. If you receive the same name twice just replace the
// number. At the end print the result without sorting it. Try using an associative array.

function main(inputArr) { 

  // Create an empty Object (Associative Array)
  let phoneBook = {};

  // Iterate through the inputs to store data in the Associative array 
  for (let el of inputArr) { 
    let [name, number] = el.split(' ');
    // store key/value in associative Arr
    phoneBook[name] = number;
  }

// Iterate to print the associative array 
  for (let key in phoneBook) { 
    console.log(`${key} -> ${phoneBook[key]}`)
  }

}

main(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])

