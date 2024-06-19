/*
author : Jaydatt Patel 

 DOMNode.addEventListener('EventType', (event)=>{})

 EventType help link: 
 https://developer.mozilla.org/en-US/docs/Web/API/Element#events
 
 https://developer.mozilla.org/en-US/docs/Web/Events

 https://developer.mozilla.org/en-US/docs/Web/API/Event

 EventType : 
 1) Mouse : click, dblclick, mouseup, mousedown, mouseover, mousemove, mouseout.
 2) Keybord : keydown, keypress, keyup

 The keydown and keypress can be used to detect the keyboard shortcuts like 'ctr + S'.
 */

 // mouse events
let tx1 = document.querySelector('#tx1');

function clickFun(event){
    console.log('event :', event);
    tx1.innerText = event.type;
}
tx1.addEventListener('click', clickFun);

function mouseDownFun(event){
    console.log('event :', event);
    tx1.innerText = event.type;
}
tx1.addEventListener('mousedown', mouseDownFun);

function mouseoverFun(event){
    console.log('event :', event);
    tx1.innerText = event.type;
    tx1.style.color = 'red';
}
tx1.addEventListener('mouseover', mouseoverFun);

function mouseoutFun(event){
    console.log('event :', event);
    tx1.innerText = event.type;
    tx1.style.color = 'blue';
}
tx1.addEventListener('mouseout', mouseoutFun);

// keyboard events
let tx2 = document.querySelector('#tx2');
let body  = document.querySelector('body');

function keyFun(event){
    console.log('event :', event);
    tx2.innerText = `Event Type : ${event.type},\n Event key : ${event.key},\n Event keyCode : ${event.keyCode},\n Event code : ${event.code}`;
}

body.addEventListener('keydown', keyFun);
