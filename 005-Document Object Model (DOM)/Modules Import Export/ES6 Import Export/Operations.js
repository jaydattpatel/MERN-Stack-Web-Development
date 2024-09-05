/*
Modules are a fundamental concept in modern JavaScript development, allowing developers to organize code into separate files or modules. Each module encapsulates its variables, functions, and classes, avoiding naming conflicts and polluting the global scope. This modularity promotes code reusability, maintainability, and scalability in large-scale projects.

*/


// Named inline Export Syntax:
export const add = (a,b) => {
    console.log('Add : ',(a+b));
}
const sub = (a,b) => {
    console.log('Sub : ',(a-b));
}
const mul = (a,b) => {
    console.log('Mul : ',(a*b));
}
const div = (a,b) => {
    console.log('Div : ',(a/b));
}

const info = (str = '')=>{
    console.log('Calculator....!', str);
}

//multiple named export
export {sub,mul};

//default single export
export default info;