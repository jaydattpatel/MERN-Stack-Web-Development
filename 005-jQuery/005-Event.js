/*
author : Jaydatt Patel

jQuery Events: 
     
Mouse : click, dblclick, mouseenter, mouseleave
Keyboard: keypress, keydown, keyup, blur
Form: submit, change, focus, unload
Document/Window: load, resize, scroll

*/

$('.txClass').on('click',()=>{
    alert('clicked');
});

$('body').on('keydown',()=>{
    alert('key pressed');
});