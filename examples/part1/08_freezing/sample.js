'use strict'; //this will make sure the set of read-only blows up

const sam = Object.freeze({name: 'Sam', age: 2 });
console.log(sam);

//sam = sam; //ERROR

sam.age = 3;

console.log(sam);