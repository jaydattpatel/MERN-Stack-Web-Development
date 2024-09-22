/*
 * Author : Jaydatt Patel
Data types and Typeof function
*/

var obj = typeof "Hello";
console.log('"Hello" :', obj);

var obj = typeof 'Hello"s world';
console.log("'Hello\"s world':", obj);

var obj = typeof `"Hello's world"`;
console.log('`"Hello\'s world"` :', obj);

obj = typeof 10;
console.log("10 :", obj);

obj = typeof 10n;
console.log("10n:", obj);

obj = typeof 3.14;
console.log("3.14 :", obj);

obj = typeof true;
console.log("true :", obj);

obj = typeof (1 <= 2);
console.log("(1<=2) :", obj);

obj = typeof [1, 2, 3];
console.log("[1,2,3] :", obj);

obj = typeof { city: "Ahme" };
console.log("{ city : 'Ahme'} :", obj);

var obj = typeof null;
console.log("NULL:", obj);

var obj = typeof var_undefine;
console.log("var_undefine :", obj);

obj = typeof function sum(a, b) {
  return a + b;
};
console.log("function sum(a,b) {return(a+b)} :", obj);

obj = typeof new Date(); //=== "object";
console.log("(new Date()) :", obj);

obj = typeof /regex/; //=== "object";
console.log("/regex/ :", obj);

// The following are confusing, dangerous, and wasteful. Avoid them.
obj = typeof new Boolean(true); //=== "object";
console.log("(new Boolean(true)) :", obj);
obj = typeof new Number(1); //=== "object";
console.log("(new Number(1)) :", obj);
obj = typeof new String("abc"); //=== "object";
console.log('(new String("abc"):', obj);

// Functions
obj = typeof function () {}; //=== "function";
console.log("function () {} :", obj);
obj = typeof class C {}; //=== "function";
console.log("class C {} :", obj);
obj = typeof Math.sin; //=== "function";
console.log("Math.sin :", obj);
