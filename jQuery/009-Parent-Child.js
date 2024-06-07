/*
author : Jaydatt Patel

jObj.parent() : to select only single direct parent  
jObj.parents() : to select all outer nested parents 
jObj.parentsUntil('select') : to select all nested parents until specific element
jObj.children() : To select all direct children
jObj.find() : to select specific element or all

*/

console.log("$('span').parent() : ", $('span').parent());
console.log("$('span').parents() : ", $('span').parents());
console.log("$('span').parentsUntil('div') : ", $('span').parentsUntil('div'));


// select only direct childern
console.log("$('div').children() : ", $('div').children());

// select specific children
console.log("$('div').find('span') : ", $('div').find('span'));
console.log("$('div').find('p') : ", $('div').find('p'));
console.log("$('div').find('*') : ", $('div').find('*'));
