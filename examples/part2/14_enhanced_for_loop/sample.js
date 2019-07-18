const names = ['Tom', 'Jerry'];

for(let i = 0; i < names.length; i++) {
  console.log(`${i}--${names[i]}`);
}

console.log('--------------');

for(const [i, name] of names.entries()) {
  console.log(`${i}--${name}`);
}
