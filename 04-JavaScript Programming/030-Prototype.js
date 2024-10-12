/*
author : jaydatt Patel
Prototype : Prototypes are the mechanism by which JavaScript objects inherit features from one another.
In JavaScript, a prototype is a reference to another object that is used for property and method inheritance. Each object has a prototype, except for the base object.
In JavaScript, objects derive properties and methods from their prototype, allowing them to inherit behavior. When an object doesn't have a specific property, it searches for it in the prototype chain.
*/

console.log("----------------------");
console.log("Icecream.prototype : ", Icecream.prototype);
console.log("Object.prototype : ", Object.prototype);

console.log("----------------------");
var car = {
  name: "BMW",
};
console.log("car.__proto__ : ", car.__proto__);
console.log("car.__proto__.__proto__ : ", car.__proto__.__proto__);

console.log("----------------------");

function Icecream(product) {
  this.flavor = product;
  this.melt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwi = new Icecream("kiwi");
console.log("kiwi.__proto__ : ", kiwi.__proto__);
console.log("kiwi.__proto__.__proto__ : ", kiwi.__proto__.__proto__);
console.log(
  "kiwi.__proto__.__proto__.__proto__ :",
  kiwi.__proto__.__proto__.__proto__
);

console.log("----------------------");

console.log(
  "(kiwi.__proto__ === Icecream.prototype) : ",
  kiwi.__proto__ === Icecream.prototype
);
console.log(
  "(kiwi.__proto__.__proto__ === Object.prototype : ",
  kiwi.__proto__.__proto__ === Object.prototype
);

console.log("----------------------");

function greet(msg) {
  this.message = msg;
}
// add inhetited prototype to geet.
greet.prototype.getDetails = function (to) {
  console.log(this.message, "to", to);
};

var gt = new greet("Welcome");
gt.getDetails("JavaScript");

console.log("---------------------------");

// now add properties in protoype chain of Object.
const my = {};
Object.prototype.val = 10;
console.log("my.val : ", my.val);

console.log("---------------------------");
function Person(name) {
  this.name = name;
}
Person.prototype.age = 30; //make default value of prototype

console.log("Person.prototype.age : ", Person.prototype.age);

const herry = new Person("herry");
herry.age = 22;

console.log("herry.age : ", herry.age);
console.log("Person.prototype.age : ", Person.prototype.age);

const john = new Person("John");
// now modify default value of prototype of function class object using __proto__ of local object.
john.__proto__.age = 40;

console.log("john.age : ", john.age);
console.log("Person.prototype.age : ", Person.prototype.age);

//create new object from old object using prototype inheritance
console.log("---------------------------");
var o1 = {};
o1.obj1 = "Object-1";
console.log("o1.obj1 : ", o1.obj1);
console.log("Object.getPrototypeOf(o1) :", Object.getPrototypeOf(o1));

var o2 = Object.create(o1); //create new obj with prototypes of old objects
o2.obj2 = "Object-2";
console.log("o2.obj1 : ", o2.obj1);
console.log("o2.obj2 : ", o2.obj2);
console.log("Object.getPrototypeOf(o2) :", Object.getPrototypeOf(o2));

var o3 = Object.create(o2);
o3.obj3 = "Object-3";
console.log("o3.obj1 : ", o3.obj1);
console.log("o3.obj2 : ", o3.obj2);
console.log("o3.obj3 : ", o3.obj3);
console.log("Object.getPrototypeOf(o3) :", Object.getPrototypeOf(o3));

console.log("---------------------------");

const showProto = {
  show() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: showProto },
  { value: 2, __proto__: showProto },
  { value: 3, __proto__: showProto },
];

console.log("boxes : ", boxes);
for (let box of boxes) console.log(box.show());
