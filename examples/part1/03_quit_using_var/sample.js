//quit using var
//1. does not have block scope and that can lead to errors
//2. you may redefine a var, but that makes no sense

function foo() {
  var local1 = 4;
  var local1 = 2; //why would anyone redefine a variable in the same scope?
  
  {
    var local2 = 7;
    console.log(local2);
  }
  
  console.log(local1);
  console.log(local2);
}

foo();