/*
author : Jaydatt Patel
arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.

The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.

Note : can not be use with arrow => function;

*/


console.log('-----------1----------');
function fun1(a, b, c) {
    console.log('arguments.length :', arguments.length);
    console.log(arguments[0]); // first argument
    console.log(arguments[1]); // second argument
    console.log(arguments[2]); // third argument
  };

fun1(1, 'Hello', 3.14);

// Note : can not be use with arrow => function; So it will generate error.
console.log('-----------2----------');
var fun2 = (a,b,c) => {
    console.log('arguments.length :', arguments.length);
    console.log(arguments[0]); // first argument
    console.log(arguments[1]); // second argument
    console.log(arguments[2]); // third argument
};

fun2(1, 'Hello', 3.14);
