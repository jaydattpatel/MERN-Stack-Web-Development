/*
author : Jaydatt Patel 
- createElement('element'): for create element
- DOMNode.append('objEle'): to add multiple element.
- DOMNode.appendChild('objEle'): to add element as child also It return appended element. 

DOMNode.textContent : Used to get or set the text content of an element, excluding any HTML tags or markup. It  Returns a string representing the plain text content without any HTML formatting. It allows manipulation of the text content specifically.

DOMNode.innerHTML: Used to get or set the HTML content within an element. It  Returns a string representing the HTML content, including tags and markup. It Can be used to dynamically update or retrieve the markup and text within an element.

DOMNode.classList : Used to get array of class list to element
DOMNode.classList.add('class1','class2',....) : Used to add multiple class to element.
DOMNode.classList.remove('class1','class2',....) : Used to remove multiple class to element.
DOMNode.classList.replace('oldClass','newClass',) : Used to replace class to element.

*/
let btn1 = document.createElement('button');
btn1.textContent = 'Reset'; // add text in button

let btn2 = document.createElement('button');
btn2.textContent = 'Submit'; // add text in button

let div = document.querySelector('div');
div.append(btn1,btn2); // append to add multiple elements in selected node.


let h3 = document.createElement('h3');
h3.textContent = 'DOM ADDED Text';
h3.style.color = 'blue';
// add class arrtibute and value
// Note : you can not use variable name 'class' because it is keyword of JS so we have to use 'classList'.fun() or 'className'.
h3.classList.add('heading','cls1','cls2','cls3');
h3.classList.remove('cls1');
h3.classList.replace('cls3','cls4');
let p = document.querySelector('p');
p.appendChild(h3);
