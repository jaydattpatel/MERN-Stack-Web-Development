/*
 * Author : Jaydatt Patel
variables using var, let , const------
ES5: var (does not support scope)
ES6: let, const (support scope)
----------------------------------------------
var  : 
    - You can use access this variable before declaration with undefined value.
    - You can declare variable using var and also You can assign values later. 
    - You can redeclare same name variable anywhere by assining new value. If You do not assign value then it will hold previous assigned value.
    - It does not support scope resolution means it can access anywhere. So, declared variable in outside block {} and inside block {} with same name, both variables are same and hold same value and accessible both side. So if You modify or redeclare variable then it will make changes for all.
    - var variable can be access in functions if and only if function must not have redeclaration of same name variable with var, let and const. If You redeclare same variable in function with var,let or const, then it will create seperate local variable with same name only for function with assigned new value or undefined by default.

let : 
    - You can not access this variable before declaration otherwise you will get error.
    - You can declare variable using let and also You can assign values later. 
    - You can not redeclare same name variable within block{} but You can redeclare same name variable in other {} block.
    - It supports scope resolution means variable can be access only within scope block{} and inner all {} and functions. It can not be accessed out of the scope means inner block{} variables can not be access in outside block.
    - let variable can be access in functions if and only if function must not have redeclaration of same name variable with var, let and const. If You redeclare same variable in function with var,let or const, then it will create seperate local variable with same name only for function with assigned new value or undefined by default. 

const : 
    - You can not access this variable before declaration otherwise you will get error.
    - You can declare variable using const and you must by assigning values otherwise it will create error. 
    - Const variable must be initialized when it was declared. You can not initialize later. 
    - Only Primitive data type can be constant so other can modify even if You assign constant. 
    - After assiging value, You can not modify value. 
    - You can not redeclare same name variable within block{} but You can redeclare same name variable in other {} with assign value.
    - It supports scope resolution means variable can be access only within scope block{} and inner all {} and functions. It can not be accessed out of the scope means inner block{} variables can not be access in outside block.
    - const variable can be access in functions if and only if function must not have redeclaration of same name variable with var, let and const. If You redeclare same variable in function with var,let or const, then it will create seperate local variable with same name only for function with assigned new value.
------------------------------------------------------------------
* Variable names follow these rules:

- Variable names are case-sensitive. This means that the message and Message are different variables.
- Variable names can only contain letters, numbers, underscores, or dollar signs.
- Variable names cannot contain spaces.
- variable names can not begin number.
- Variable names can not use the reserved words.

*/

//var variables
console.log("----------var variables---------");

var vx = 10;
var vy = 20;
{
  console.log("Inner-1 {} :", vx, vy);
}

{
  var vx = 11; //this variable is same in outer and inner
  var vz = 30;
  console.log("Inner-2 {} :", vx, vy);
}

console.log("Globle-after-{} :", vx, vy, vz);

function Vfoo1() {
  console.log("Vfoo1:", vx, vy, vz);
}
Vfoo1();

function Vfoo2() {
  //here function have same variables so it will assign as local variable.
  var vx = 1; //create local variable
  let vy = 2; //create local variable
  const vz = 3; //create local variable
  console.log("Vfoo2:", vx, vy, vz);
}
Vfoo2();

console.log("Globle-after-fun :", vx, vy, vz);

//let letiables
console.log("----------let variables---------");

let lx = 10;
let ly = 20;
{
  let lx = 11; // local variable with block.
  let lz = 30; // local variable with block.
  console.log("Inner {} :", lx, ly, lz);
}

console.log(
  "\nconsole.log('Globle-after-{} :',lx,ly,lz); //Error: lz is not defined means lz can not be access outside the block.\n"
);
// console.log('Globle-after-{} :',lx,ly,lz); //Error: lz is not defined means lz can not be access outside the block.

console.log("Globle-after-{} :", lx, ly);

function Lfoo1() {
  console.log("Lfoo1:", lx, ly);
}
Lfoo1();

function Lfoo2() {
  //here function have same variables so it will assign as local variable.
  var lx = 1; //Local variable
  let ly = 2; //Local variable
  const lz = 3; //Local variable
  console.log("Lfoo2:", lx, ly, lz);
}
Lfoo2();

console.log(
  "\nconsole.log('Globle-after-fun :',lx,ly,lz); //Error: lz is not defined means lz can not be access outside the function.\n"
);
// console.log('Globle-after-fun :',lx,ly,lz); //Error: lz is not defined means lz can not be access outside the function.
console.log("Globle-after-fun :", lx, ly);

//const constiables
console.log("----------const variables---------");

let cx = 10;
let cy = 20;
{
  let cx = 11; // local variable with block.
  let cz = 30; // local variable with block.
  console.log("Inner {} :", cx, cy, cz);
}

console.log(
  "\nconsole.log('Globle-after-{} :',cx,cy,cz); //Error: cz is not defined means cz can not be access outside the block.\n"
);
// console.log('Globle-after-{} :',cx,cy,cz); //Error: cz is not defined means cz can not be access outside the block.

console.log("Globle-after-{} :", cx, cy);

function Cfoo1() {
  console.log("Cfoo1:", cx, cy);
}
Cfoo1();

function Cfoo2() {
  //here function have same variables so it will assign as local variable.
  var cx = 1; //Local variable
  let cy = 2; //Local variable
  const cz = 3; //Local variable
  console.log("Cfoo2:", cx, cy, cz);
}
Cfoo2();

console.log(
  "\nconsole.log('Globle-after-fun :',cx,cy,cz); //Error: cz is not defined means cz can not be access outside the function.\n"
);
// console.log('Globle-after-fun :',cx,cy,cz); //Error: cz is not defined means cz can not be access outside the function.
console.log("Globle-after-fun :", cx, cy);
