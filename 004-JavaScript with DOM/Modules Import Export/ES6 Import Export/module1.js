/*

Modules are a fundamental concept in modern JavaScript development, allowing developers to organize code into separate files or modules. Each module encapsulates its variables, functions, and classes, avoiding naming conflicts and polluting the global scope. This modularity promotes code reusability, maintainability, and scalability in large-scale projects.

    <script type="module" src="./module1.js"></script>
    <script type="module" src="./module2.js"></script>

*/

//single import
// import {add} from './Operations.mjs';  

//multiple import
// import {add,sub} from './Operations.js'; 

//multiple import with alise name
// import {add as addition, sub as subtraction} from './Operations.js'; 

//import default only without {}
// import info from './Operations.js';

//import default only with alise name and without {}
// import infomation from './Operations.js';

//default and multiple import
// import info, {add,sub} from './Operations.js'; 

//default and multiple import with alise name
// import infomation, {add as additon, sub as subtraction} from './Operations.js'; 

//all import
import * as operation from './Operations.js'; 

console.log('-----file-1----');
operation.add(2,3);
operation.sub(10,7);
operation.mul(4,3);
//  operation.div(20,2); //error: not fun. need to export to use
// operation.info(); //error: not fun. use default to use
operation.default('File-1')