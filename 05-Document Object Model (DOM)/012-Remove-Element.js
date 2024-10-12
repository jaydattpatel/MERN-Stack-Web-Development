/*
author : Jaydatt Patel 
 DOMNode.remove() : The remove method is used to delete the element from the DOM.

 DOMNode.removeChild(child) : The removeChild method of the parent element is used to remove the child element. For example, parent.removeChild(child). 

 */

document.querySelector('h1').remove();

let p = document.querySelector('p');
p.remove();

document.querySelector('div').removeChild(document.querySelector('h2'));

let div = document.querySelector('div');
let h3 = document.querySelector('h3');
div.removeChild(h3);