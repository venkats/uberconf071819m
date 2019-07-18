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
}

const car = new Car(2019, 'blue');

console.log(car);
console.log(car.year);
console.log(car.toString());
console.log(car.color);
car.color = 'orange';
console.log(car.color);
car.color = '';      
