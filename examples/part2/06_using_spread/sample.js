const max = function(...numbers) {
  return numbers.reduce((large, e) => large < e ? e : large);
}

const arr = [12, 3, 17];

//console.log(max(arr)); //not what we wanted [12, 3, 17]

//console.log(max(arr[0], arr[1], arr[2]));
//I need another job

console.log(max(...arr));

//receving end ... is rest
//sending end ... is spread