/*
author : Jaydatt Patel

$.get(URL,(data,status)=>{}) : requests data from the server with an HTTP GET request.

$.post(URL,data,(data,status)=>{}) : requests data from the server using an HTTP POST request.
*/

$.get(`https://dummyjson.com/users/1`, (data, status)=>{
    if(data){
        console.log(data); 
    }
    console.log(status);

});

let info = null;
$.post(`https://dummyjson.com/users/2`,info, (data, status)=>{
    if(data){
        console.log(data); 
    }
    console.log(status);

});