/*
author : Jaydatt Patel

jQuery Events: 
     
jObj.hide()
jObj.show()
jObj.hide(speed)
jObj.show(speed)

*/

$('.show').on('click',()=>{
    $('p').show();
    $('h3').show(1000);
});

$('.hide').on('click',()=>{
    $('p').hide();
    $('h3').hide(1000);
});