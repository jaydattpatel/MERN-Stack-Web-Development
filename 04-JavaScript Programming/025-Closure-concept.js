/*

Author : Jaydatt Patel 

Closure consept :

In JavaScript, a closure is created when a function accesses variables outside
of its immediate lexical scope.
The closure retains a reference to the environment in which it was created,
allowing the function to access and manipulate variables in that environment,
even after the outer function has returned.
A closure allows variables to be accessed outside of their scope, while a scope chain determines the accessibility of variables within nested scopes. 

*/

console.log("-------------Program-1---------------");
let a = "Global";

function outerPrint() {
  let b = "OuterPrint";

  return function innerPrint() {
    let c = "innerPrint";
    return `${a} -> ${b} -> ${c}`;
  };
}
const inner = outerPrint();
console.log("inner : ", inner);
const value = inner();
console.log("value : ", value);

console.log("-------------Program-2---------------");
function generateID(num) {
  let id = num;
  //return function
  return function createID() {
    return `A_2023_${id++}`;
  };
}

const func = generateID(99);
console.log(func()); //Output : A_2023_99
console.log(func()); // Output: A_2023_100
