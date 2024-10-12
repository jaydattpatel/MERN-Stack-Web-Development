/*

author : Jaydatt Patel 

DOMNode.childNodes : The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.

DOMNode.children : The read-only children property returns a live HTMLCollection which contains all of the child elements of the element upon which it was called. Element.children includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use Node.childNodes.

DOMNode.firstChild : to select elements,text,comments..
DOMNode.firstElementChild : to select only elements
DOMNode.lastChild :  to select elements,text,comments..
DOMNode.lastElementChild :  to select only elements

DOMNode.nextSibling : to select elements,text,comments..
DOMNode.nextElementSibling : to select only elements
DOMNode.previousSibling :  to select elements,text,comments..
DOMNode.previousElementSibling :  to select only elements

*/

let docChild = document.children;
console.log('docChild :', docChild);

let bdChildNodes = document.body.childNodes;
console.log('bdChildNodes :',bdChildNodes);

let bdChildren = document.body.children;
console.log('bdChildren :',bdChildren);

let bdFirstChild = document.body.firstChild;
console.log('bdFirstChild :',bdFirstChild);

let bdFirstElementChild = document.body.firstElementChild;
console.log('bdFirstElementChild :',bdFirstElementChild);

let bdLastChild = document.body.lastChild;
console.log('bdLastChild :',bdLastChild);

let bdLastElementChild = document.body.lastElementChild;
console.log('bdLastElementChild :',bdLastElementChild);

let hdNextSibling = document.head.nextSibling;
console.log('hdNextSibling :',hdNextSibling);

let hdNextElementSibling = document.head.nextElementSibling;
console.log('hdNextElementSibling :',hdNextElementSibling);


let bdPreviousSibling = document.body.previousSibling;
console.log('bdPreviousSibling :',bdPreviousSibling);

let bdPreviousElementSibling = document.body.previousElementSibling;
console.log('bdPreviousElementSibling :',bdPreviousElementSibling);