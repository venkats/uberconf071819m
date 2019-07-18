const greet = function(name, msg = 'hi') {
  return `${msg} ${name}`;
}

console.log(greet('Jerry'));  //take the default
console.log(greet('Jerry', null));
console.log(greet('Jerry', undefined));  //take the default