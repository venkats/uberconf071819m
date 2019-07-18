const greet = function(name, msg = `hi${name.length}`) {
  return `${msg} ${name}`;
}

console.log(greet('Jerry'));
