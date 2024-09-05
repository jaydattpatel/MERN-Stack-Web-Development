/*
author : Jaydatt Patel

jQuery Basic syntax is: $(selector).action()

$('selector') returns jQuery Object including all selected element.

$(DOM_Obj) : to convert dom object to jQuery object

jObj.html() : to get innerHTML
jObj.html('HTMLText') : to set innerHTML
jObj.text() : to get inner text
jObj.text('text') : to set inner text
jObj.val() : to get input element value
jObj.val('value') : to set value for input element

------------------------------------------
$("*") : Selects all elements	
$(this) : Selects the current HTML element	
$("p.intro") : Selects all <p> elements with class="intro"	
$("p:first") : Selects the first <p> element	
$("ul li:first") : Selects the first <li> element of the first <ul>	
$("ul li:first-child") : Selects the first <li> element of every <ul>	
$("[href]") : 	Selects all elements with an href attribute	
$("a[target='_blank']") : Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']") : Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button") : Selects all <button> elements and <input> elements of type="button"	
$("tr:even") : Selects all even <tr> elements	
$("tr:odd") : Selects all odd <tr> elements

*/

// select tag and modify inner html or text
$("header").html("<h2>jQuery</h2>");

// select tag and modify inner html or text
let div = $("div");
console.log(div.html()); // to get inner html code
div.html("Div Text");

//modify all selected element
console.log("Select all $('h5'): ", $("h5"));
console.log("length: ", $("h5").length);

for (let i = 0; i < $("h5").length; i++) {
  console.log($("h5")[i]);

  // convert dom obj to jquery obj and set inner html
  $($("h5")[i]).html(i + " - h5");
}

// select class tag and modify inner html or text
let txClass = $(".txClass");
console.log(txClass.text());
txClass.text("Class Text");

// select id tag and modify inner html or text
$("#txID").text("ID Text");

// set value of input
$("input").val("Default Input value");

//het value of element
console.log($("input").val());
