/*
author : Jaydatt Patel

Async function , await :

The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

When you declare a function with the async keyword, it becomes an asynchronous function, and it automatically returns a Promise implicitly, regardless of whether you explicitly use the return keyword or not.

The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

Note: We can use await with function only in async function. 

syntax:

Method-1: 
    function hold{
        return Promise((resolve,reject)=>{
            setTimeout(()=>{
                ......
                resolve(arg)
            },time)
        });
    }

    async function fun_name(){
        let result = await hold()  //wait to complete function
        console.log(result)
    }


Method-2: 
---------------------------------------------------
    async function fun_name(){
        const response = await fetch(URL, {optional Object})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {})
            .finally(()=>{}) ;
    }

*/

// ------------------Method-1-----------------
function hold() {
    return new Promise((resolve) => {
        console.log('On Hold');
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
    });
}
  
async function asyncCall() {
      console.log('calling');
      const result = await hold();
      console.log(result);
}

// ------------------Method-2-----------------

let div = document.querySelector('div');

async function getData(id){

    return fetch(`https://dummyjson.com/users/${id}`)
        .then((responseInfo) => {
            if(responseInfo.ok === true){
                return responseInfo.json();
            }else{
                let errInfo = `Fetching Error from URL, code: ${responseInfo.status}`;
                throw new Error(errInfo);
            }
        }).catch((err) => {
            console.error(err); // console.error for error display
        });
}

async function send(){
    for(let i = 1; i <= 5; i++){
       let data = await getData(i);
       console.log(data);
       div.insertAdjacentHTML('beforeend',`<div>${JSON.stringify(data)}</div><hr>`)
    }
}

send();
