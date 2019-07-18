class Person {
  constructor(name) {
    this.name = name;
  }
}

class CoolPerson extends Person {  //looks like Java, but
  //this is prototypal inheritance and not class based inheritance.
  constructor(name, index) {
    super(name);
    this.index = index;
  }
}                      

console.log('ok');