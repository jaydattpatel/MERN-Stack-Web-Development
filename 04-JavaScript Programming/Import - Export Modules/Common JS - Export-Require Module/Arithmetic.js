/*
author : Jaydatt Patel

Common JS :
module.exports : to export object.

*/


const PI = 3.14

const add = (a,b) => {
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

//export as function
module.exports  = {PI, add, subtract : sub,mul};
