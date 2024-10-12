/*
author : Jaydatt Patel

readline module : to take input from user

*/

// 1. Import readline
const readline = require('readline')

// 2. Configure interface to connect with terminal/command line.
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


function sum(num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}

// 3. Reading values.
interface.question("Enter first number : ", (in1)=>{
    interface.question("Enter second number : ", (in2)=>{
        sum(Number(in1),Number(in2));
        interface.close();
    })
});

