/*
author : Jaydatt Patel

create Middleware : You can execute  multiple middleware get request by passing and execute next function to execute next get handler. Make sure that you do not have to execute response.end() before all middleware. If you do not execute next function and do not execute res.end() then it will not complete response. 

note : response.send() function will end you responce so make sure that this function keep in last.

*/

// import express module
const express = require('express');

// Create a server.
const server = express();

let count = 1;

// passing and execute next function to execute next get handler
server.get("/", (req,res,next)=>{
    console.log("Middleware-1 Executed");
    next();
});

// passing and execute next function to execute next get handler
server.get("/", (req,res,next)=>{
    console.log("Middleware-2 Executed");
    next();
});

server.get("/", (req,res)=>{
    res.send("Welcome to Express Server");
    count++;
});


// Listen on specified port
server.listen(3100, ()=>{
    console.log('Server is listening on 3100...........');
});
