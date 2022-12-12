function main(str) { 
  const arr = JSON.parse(str);
  const output = arr.reduce((acc, obj) => ({ ...acc, ...obj }), {})
  console.log(output);
}

main(`[{"canFly": true},{"canMove":true,
"doors": 4},{"capacity":
255},{"canFly":true, "canLand":
true}]`);