const greet = function(name1, name2) {
  console.log(`hello ${name1} ${name2}`);
}

const names = ['Tom', 'Jerry'];

greet(names[0], names[1]);

greet(...names);