class Cat { 
  constructor(name, age) { 
    this.name = name; 
    this.age = age;
  }
  meow() { 
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}


function main(inputArr) { 
  let cats = [];
  inputArr.forEach(catInfo => { 
    let [catName, catAge] = catInfo.split(' ')
    cats.push(new Cat(catName, catAge));
  })
  cats.forEach(cat => cat.meow());
}

main(["Mellow 2", "Tom 5"]);


