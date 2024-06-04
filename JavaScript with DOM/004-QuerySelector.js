/*
author : Jaydatt Patel 

document.querySelector('tag/.class/#id')  : to select first occure node.
document.querySelectorAll('tag/.class/#id')  : to select all nodes in array

*/

let firstHead = document.querySelector('h1');
console.log('firstHead:\n',firstHead);

// Class selector
console.log(document.querySelector('.second'));

// Id selector
console.log(document.querySelector('#para'));

//nesting select
console.log('h3 All :',document.querySelectorAll('div h3'))

// return null if not found
console.log('abc:\n', document.querySelector('abc'));

