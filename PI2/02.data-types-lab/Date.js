// current Date
let date = new Date();

// Custom date 
let customDate = new Date('March 12 1980');

// Date methods - Set 
date.setMonth('11'); //0-11
date.setFullYear('1984');
date.setHours(5)  //0-23
date.setDate('24') //1-31
date.setMinutes('24') 
date.setSeconds('3')

// Date Methods - get
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getDate());
console.log(date.getDay());  // Monday 1, ... Sunday 7

// Time stamp 
console.log(Date.now())   
let formatedDate = date.toLocaleDateString("en-US", {
	// weekday: "narrow",
	year: "2-digit",
	// month: "short",
	// day: "numeric",
});

console.log(formatedDate)
