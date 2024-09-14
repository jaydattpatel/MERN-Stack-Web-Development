/*
 * Author : Jaydatt Patel

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

RegExp :

The RegExp object is used for matching text with a pattern.
Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. 

Literal notation and constructor:
- There are two ways to create a RegExp object: a literal notation and a constructor.
- The literal notation takes a pattern between two slashes '/string/', followed by optional flags, after the second slash.
- The constructor function takes either a string or a RegExp object as its first parameter and a string of optional flags as its second parameter.

RegExp Methods: 
- exec() : This method searches for a pattern match within a string and
returns an array containing the matched result. It also provides
additional information about the match, such as the index and input
string.

- test() : This method checks if a pattern exists within a string and returns a boolean value

- match() or matchAll() : This method searches for a pattern match within a string and returns an array of all matched occurrences.

- replace() or replaceAll() : This method searches for a pattern match within a string and replaces it with a specified replacement value.

- search() :  It searches for a pattern match within a string and returns the index of the first occurrence. If no match is found, it returns -1.

- split() : This method splits a string into an array of substrings based on a specified pattern match.

*/

console.log('-----------1------------');
var regex = /pattern/; // literal notation
var text = "This is a pattern example.";
var isMatch = regex.test(text);
console.log(isMatch); // Output: true

console.log('-----------2------------');
var re = /ab+c/i; // literal notation
console.log(re);

console.log('-----------3------------');
var re1 = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
console.log(re1);

console.log('-----------4------------');
var re2 = new RegExp(/ab+c/, "i"); // constructor with regular expression literal as first argument
console.log(re2);

console.log('-----------5------------');
var regex = /pattern/;
var text = "This is a pattern example.";
var result = regex.exec(text);
console.log(result); // Output: ['pattern',index: 10,input: 'This is a pattern example.',groups: undefined]

console.log('-----------6------------');
var regex = /pattern/g;
var text = "This is a pattern example. Another pattern example.";
var matches = text.match(regex);
console.log(matches); // Output: ["pattern", "pattern"]

console.log('-----------7------------');
var regex = /pattern/;
var text = "This is a pattern example.";
var index = text.search(regex);
console.log(index); // Output: 10

console.log('-----------8------------');
var regex = /pattern/;
var text = "This is a pattern example.";
var modifiedText = text.replace(regex, "new pattern");
console.log(modifiedText); // Output: "This is a new pattern example."

console.log('-----------9------------');
var regex = /[, ]+/;
var text = "Apple, Banana, Orange";
var fruits = text.split(regex);
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

console.log('-----------10------------');
//In the replacement text, the script uses $1 and $2 to indicate the results of the corresponding matching parentheses in the regular expression pattern.
var re3 = /(\w+)\s(\w+)/;
var str = "Maria Cruz";
var newstr = str.replace(re3, "$2, $1");
console.log(newstr);

console.log('-----------11------------');
//The default line ending varies depending on the platform (Unix, Windows, etc.). The line splitting provided in this example works on all platforms.
var text = "Some text\nAnd some more\r\nAnd yet\rThis is the end";
var lines = text.split(/\r\n|\r|\n/);
console.log(lines); // [ 'Some text', 'And some more', 'And yet', 'This is the end' ]

console.log('-----------12------------');
//Using regular expression on multiple lines
var s = "Please yes\nmake my day!";
console.log(s.match(/yes.*day/));// Returns null
console.log(s.match(/yes[^]*day/));/* Returns [
    'yes\nmake my day',
    index: 7,
    input: 'Please yes\nmake my day!',
    groups: undefined
  ]*/
console.log(s.match(/make[^]*day/));/* Returns [
    'make my day',
    index: 11,
    input: 'Please yes\nmake my day!',
    groups: undefined
  ] */