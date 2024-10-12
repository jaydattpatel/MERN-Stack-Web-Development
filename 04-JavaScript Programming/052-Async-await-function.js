/*
Author : Jaydatt Patel

Async function, await: 
The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

When you declare a function with the async keyword, it becomes an asynchronous function, and it automatically returns a Promise implicitly, regardless of whether you explicitly use the return keyword or not.

The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

Note: We can use await with function only in async function. 

method: 

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

*/

function hold() {
  return new Promise((resolve) => {
    console.log("On Hold");
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await hold();
  console.log(result);
}

asyncCall();
