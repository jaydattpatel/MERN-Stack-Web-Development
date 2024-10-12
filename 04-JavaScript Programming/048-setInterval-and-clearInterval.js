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

let second = 0;

let timer = setInterval(() => {
  second++;
  console.log(second);

  if (second >= 5) {
    clearInterval(timer);
    second = 0;
    console.log("Finished");
  }
}, 1000);
