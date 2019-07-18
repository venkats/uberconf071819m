//fixing the mess:
//1. Always use 'use strict';
//2. If you are using modules in JavaScript, use strict is already used implicitly

'use strict';

function foo() {
  var local1 = 7;
  local2 = 4;
  
  console.log(local1);
  console.log(local2);
}

foo();
//console.log(local1); //ERROR
console.log(local2);