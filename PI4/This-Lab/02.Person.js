class Person { 
  constructor(first, last) { 
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() { 
    return this.firstName+' '+this.lastName
  }

  set fullName(value) { 
    const [first, last] = value.split(' ');
    // if no last name return and don't change the firstName and lastName properties 
    if (!last) return;
    // If you have a correct fullName syntax 
    this.firstName = first;
    this.lastName = last;
  }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla