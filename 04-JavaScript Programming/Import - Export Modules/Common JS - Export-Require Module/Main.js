/*
author : Jaydatt Patel

Common JS :
require('Filepath') : to get exported object
*/

// require('path') to import
const operation = require('./Arithmetic.js'); 

console.log(operation.PI);
operation.add(2,6);
operation.subtract(10,7);
operation.mul(4,3);
