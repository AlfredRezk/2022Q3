class Person{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}


function main(classToExtend){
    classToExtend.prototype.species = 'Human';  
    classToExtend.prototype.toSpeciesString = function(){
			//"I am a Human. Person ( Maria, email: maria@gmail.com)"
			return `I am a ${this.species}. ${this.toString()}`;
		}
}


main(Person);
let p = new Person('John Doe', 'doe@mail.com')
console.log(p.toSpeciesString());
