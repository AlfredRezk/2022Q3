function main(arr) { 
  let obj = {};
  arr.forEach(str => { 
    let [command, key, property, value] = str.split(' ');
    switch (command) { 
      case 'create':
        obj[key] = {}   
        if (property === 'inherit') {
					obj[key].inherit = value; // {c1:{}, c2:{inherit: c1}}
				}
        break;
      case 'set':
        obj[key][property] = value;   // {c1:{model:'new model' }}
        break;
      case 'print':
        let properties = obj[key]     //{inherit: c1, model: 'new model}
        if (properties.inherit) { 
          let inherited = obj[properties.inherit];
          properties = {...properties, ...inherited}
        }

        let carProperties = Object.keys(properties)
          .filter(key => key !== 'inherit')
          .map(key => `${key}:${properties[key]}`)
          .join(', ')
        console.log(carProperties);

        break;
    }
  })
}

main([
	"create c1",
	"create c2 inherit c1",
	"set c1 color red",
	"set c2 model new",
	"print c1",
	"print c2",
]);