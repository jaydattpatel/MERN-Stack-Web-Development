/*
author : Jaydatt Patel
 
Event Propogation: 
Event Propogation from Child Element to Parent Element is called Event Bubbling.
Event Propogation from Parent Element to Child Element is called Event Capturing.
During Event propogation, Capture phase occure first.

DOMNode.addEventListener('eventType', (event)=>{} , capture)
capture : used to control order of bubbling event. It is false by default.
event.stopPropogation(): To Stop bubbling event execution

*/

window
.addEventListener('click',
                  ()=>{console.log('win Clicked');},
                  true);
document.body
  .addEventListener('click',
                    ()=>{console.log('Body Clicked');},
                    true);

document.querySelector('#div1')
  .addEventListener('click', 
                    () =>{console.log('Div-1 Clicked');},
                    true);

document.querySelector('#div2')
  .addEventListener('click', 
                    ()=>{console.log('Div-2 Clicked');},
                    true);

document.querySelector('#div3')
  .addEventListener('click', 
                    () =>{console.log('Div-3 Clicked');},
                    true);

document.querySelector('#div4')
  .addEventListener('click', 
                    () =>{console.log('Div-4 Clicked');},
                    true);

