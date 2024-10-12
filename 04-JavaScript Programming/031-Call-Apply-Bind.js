/*
 * Author : Jaydatt Patel

Function.prototype.call() :
The call() method of Function instances calls this function with a given this value and arguments provided individually.

Function.prototype.apply():
The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

Function.prototype.bind()
With the bind() method, an object can borrow a method from another object. The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.

*/

const car = {
  name: "car",
  color: "black",
  getDetails(brand, seats) {
    console.log(
      `This is a ${this.color} ${this.name} of ${brand} company. It has ${seats} seats`
    );
  },
};

const bus = {
  name: "bus",
  color: "blue",
};

car.getDetails("Audi", 5);
console.log("call : ");
car.getDetails.call(bus, "Star", 50);
console.log("apply : ");
car.getDetails.apply(bus, ["Gold", 30]);

const veh1 = car.getDetails.bind(bus);
veh1("silver", 20);
veh1("bronze", 45);

console.log("-------------------------------------");

const obj = {
  animal: "Cats",
  sleepDuration: "12 and 16 hours",
};

function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

greet.call(obj);
greet.apply(obj);

let gt_fun = greet.bind(obj);
gt_fun();
console.log("-------------------------------------");

function User(displayName) {
  this.displayName = displayName;
}

const systemCredentials = {
  username: "system",
  password: "pass123",
};
User.prototype.login = function (username, password) {
  // Implement the code here
  if (
    username === systemCredentials.username &&
    password === systemCredentials.password
  ) {
    console.log("Login successful!");
  } else {
    console.log("Login failed!");
  }
};

// Example usage:
const user = new User("John Doe");
// Create the reusable loginFunction here
let loginFunction = user.login.bind(systemCredentials);
loginFunction("system", "pass123"); // Expected output: "Login successful!"
loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login
