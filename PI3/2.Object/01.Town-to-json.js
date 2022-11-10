function main(inputArr){

  // create an empty array 
  let output = [];

  // Get the title and parse it 
  let [nameKey, latKey, longKey ] = inputArr.shift().replace(/[|]\s?/g, '').trim().split(' ')

  // Iterate through every row (array elements)
  //  parse the data /values 
  // create an object 
  // push the object to the output array 
  inputArr.forEach((townData) => { 
    // parse the data to get object values 
    let [nameValue, latValue, longValue] = townData.replace(/[|]\s?/g, '').trim().split(' ');
    let obj = {};
    obj[nameKey] = nameValue; 
    obj[latKey] = Number(Number(latValue).toFixed(2))
    obj[longKey] = Number(Number(longValue).toFixed(2))
    output.push(obj);
  })

  // print the output array as JSON
  console.log(JSON.stringify(output))
}


main(['| Town | Latitude | Longitude |',
'| Melbourne |-37.840935 | 144.946457|',
'| Beijing | 39.913818 | 116.363625 |'])