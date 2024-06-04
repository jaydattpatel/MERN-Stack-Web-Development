/*
author : Jaydatt Patel

Promises : The Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.

constructor : 
            new Promise( (resolveFun, rejectFun) =>{});

A Promise is in one of these states:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

The .then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining;

Handling a rejected promise in each .then() has consequences further down the promise chain. Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw an error of some type to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final .catch() statement. A .catch() is really just a .then() without a slot for a callback function for the case when the promise is fulfilled.

- Promise.all() : Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

- Promise.allSettled() : Fulfills when all promises settle.

- Promise.any() : Fulfills when any of the promises fulfills; rejects when all of the promises reject.

- Promise.race() : Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

*/

//--------------------Sample-1--------------------
let request = new Promise( (resolve, reject) =>{

    setTimeout(()=>{
        console.log(`----------Sample-1-----------`);
        console.log(`Promise initiated`);
        let x = 0;
        if(x === 0){
            resolve('Request resolved...');
        }else{
            reject('Request rejected...');
        }
    },100);

} );

request.then((val)=>{
    console.log(val);
}).catch((errVal)=>{
    console.log(errVal);
})


//--------------------Sample-2--------------------
function getUserData (userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`----------Sample-2-----------`);
            if (userId === 123) {
                resolve({ id: 123, name: 'John Doe', age: 30 });
            } else {
                reject('User not found');
            }
        }, 150);
    });
}

function displayUserData (userId) {
    getUserData (userId)
        .then((userData) => {
            console.log('User data:', userData.name);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
}

displayUserData(123);

//--------------------Sample-3--------------------
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 250, 'one');
  });
  
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'two');
  });
  
  Promise.race([promise3, promise4]).then((value) => {
    console.log(`----------Sample-3-----------`);
    console.log(value);
    // Both resolve, but promise2 is faster
  });


//--------------------Sample-4--------------------
const promise1 = new Promise((resolve) => setTimeout(() => resolve (1), 3000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));

Promise.all([promise1, promise2]) 
    .then((results) => {
        console.log(`----------Sample-4-----------`);
        console.log(results);
    });

