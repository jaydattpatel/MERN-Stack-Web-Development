/*
author : Jaydatt Patel

jQuery: 

jObj.before(...HTML/domObj/jQueryObj) - Inserts single or multiple object before the selected elements

jObj.prepend(...HTML/domObj/jQueryObj) - Inserts single or multiple object at the beginning of the selected elements

jObj.append(...HTML/domObj/jQueryObj) - Inserts single or multiple object at the end of the selected elements

jObj.after(...HTML/domObj/jQueryObj) - Inserts single or multiple object after the selected elements

*/

// append elements with HTML
$("header").append("<h2>jQuery</h2>");

// append element with jQuery object
let jObj = $("<h2></h2>").html("Add Element");
$("header").append(jObj);

$("div").before("<h4>Before</h4>");
$("div").prepend("<h4>Prepend</h4>");
$("div").append("<h4>Append</h4>");
$("div").after("<h4>After</h4>");

// Create with DOM and addend dom object
var txt = document.createElement("p");
txt.innerHTML = "DOM Text";
$("h3").append(txt);
