function main(str1, char, str2) { 


  str1 = str1.replace('_', char);
  // console.log(`${str1===str2 ? 'Matched': 'Not Matched' }`)
  console.log(`${str1!==str2 ? 'Not Matched': 'Matched' }`)

}

main('str_ng', 'I', 'strong')
main('str_ng', 'i', 'string')