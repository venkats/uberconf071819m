const longestName = function(...names) {
  if(names.length === 0) return;
  
  return names.reduce((longest, name) =>
    longest.length < name.length ? name : longest);
}

const namesThatStartWith = function(letter, ...names) {
  return names.filter(name => name.startsWith(letter));
}            

const greet = function(msg, name) {
  return `${msg} ${name}, how're you?`;
}       

//const greetWith = function(msg) {
//  return function(name) {
//    return greet(msg, name);
//  }
//}

//const greetWith = function(msg) {
//  return greet.bind(null, msg);
//}
//bind is the old way and is smell. Let's not do that.

//const greetWith = function(msg) {
//  return name => greet(msg, name);
//}

//const greetWith = (msg) => {
//  return name => greet(msg, name);
//}

//const greetWith = (msg) => name => greet(msg, name);

const greetWith = msg => name => greet(msg, name);

module.exports = {
  longestName,
  namesThatStartWith,
  greet,
  greetWith,
};