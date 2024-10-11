/*
author : Jaydatt Patel

jObj.siblings() : to select all previous and next siblings
jObj.next() : to select single direct next sibling
jObj.nextAll() : to select next all siblings
jObj.nextUntil('select') : to select next all untill selector
jObj.prev() : to select single direct previous sibling
jObj.prevAll() : to select all previous siblings
jObj.prevUntil('select') : to select all previous untill selector

*/

// all siblings
console.log("$('div').sibling() : ", $("div").siblings());

// next siblings
console.log("$('div').next() : ", $("div").next());
console.log("$('div').nextAll() : ", $("div").nextAll());
console.log("$('div').nextUntil('h5') : ", $("div").nextUntil("h5"));

// previous siblings
console.log("$('div').prev() : ", $("div").prev());
console.log("$('div').prevAll() : ", $("div").prevAll());
console.log("$('div').prevUntil('header') : ", $("div").prevUntil("header"));
