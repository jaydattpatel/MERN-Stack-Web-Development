/*
Author : Jaydatt Patel
Currying Method Function: 
currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.
*/

console.log("----------------1-------------------");
// Currying Method Function:
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("add(1,2,3) :", add(1)(2)(3)); //parsing argument with inner function

var method = add("Method"); //parsing argument and return function
var methD = method("-"); //parsing argument and return function
console.log("methD(1) :", methD(1)); //parsing argument and return value
console.log("methD(2) :", methD(2)); //parsing argument and return value

console.log("----------------2-------------------");
// Currying Method Function:
function power(a) {
  return function (b) {
    return b ** a;
  };
}

console.log("power(3)(2):", power(3)(2));

var square = power(2);
console.log("square(2):", square(2));
console.log("square(3):", square(3));

var cube = power(3);
console.log("cube(2):", cube(2));
console.log("cube(3):", cube(3));

console.log("----------------3-------------------");
function pizzaPricing(size) {
  return function (topping) {
    return function (quantity) {
      let amount = 0;
      if (size.toLowerCase() === "large") amount += 12;
      if (size.toLowerCase() === "medium") amount += 10;
      if (size.toLowerCase() === "small") amount += 8;
      amount = (amount + 1.5 * topping.length) * quantity;
      return amount;
    };
  };
}
var pizza = pizzaPricing("large")(["bacon", "cheese"]);
console.log(pizza(2));
