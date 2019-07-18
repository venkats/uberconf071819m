//old JavaScript

function Car() {
  console.log(new.target);
}

Car(); //calling as a function
new Car(); //calling as a constructor

