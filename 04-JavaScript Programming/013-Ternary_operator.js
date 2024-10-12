/*
 * Author : Jaydatt Patel
Ternary operator : (condition) ? True {Statements} : False{Statements} 
*/
var x = 5;
var y = 6;
var z = 1;
var str;

str = x % 2 == 0 ? "Even" : "Odd";
console.log(str);
str = y % 2 == 0 ? "Even" : "Odd";
console.log(str);

str = x > y && x > z ? "X" : y > x && y > z ? "Y" : "Z";
console.log("Max : " + str);
