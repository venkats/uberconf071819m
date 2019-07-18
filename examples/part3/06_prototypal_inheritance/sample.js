class Car {
  drive(distance) {
    this.miles += distance;
  }
}

Car.prototype.miles = 0;

const car1 = new Car();
const car2 = new Car();

console.log(car1.miles);
console.log(car2.miles);

console.log(car1.hasOwnProperty('miles'));
console.log(car2.hasOwnProperty('miles'));

car1.drive(10);
console.log(car1.miles);
console.log(car2.miles);

//gets are deep, sets are shallow
console.log(car1.hasOwnProperty('miles'));
console.log(car2.hasOwnProperty('miles'));


