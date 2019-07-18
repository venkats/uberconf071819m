function foo() {
  console.log('called...');
}

foo();

function foo() {
  console.log('foo redefined');
}

foo();

//called...  - not really due to hosting
//foo redefined