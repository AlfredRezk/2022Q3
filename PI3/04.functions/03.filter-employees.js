function main(data, criteria) { 
  // parse the data to an array of objects 
  let employeeArr = JSON.parse(data);

  // parse the criteria 
  let [key, value] = criteria.split('-');

  let employeeFilter = employeeArr.filter(emp => emp[key] === value);

  employeeFilter.forEach((emp, i) => { 
    const { email, last_name, first_name } = emp;
    console.log(`${i}. ${first_name} ${last_name} - ${email}`)
  })

}

main(
	`[{
"id": "1",
"first_name": "Ardine",
"last_name": "Bassam",
"email": "abassam0@cnn.com",
"gender": "Female"
}, {
"id": "2",
"first_name": "Kizzee",
"last_name": "Jost",
"email": "kjost1@forbes.com",
"gender": "Female"
},
{
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}]`,
	"gender-Female"
);