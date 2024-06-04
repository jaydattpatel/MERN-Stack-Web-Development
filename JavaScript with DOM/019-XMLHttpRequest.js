/*
author : Jaydatt Patel

XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

XMLHttpRequest.open() : Initializes a request.

XMLHttpRequest.send() : Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

XMLHttpRequest.responseType : Specifies the type of the response like 'json','text','blob'(binary) ,'document'.

XMLHttpRequest.response : Returns an ArrayBuffer, a Blob, a Document, a JavaScript object, or a string, depending on the value of XMLHttpRequest.responseType, that contains the response entity body.

XMLHttpRequest.responseText : Returns a string that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.

XMLHttpRequest.status : Returns the HTTP response status code of the request.

XMLHttpRequest.timeout : The time in milliseconds a request can take before automatically being terminated.

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

*/

let div = document.querySelector('div');

function getData(id){

    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open('GET',`https://dummyjson.com/users/${id}`);
    request.send();

   let data;

    request.addEventListener('load',()=>{
        data = request.response;
        console.log(data);
        div.insertAdjacentHTML('beforeend',`<div>${JSON.stringify(data)}</div><hr>`)
    })

}

function send(){
    for(let i = 1; i <= 5; i++){
       getData(i);
    }
}

send();