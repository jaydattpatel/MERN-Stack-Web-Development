import { errorLogger } from "./logger.js";

export class ApplicationError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    let obj = {};
    obj[err.code] = err.message;
    res.status(err.code).json(err.message);
    errorLogger.error(JSON.stringify(obj));
  } else {
    errorLogger.error(JSON.stringify(err));
    res.status(500).send("Somthing went wrong, please try after some time...!");
  }
};
