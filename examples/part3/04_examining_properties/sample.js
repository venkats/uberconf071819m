'use strict';

class Car {
  constructor(year, color) {
    this.year = year;
    this.carColor = color;
  }
  
  toString() { return `car made in year ${this.year}`; }
  
  get color() { return this.carColor; }
  set color(value) {
    if(value.trim() === '') {
      console.log(`really? empty not allowed, we will come burn your village`);
    }
    this.carColor = value;
  }
  
  static check() {}
}

const car = new Car(2019, 'blue');

for(const prop in car) {
  console.log(`${prop} is ${car[prop]}`);
}
