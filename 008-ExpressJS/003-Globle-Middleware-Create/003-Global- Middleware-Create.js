/*

author : Jaydatt Patel

create Middleware : You can execute  multiple middleware get request by passing and execute next function to execute next get handler. Make sure that you do not have to execute response.end() before all middleware. If you do not execute next function and do not execute res.end() then it will not complete response. 

Global middleware can be created using server.use(callback) function which is executed every http request.

note : response.send() function will end you responce so make sure that this function keep in last.

*/

// import express module
const express = require('express');

let count = 1;
let global = 1;

// Create a server.
const server = express();

// passing and execute next function to execute next get handler
function middleware1(req,res,next){
    console.log("Middleware-1 Executed", count);
    next();
};

//creating global middleware which executed for all requests.
function globalMiddleware(req,res,next){
    console.log("Global Middleware Executed every Time", global++);
    next();
}

server.use(globalMiddleware);


// passing and execute next function to execute next get handler
function middleware2(req,res,next){
    console.log("Middleware-2 Executed", count);
    next();
};

server.get("/", [middleware1, middleware2] ,(req,res)=>{
    res.send("Welcome to Express Server");
    count++;
});


// Listen on specified port
server.listen(3100, ()=>{
    console.log('Server is listening on 3100...........');
});
