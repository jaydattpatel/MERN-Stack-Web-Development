/*
author : Jaydatt Patel 
- createElement('element'): for create element

- insertBefore(newNode, Node_select_position): to insert an element before a specified reference element.

*/

var pos = document.querySelector('p');

let bText = document.createElement('h4')
bText.textContent = 'Text Before Element';
document.body.insertBefore(bText, pos);
