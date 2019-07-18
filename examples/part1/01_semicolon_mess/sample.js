function foo(n) {
  if(n < 5) {
    return  //; is inserted here...
      n * 2
  }
  
  return n;
}

console.log(foo(6));
console.log(foo(3));