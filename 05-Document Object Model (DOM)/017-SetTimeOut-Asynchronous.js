/*
author : Jaydatt Patel 

setTimeout: The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. Also it will start to execute in next line even timeout function not executed.

syntax: 
    setTimeout(functionRef, delay, param1, param2,....., paramN);

param1, …, paramN : Optional Additional arguments which are passed through to the function specified by functionRef.

DOM API is synchronous in nature.

SetTimeout, FileReader and Geolocation are asynchronous in nature and can be used to delay the function, read file and get the location respectively.

Note : It is used with let and var variable with different way.

*/


let btn = document.querySelector('button');

let script = document.body.querySelector('script');
function addText(str){
    script.insertAdjacentHTML('beforebegin',`<p>${str}<p>`);
}

btn.addEventListener('click',(event)=>{
    addText('Event Initiated');
    setTimeout(removeh3,2000);
    addText('Event finish');
});


function removeh3(){
    addText('Callled fun Initiated');
    let h3= document.querySelector('h3');
    h3.remove();
    addText('Called fun completed');
} 
