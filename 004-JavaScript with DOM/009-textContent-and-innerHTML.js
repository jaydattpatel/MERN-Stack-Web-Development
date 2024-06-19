/*
author : Jaydatt Patel 

DOMNode.textContent : Used to get or set the text content of an element, excluding any HTML tags or markup. It  Returns a string representing the plain text content without any HTML formatting. It allows manipulation of the text content specifically.

DOMNode.innerHTML: Used to get or set the HTML content within an element. It  Returns a string representing the HTML content, including tags and markup. It Can be used to dynamically update or retrieve the markup and text within an element.

*/

// textContent
var element = document.querySelector("#div1");
console.log('element.textContent :',element.textContent);
element.textContent = "textContnt : <strong>New content</strong>";
console.log('element.textContent :',element.textContent);

// innerHTML
var element = document.querySelector("#div2");
console.log('element.innerHTML :',element.innerHTML);
element.innerHTML = "innerHTML : <strong>New content</strong>";
console.log('element.innerHTML :',element.innerHTML);






