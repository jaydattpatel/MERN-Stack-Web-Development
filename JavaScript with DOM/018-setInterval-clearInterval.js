/*
author : Jaydatt Patel 

The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

setInterval() method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

The setInterval() :

    setInterval(functionRef, delay, param1, param2,....., paramN);

    param1, …, paramN : Optional Additional arguments which are passed through to the function specified by functionRef.


clearInterval():

    clearInterval(intervalID)

*/

let div = document.querySelector('div');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');

let second = 0;

let timer;

startBtn.addEventListener('click', ()=>{
    timer = setInterval(()=>{
        second++;
        div.innerHTML = `<h3>${second}</h3>`;
    },1000)
})


stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
});