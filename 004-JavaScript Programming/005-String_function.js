/**
  * Author : Jaydatt Patel
  * String Functions:
  - string.concat(string)
  - str.charAt(number)
  - str.charCodeAt(number)
  - str.indexOf(char)
  - str.lastIndexOf(char)
  - str.toUpperCase()
  - str.toLowerCase()
  - str.match(string)
  - str.startsWith(string)
  - str.endsWith(string)
  - str.padStart(number, char)
  - str.padEnd(number, char)
  - str.substring(start index, stop index)
  - str.slice(start index, stop index)
  - str.replace(string ,string)
  - str.replaceAll(string ,string)
  - str.includes(string)
  - str.repeat(number)
  - str.trim()
  - str.trimStart()
  - str.trimEnd()
  - str.split(String seperator, limit)  
 */

console.log("Hello, World");
console.log("Hello " + "there, " + "World");//Not space add automatically
console.log("Hello","there,","World");//space add automatically


var str = "Hello";
console.log(str,'World');
var year = 2023;

console.log(str,'World',year);

console.log(`${str} World ${year}`);

var price = 10;
var VAT = 0.25;
console.log(`Total: ${(price * (1 + VAT)).toFixed(2)}`);


// string.concat(string).concat(string).concate(string)...............
console.log("concate: ", str.concat('World').concat(year)); //

console.log(("Hello " + "there, " + "World").length);
console.log("str.length : ", str.length);

console.log("str.charAt(1) : ", str.charAt(1));
console.log("str.charCodeAt(1) : ", str.charCodeAt(1));
console.log("str.indexOf('l') : ", str.indexOf('l'));
console.log("str.lastIndexOf('l') : ", str.lastIndexOf('l'));

console.log("str.toUpperCase() : ", str.toUpperCase());
console.log("str.toLowerCase() : ", str.toLowerCase());

//find or match string 
console.log("str.match('ll') : ", str.match('ll'));
console.log("str.match('He') : ", str.startsWith('He'));
console.log("str.match('lo') : ", str.endsWith('lo'));

//string padding
console.log("str.padStart(10,'*') : ", str.padStart(10,'*'));
console.log("str.padStart(10) : ", str.padStart(10));
console.log("str.padEnd(10,'#') : ", str.padEnd(10,'#'));
console.log("str.padEnd(10) : ", str.padEnd(10));

//substring(strart index)  , substring(strart index, end index)
console.log("str.substring(1) : ", str.substring(1));
console.log("str.substring(1,4) : ", str.substring(1,4));


//slice(strart index)  , slice(strart index, end index)
console.log("str.slice(1) : ", str.slice(1));
console.log("str.slice(1,4) : ", str.slice(1,4));
console.log("str.slice(-1) : ", str.slice(-1));
console.log("str.slice(-1,-4) : ", str.slice(-3,-1));


//get new string with replace characters. 
console.log("str.replace('l','L') : ", str.replace('l','L'));
console.log("str.replaceAll('l','L') : ", str.replaceAll('l','L'));

console.log("str.includes('ll') : ", str.includes('ll'));
console.log("str.repeat(2) : ", str.repeat(2));

console.log("'   Hello  '.trim() : ", '   Hello  '.trim());
console.log("'   Hello  '.trimStart() : ", '   Hello  '.trimStart());
console.log("'   Hello  '.trimEnd() : ", '   Hello  '.trimEnd());


//str.split(String seperator, limit)  for string convert into array
var str =  "11-12-13-14-15";
console.log("String : ", str);
var values = str.split('-'); // convert string to array 
console.log("str.split('-') :", values);
var values = str.split('-',3); // convert string to array 
console.log("str.split('-',3) :", values);

var spl = 'ho-ho-ho'.split('-');
console.log("'ho-ho-ho'.split('-') : ", spl);
