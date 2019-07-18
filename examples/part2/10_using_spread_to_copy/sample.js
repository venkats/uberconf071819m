const sam = {name: 'Sam', age: 2, twitter: '@example'};
const olderSam = {...sam, age: sam.age + 1};

console.log(sam);
console.log(olderSam);