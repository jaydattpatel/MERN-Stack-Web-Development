/*
 * Author : Jaydatt Patel
 */
//add function
console.log("------------1-------------");
function add(a, b) {
  return a + b;
}
console.log(add(5, 2));

console.log("------------2-------------");
//factorial function
function fact(a) {
  return a === 0 ? 1 : a * fact(a - 1);
}
console.log("fact(10) : ", fact(10));
// sum funtion
function sum(a) {
  return a === 0 ? 0 : a + sum(a - 1);
}
console.log("sum(10) : ", sum(10));

console.log("------------3-------------");
//function polymorphism
const bicycle = {
  bell: function () {
    return "Trin, Trin !";
  },
};
const bike = {
  bell: function () {
    return "pip, pip !";
  },
};
function Bell(thing) {
  console.log(thing.bell());
}
Bell(bicycle);
Bell(bike);

console.log("------------4-------------");
//call back function with passing function as formal argument
function sayHello() {
  return "Hello, ";
}
function intro(helloMessage, name) {
  console.log(helloMessage() + name);
}
intro(sayHello, "JavaScript!");

console.log("------------5-------------");
//call back function with passing function as formal argument
function greet(wish) {
  console.log(`${wish()}, Welcome to the JavaScript Course`);
}

function goodMorning() {
  return "Good Morning!";
}

greet(goodMorning);

console.log("------------6-------------");
//call back function with passing function as formal argument with IIFE
function wish(message) {
  return function (wishes) {
    console.log(`${wishes}, ${message}`);
  };
}

wish("Welcome to the session")("Hi"); //execute based on IIFE

console.log("------------6-------------");
//The arrow function implicitly returns if there is a single line of code, but if you enclose the code within curly brackets, it will not return implicitly.
var prod = (n1, n2) => n1 * n2;
var val = prod(5, 2);
console.log(val);

console.log("------------7-------------");
// create variable as function
const display = (str) => {
  console.log(str);
};
display("display function variable");

console.log("------------8-------------");
/* First-class Function : A programming language is said to have First-class functions when functions in that language are treated like any other variable. Means You can assign function to variable, function can be pass as formal argument to other function and also you can return function . For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. */

// passing object and its propery
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return name;
};

console.log(greeting({ name: "Alice" })); //passing object property
console.log(greeting(null));

console.log("------------9-------------");
//returning a function from another function - We can return a function because functions in JavaScript are treated as values.
function sayHi() {
  console.log("Inside sayHi!");
  //below statement return function
  return () => {
    console.log("Inside function of function");
    return "Hi!";
  };
}
const hi = sayHi();
console.log("-----");
console.log("hi() : ", hi());

console.log("------------10-------------");
// access function variable and get data with closure concept.
function generateID(num) {
  let id = num;
  // return function
  return function createID() {
    return `A_2023_${id++}`;
  };
}

const getID = generateID(99); // get function
console.log(getID());
console.log(getID());
