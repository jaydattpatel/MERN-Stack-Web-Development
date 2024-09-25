import { ErrorHandler } from "../utils/errorHandler.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({ success: false, error: err.message });
};

// handling handleUncaughtError  Rejection
export const handleUncaughtError = () => {
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log("shutting down server bcz of uncaughtException");
  });
};
