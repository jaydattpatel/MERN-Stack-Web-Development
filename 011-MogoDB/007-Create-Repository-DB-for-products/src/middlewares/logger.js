import winston from "winston";

const winLog = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "request-log" },
  transports: [new winston.transports.File({ filename: "log.txt" })],
});

const logger = async (req, res, next) => {
  //check if url not includes "users" text then log data. because we do not want to log email and password.
  if (!req.url.includes("users")) {
    const logData = `Date: ${new Date().toString()}, URL: ${
      req.url
    }, Data: ${JSON.stringify(req.body)}`;
    // log data in info level
    winLog.info(logData);
  }
  next();
};

export default logger;
