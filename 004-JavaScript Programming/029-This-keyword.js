/**
 * author : Jaydatt Patel
 * This keyword: 
 
The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods apply() and call() can also set the this value for a particular call.

Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods. 
 */
'use strict';
console.log('-------------1-------------');
console.log(this);

function checkThis() {
  console.log(this);
}
checkThis();

console.log('-------------2-------------');
const checkArrow = () => {
  console.log(this);
};

checkArrow();

console.log('-------------3-------------');
const user1 = {
  userName: 'John',
  userAge: 12,

  work: function () {
    console.log(this);
  }
};
console.log('user1.work() :');
user1.work();

const user2 = {
  userName: 'Harry',
};

user2.work = user1.work;

console.log('user2 : ', user2);
console.log('user2.work() :');
user2.work();


//constructor functions for the built-in objects, I can also define custom constructor functions. (looks like class) 
function Icecream(product) {
  this.flavor = product;
  this.melt = function() {
      console.log(`The ${this.flavor} icecream has melted`);
  }
}
let kiwi_Icecream = new Icecream("kiwi");
let apple_Icecream = new Icecream("apple");
kiwi_Icecream.melt(); 
apple_Icecream.melt(); 