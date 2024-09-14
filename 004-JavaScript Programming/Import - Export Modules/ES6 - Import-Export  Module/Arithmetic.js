/*
/*
author : Jaydatt Patel

ES6 Module : 

File Name must be with .mjs extension : 
    moduleFile.mjs
    MainFile.mjs
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