const max = function(...numbers) { //self documenting
  //numbers is an array unlike arguments
  
  //let large = numbers[0];
  //
  //for(let i = 0; i < numbers.length; i++) {
  //  if(large < numbers[i]) large = numbers[i];
  //}             
  //
  //return large;
  
  return numbers.reduce((large, e) => large < e ? e : large);
}

console.log(max(1, 7));
console.log(max(8, 2));
console.log(max(8, 12, 3));
console.log(max(8, 12, 31));