const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  numbers.filter(function(e) { return e % 2 == 0; })
    .map(function(e) { return e * 2; })
    .reduce(function(total, e) { return total + e; }, 0));

console.log(
  numbers.filter(e => e % 2 == 0)
    .map(e => e * 2)
    .reduce((total, e) => total + e, 0));    