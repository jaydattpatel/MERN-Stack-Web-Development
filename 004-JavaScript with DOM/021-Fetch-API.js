/*
author : Jaydatt Patel

For making a request and fetching a resource, use the fetch() method. It is a global method in both Window and Worker contexts. This makes it available in pretty much any context you might want to fetch resources in.

Unlike XMLHttpRequest that is a callback-based API, Fetch is promise-based and provides a better alternative that can be easily used in service workers. Fetch also integrates advanced HTTP concepts such as CORS and other extensions to HTTP.

It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument.

constructor:

    const response = fetch(URL, {optional Object})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {})
        .finally(()=>{}) ;

Parameters:
    URL: The URL to which the request is to be made.
    Optional Parameters object: 
        - Method: Specifies HTTP method for the request. (can be GET, POST, PUT or DELETE)
        - Headers
        - Body: Data to be sent with the request.
        - Mode: Specifies request mode(eg. cors, nocors, same-origin, etc)
        - Credentials: Specifies whether to send user credentials (cookies, authentication headers, etc.) with the request

The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

Data can be fatched in 'json','text','blob'(binary).

*/

let div = document.querySelector('div');

let request = fetch('https://dummyjson.com/users/1');

console.log('request : ', request);

request.then((responseInfo) => {
    if(responseInfo.ok === true){

        console.log('responseInfo.status :',responseInfo.status);

        console.log('responseInfo.ok : ', responseInfo.ok);

        let response = responseInfo.json();
        response.then((data)=>{
                console.log('Data : ', data);
                div.textContent = JSON.stringify(data);
        });
    }else{
        let errInfo = `Fetching Error from URL, code: ${responseInfo.status}`;
        div.textContent = errInfo;
        throw new Error(errInfo);
    }

}).catch((err) => {
    console.error(err); // console.error for error display
}).finally(()=>{
    console.log(`finally executed everytime`);
});


