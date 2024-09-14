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

console.log('------------var----------------');
for(var i =0; i < 5; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

console.log('------------let----------------');
for(let i =0; i < 5; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}


console.log('----------------------------');

const myArray = ["zero", "one", "two"];


function printArray(arr,time,obj){
    setTimeout(show, time, arr, time, obj); 
};

function show(arr, time, obj){

    if(obj === undefined){
        obj = arr[0];
    }

    console.log(obj);

    if(obj !== arr[arr.length - 1]){
        printArray(arr, time, arr[arr.indexOf(obj)+1]);
    }else{
        console.log('Finished');
    }
};

printArray(myArray,1500);

