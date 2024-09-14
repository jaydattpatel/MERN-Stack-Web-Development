/*
author : Jaydatt Patel

ES6 Module : 
Modules are a fundamental concept in modern JavaScript development, allowing developers to organize code into separate files or modules. Each module encapsulates its variables, functions, and classes, avoiding naming conflicts and polluting the global scope. This modularity promotes code reusability, maintainability, and scalability in large-scale projects.

With '.js' file extension : 
You can use module with '.js' file extension by changing type to "module" in package.json file in working directory. So you do not need to change '.js' extension to '.mjs'.

With '.mjs' file extension : 
You can use module '.js' file by rename to '.mjs' file extension : 
    moduleFile.mjs
    MainFile.mjs

*/

//single import
// import {add} from './Arithmetic.mjs';  

//multiple import
// import {add,sub} from './Arithmetic.mjs'; 

//multiple import with alise name
// import {add as addition, sub as subtraction} from './Arithmetic.mjs'; 

//import default only without {}
// import info from './Arithmetic.mjs';

//import default only with alise name and without {}
// import infomation from './Arithmetic.mjs';

//default and multiple import
// import info, {add,sub} from './Arithmetic.mjs'; 

//default and multiple import with alise name
// import infomation, {add as additon, sub as subtraction} from './Arithmetic.mjs'; 

//all import

// require('path') to import
import * as operation from './Arithmetic.js'; 

operation.add(2,3);
operation.sub(10,7);
operation.mul(4,3);
//  operation.div(20,2); //error: not fun. need to export to use
operation.default();

