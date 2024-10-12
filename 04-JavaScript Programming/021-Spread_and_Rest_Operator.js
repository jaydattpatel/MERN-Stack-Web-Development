/*
 * Author : Jaydatt Patel
spread and rest operator : (...array) or (...array[size_limit])

In Javascript, both the spread operator and rest parameter have the same syntax which is three dots(...). Even though they have the same syntax they differ in functions.

Spread operator: The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.
spread operator used to:
- Add new members to arrays without using the push() method,
- Convert a string to an array and
- Copy either an object or an array into a separate object 

Rest operator: The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier. 

*/
console.log("---------0--------");
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

console.log("---------1--------");
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array

console.log("---------2--------");
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car }; // concatenate
console.log(flyingCar); // {wings: 2, wheels: 4}

console.log("---------3--------");
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);

console.log("---------4--------");
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };
car1.speed = 201;
console.log("car1: ", car1.speed, ", car2: ", car2.speed);

console.log("---------5--------");
let obj = {
  key: 1,
  value: 4,
};
let output = { ...obj };
output.value -= obj.key;
console.log(output.value);

console.log("---------6--------");
function count(...basket) {
  console.log(basket.length);
}
count(10, 9, 8, 7, 6);

console.log("---------7--------");
const myNames = ["Amit", "Rahul"];
const bio = { ...myNames, runs: "codes.com" };
console.log(bio);
// { '0': 'Amit', '1': 'Rahul', runs: 'codes.com' }

//rest operator example
console.log("---------8--------");
function average(...args) {
  console.log(args);
  var avg =
    args.reduce(function (a, b) {
      return a + b;
    }, 0) / args.length;
  return avg;
}
console.log("average of numbers is : " + average(1, 2, 3, 4, 5));
console.log("average of numbers is : " + average(1, 2, 3));
