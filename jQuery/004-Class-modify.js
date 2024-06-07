/*
author : Jaydatt Patel

jQuery: 

jObj.addClass('className') : add single class
jObj.addClass(['class1','class2']) : add multiple class
jObj.removeClass('className') : remove single class
jObj.removeClass(['class1','class2']) : remove multipe class
jObj.hasClass('className') : check class exist or not
jObj.toggleClass('className') : to toggle class

*/


// add single class
$("header").addClass('header');

// add multiple class
$("div").addClass(['class1', 'class2']);

// to check element has class or not
let bool = $("div").hasClass('class1');
console.log(bool);

// remove single class
$("div").removeClass('class2');

//remove multiple class
console.log($("p"));


$("#txID").text("ID Text");


