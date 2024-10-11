import jwt from "jsonwebtoken";

const jwtAuthorization = (req, res, next) => {
  // 1. Read the token. if no token, return the error.
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("No authorization details found...!");
  }
  // 2. check if token is valid.
  try {
    const usedPrivateKey = "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz";
    const payload = jwt.verify(token, usedPrivateKey);
    // console.log("payload: ", payload);
    req.userID = payload.userId;
  } catch (err) {
    // 3. if token is not valid then send error.
    console.log(err);
    return res.status(401).send("Incorrect Credentials...!");
  }

  // 3. call next middleware
  next();
};

export default jwtAuthorization;
