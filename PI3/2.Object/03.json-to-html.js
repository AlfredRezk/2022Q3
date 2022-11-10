function main(json) { 
  let arr = JSON.parse(json);
 
  // Object Keys store in array 
  let keys = Object.keys(arr[0]);

  // create output string 
  let output = '<table>\n'
  output += '  <tr>'
  keys.forEach(key => { 
    output+=`<th>${key}</th>`
  })
  output += '</tr>\n';

  arr.forEach(obj => { 
    output += '  <tr>';
    let values = Object.values(obj);
    values.forEach(value => { 
      if (typeof value === 'string')
        value = encodeURIComponent(value);
      output+=`<td>${value}</td>`
    })
    output+='</tr>\n'
  })

  output += '</table>';
  console.log(output);
  
}


main([ '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);