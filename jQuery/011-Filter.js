/*
author : Jaydatt Patel

jObj.first() : select first element
jObj.last() : select last element
jObj.eq(index) : returns an element with a specific index number(0 to max).
jObj.filter('selector') : return all elements with specific selector.
jObj.not('selector') : returns all elements that do not match the selector.

*/


console.log("$('h5').first().html() : ", $('h5').first().html());
console.log("$('h5').last().html() : ", $('h5').last().html());
console.log("$('h5').eq(3).html() : ", $('h5').eq(3).html());
console.log("$('h5').filter('.intro'): ", $('h5').filter('.intro'));
console.log("$('h5').not('.intro'): ", $('h5').not('.intro'));

