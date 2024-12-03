import winston from "winston";

export const apiLogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "src/logs/apis.log" })],
});

export const errorLogger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "src/logs/errors.log" }),
  ],
});

const logger = async (req, res, next) => {
  if (!req.url.includes("sign")) {
    const logData = `Date: ${new Date().toString()}, URL: ${
      req.url
    }, params: ${JSON.stringify(req.params)}, body: ${JSON.stringify(
      req.body
    )}`;

    apiLogger.info(logData);
  }

  next();
};

export default logger;
