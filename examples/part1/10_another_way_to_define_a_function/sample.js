let foo = function() {             //safer, but prefer const then you don't have to worry
  console.log('called...');
}

foo();

foo = function() {   //had we used const above, we can't redefine here
  console.log('foo redefined');
}

foo();

//called...
//foo redefined