const greet = function(name, msg = 'hello') {
  return `${msg} ${name}`;
}

console.log(greet('Jane'));
console.log(greet('Jane', 'howdy'));