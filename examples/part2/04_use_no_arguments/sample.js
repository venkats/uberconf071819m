//old way
//1. arguments is not an array though it looks like it
  // you can't really call array functions on arguments
//2. Code lacks self-documentation

//QUIT using arguments - there should be no arguments about it
const max = function() {
  let large = arguments[0];
  
  for(let i = 0; i < arguments.length; i++) {
    if(large < arguments[i]) large = arguments[i];
  }             
  
  return large;
}

console.log(max(1, 7));
console.log(max(8, 2));
console.log(max(8, 12, 3));
console.log(max(8, 12, 31));