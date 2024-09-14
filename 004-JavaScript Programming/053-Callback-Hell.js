/*
author : Jaydatt Patel

Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function. If you look at the design of the code, it seems just like a pyramid. Thus the Callback hell is also referred to as the ‘Pyramid of Doom’.

Callback hell structurally is just a nesting of function calls inside a function. But, it becomes difficult to understand and keep track of the nesting once the size of the nesting is increased.
*/

function print(i){
    console.log("This is call number "+i);
}

function fun(callback){

    setTimeout(()=>{
    
        let i = 1 ;
        callback(i); i++ ;
        setTimeout(()=>{
     
      	    callback(i); i++;
      	    setTimeout(()=>{
        
        	    callback(i); i++ ;
        	    setTimeout(()=>{
          
          		    callback(i); i++ ;
          		    setTimeout(()=>{
            
            		    callback(i); i++ ;
            		    // .... and so on
            		    
          		    }, 800)
        	    }, 700)
      	    }, 500)
        }, 300)
    }, 100)
}

fun(print);