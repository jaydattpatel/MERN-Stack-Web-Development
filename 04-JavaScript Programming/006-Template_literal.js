/*
 * Author : Jaydatt Patel
Template Literal :  `...text..${obj}..text..`
Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

 With template literals, an expression can be embedded in a placeholder. A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string 
*/

var greet = "Hello";
var place = "World";
console.log(greet + " " + place + " !");
console.log(`${greet} ${place} !`); //display both variables using template literals

var multi = `Hello
World
${2023}
!`;
console.log(multi);
