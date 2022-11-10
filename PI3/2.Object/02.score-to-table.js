{/* 
<table>
  <tr><th>name</th><th>score</th></tr>
  <tr><td>Peter &amp; Kiro</td><td>479</td></tr>
  <tr><td>George, Maria &amp; Viki</td><td>205</td></tr>
</table> 
*/}

function main(json) {
  // parse the JSON input array 
  let arr = JSON.parse(json);

  // declare the output string;
  let output = '<table>\n'
  // add the table header 
  output += "  <tr><th>name</th><th>score</th></tr>\n";

  // add the rows for the array object
  arr.forEach(obj => { 
    output += `  <tr><td>${encodeURIComponent(obj.name)}</td><td>${obj.score}</td></tr>\n`;
  })
  
  output += "</table> ";
  console.log(output.replace(/[&]/g, '&amp;'))
}

main('[{"name":"Peter & Kiro","score":479},{"name":"George, Maria & Viki", "score":205}]')