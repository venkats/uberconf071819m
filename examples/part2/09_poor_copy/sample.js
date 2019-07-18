const sam = {name: 'Sam', age: 2};
const olderSam = {name: sam.name, age: sam.age + 1};
//the above fails open-closed principle and the DRY principle

console.log(sam);
console.log(olderSam);