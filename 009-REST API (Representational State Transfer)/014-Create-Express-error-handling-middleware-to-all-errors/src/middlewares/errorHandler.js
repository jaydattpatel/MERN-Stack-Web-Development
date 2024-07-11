
// https://expressjs.com/en/guide/error-handling.html

// If any other error occur and we don't want to expose error to client due to privacy of folder structure or file, we can send dummy message to client by using custom error handler middleware.

//you can directly throw error without try catch block and without passing error in next function. So thrown object error will be passed next middleware in parameters.

//you can also use try catch block and you can pass error object in argument of next function in catch block. If you skip catch block then it also will atomatically pass to next middleware.

//note : When you throw error in function then it will immediately exit that function and it will skeep rest the execution fo rest of statements. 


// create customize error handler for application
export class ApplicationError extends Error{
    constructor(code,message){
        //passing to Error constructor using super
        super(message);
        this.code = code;
    }
}

// adding express middleware to handle errors.
export const errorHandler = (err,req,res,next)=>{
    // we can create logs file of errors for developers.
    console.log("\nLog Errors: ",err);
    // check if error is custom application error then send to client
    if(err instanceof ApplicationError){
        res.status(err.code).send(err.message);
    }else{
        
        res.status(500).send('Somthing went wrong, please try after some time...!');
    }
}