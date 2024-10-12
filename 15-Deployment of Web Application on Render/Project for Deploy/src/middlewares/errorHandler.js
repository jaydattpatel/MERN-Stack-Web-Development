// create customize error handler for application
export class ApplicationError extends Error {
  constructor(code, message) {
    //passing to Error constructor using super
    super(message);
    this.code = code;
  }
}

// adding express middleware to handle errors.
export const errorHandler = (err, req, res, next) => {
  // we can create logs file of errors for developers.
  console.log("\nLog Errors: ", err);
  // check if error is custom application error then send to client
  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  } else {
    res.status(500).send("Somthing went wrong, please try after some time...!");
  }
};
