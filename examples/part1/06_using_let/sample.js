//quit using var
//use let instead (well almost...)

//let does not permit redefinition in the same scope
//let has block scope

function foo() {
  let local1 = 4;
  //let local1 = 2; //ERROR 
  
  {
    let local2 = 6;
    console.log(local2);
  }
  
  console.log(local1);
//  console.log(local2); //ERROR
}

foo();