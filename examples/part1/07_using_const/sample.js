//prefer const over let wherever possible

//const first, let if not, never var

//const protects the variable or the reference only

const sam = {name: 'Sam', age: 2 };
console.log(sam);

//sam = sam; //ERROR

sam.age = 3;
console.log(sam);