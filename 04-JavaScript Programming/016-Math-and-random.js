/*
 * Author : Jaydatt Patel

JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

Number constants:
Here are some of the built-in number constants that exist on the Math object: 
The PI number: Math.PI which is approximately 3.14159
The Euler's constant: Math.E which is approximately 2.718
The natural logarithm of 2: Math.LN2 which is approximately 0.693

Rounding methods ,These include: 
Math.ceil() - rounds up to the closest integer 
Math.floor() - rounds down to the closest integer 
Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
Math.trunc() - trims the decimal, leaving only the integer

Arithmetic and calculus methods:
Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 
Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
Math.sqrt(16) - calculates the square root of 16, the result is 4 
Math.cbrt(8) - finds the cube root of 8, the result is 2 
Math.abs(-10) - returns the absolute value, the result is 10 

Logarithmic methods: 
Math.log(), 
Math.log2(), 
Math.log10() 

Return the minimum and maximum values of all the inputs: 
Math.min(9,8,7) returns 7, 
Math.max(9,8,7) returns 9.

 Trigonometric methods: 
 Math.sin(), 
 Math.cos(), 
 Math.tan(), etc.
*/

/*
random code generate
Math.random() code generate randome values between 0.0 to 0.9999....
*/
console.log("(0.0 to 0.9999) : ", Math.random());

console.log("(0.0 to 10.0) : ", Math.random() * 10);

var v = Math.ceil(Math.random() * 100);
console.log("(0 to 100) : ", v);

console.log("(10**2) : " + 10 ** 2); //get the power of value
console.log("(10**3) : " + 10 ** 3); //get the power of value

//Math.round()
console.log("Math.round(2.60) : ", Math.round(2.6));
console.log("Math.round(2.50) : ", Math.round(2.5));
console.log("Math.round(2.49) : ", Math.round(2.49));
console.log("Math.round(-2.60) : ", Math.round(-2.6));
console.log("Math.round(-2.50) : ", Math.round(-2.5));
console.log("Math.round(-2.49) : ", Math.round(-2.49));
//.toFixed() to get selected decimal point
console.log("(12.5479).toFixed(2) : ", (12.5479).toFixed(2));

//.toPrecision() to set precision
console.log("(30.001658853).toPrecision(2) : ", (30.001658853).toPrecision(2));
console.log("(30.165088053).toPrecision(2) : ", (30.165088053).toPrecision(2));
console.log("(0.001658853).toPrecision(2) : ", (0.001658853).toPrecision(2));
console.log("(0.001658853).toPrecision(3) : ", (0.001658853).toPrecision(3));
console.log("(0.001658853).toPrecision(10) : ", (0.001658853).toPrecision(10));
console.log("(13.3714).toPrecision(2) : ", (13.3714).toPrecision(2));
