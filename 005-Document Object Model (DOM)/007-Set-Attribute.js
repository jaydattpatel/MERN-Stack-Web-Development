/*
author : Jaydatt Patel 
 set or modify attributes using DOM

 DOMNode.attribute = value
    or
 DOMNode.attribute.subAttribute..... = value
    or 
 DOMNode.setAttribute('attribute','value')
  

*/

// select only one node which is fist occurred  as per class selector
let head = document.querySelector('.second');

// DOMNode.attribute = value
head.style = 'color:red';

// DOMNode.attribute.subAttribute..... = value
head.style.background = 'cyan';


// select all nodes in array as selected class
let inn = document.querySelectorAll('.inner');
for(let h of inn){
    h.setAttribute('style','color:blue')
}


let img1 = document.querySelector('#img1');
img1.setAttribute('src','Images/food.jpg','width','100px')
img1.setAttribute('width','200px')
img1.setAttribute('data-info','Food Image')


// to remove attributes properties
img1.setAttribute('alt',null)