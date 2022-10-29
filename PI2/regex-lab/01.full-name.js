function main(names){

  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  // Method 1: string.match(regex)
  // let matches = names.match(pattern);
  // console.log(matches.join(' '));

  // Method 2: using regex.exec(string)
  // let validNames = [];
  // let validName = pattern.exec(names);
  // while (validName) { 
  //   validNames.push(validName[0])
  //   validName = pattern.exec(names);
  // }

  // Method 3: using regex.exec()
  let validNames = [];

 
  while ((validName = pattern.exec(names)) !== null) { 
    validNames.push(validName[0]);
  }
 console.log(validNames.join(" "));
}

main("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan    Ivanov");