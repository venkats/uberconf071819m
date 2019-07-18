//lexical scoping: a variable that is unbounded within a function
//is bound to a variable in the defining scope of the function.
//In short, you can eye ball the code to find it.

//dynamic scoping is where an unbounded variable is bound to
//a variable that is provided by caller of the function.

//In JavaScript the semantics of funtions and arrow funtions are
//not the same.

//In JavaScript, functions use lexical scoping for all variables
//except this and arguments. this and arguments are dynamically 
//scoped.

//In JavaScript, arrow functions use lexical scoped for *all*
//variables including this and arguments

const something = 4;
this.another = 7;
const that = this;

//const foo = function() {
const foo = () => {
  //something is lexically scope
  console.log(`${something} ${this.another} ${that.another}`);
}
                         //regular          //arrow
foo();                   //4 undefined 7    4 7 7
foo.call({another: 14}); //4 14 7           4 7 7