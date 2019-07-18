class Car {
}

const car1 = new Car();
const car2 = new Car();

const car1Prototype = Object.getPrototypeOf(car1);
const car2Prototype = Object.getPrototypeOf(car2);

console.log(car1 === car2);
console.log(car1Prototype === car2Prototype);