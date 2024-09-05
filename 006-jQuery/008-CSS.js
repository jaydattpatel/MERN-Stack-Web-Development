/*
author : Jaydatt Patel

The css() method sets or returns one or more style properties for the selected elements.

jObj.css('property') : to get value of property
jObj.css('properties','val') : to set single style
jObj.css({property : val, property : val,... }) : to set multiple style 


*/

// get value of style property
console.log($("h2").css("color"));

// set single property
$("h2").css("color", "blue");

// set multiple properties
$("p").css({ color: "red", border: "1px solid red" });
