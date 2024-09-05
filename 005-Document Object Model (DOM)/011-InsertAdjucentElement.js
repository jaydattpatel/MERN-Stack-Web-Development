/*
author : Jaydatt Patel 
- createElement('element'): for create element

The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.

Syntax: 
insertAdjacentElement(position, element)

position: A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:
- 'beforebegin': Before the targetElement itself.
- 'afterbegin': Just inside the targetElement, before its first child.
- 'beforeend': Just inside the targetElement, after its last child.
- 'afterend': After the targetElement itself.


<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->

*/

var sel = document.querySelector('p');


let beforebegin = document.createElement('h4')
beforebegin.textContent = 'Before begin';
sel.insertAdjacentElement('beforebegin',beforebegin);

let afterbegin = document.createElement('h4')
afterbegin.textContent = 'After begin';
sel.insertAdjacentElement('afterbegin',afterbegin);

let beforeend = document.createElement('h4')
beforeend.textContent = 'Before end';
sel.insertAdjacentElement('beforeend',beforeend);

let afterend = document.createElement('h4')
afterend.textContent = 'After end';
sel.insertAdjacentElement('afterend',afterend);