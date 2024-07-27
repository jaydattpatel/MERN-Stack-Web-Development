import mongoose from "mongoose";

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
  console.log("\nLog Errors: ", err);

  // check if error is custom application error then send to client
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).send(err.message);
  }

  if (err instanceof ApplicationError) {
    return res.status(err.code).send(err.message);
  }

  res.status(500).send("Somthing went wrong, please try after some time...!");
};
