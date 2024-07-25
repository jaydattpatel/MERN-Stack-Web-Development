import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //read the token
  const token = req.headers["authorization"];

  //if no token return the error
  if (!token) {
    console.log("is there any token ", token);
    return res.status(401).send("Unauthorized");
  }
  // check if token is valid
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userID = payload.userID;
    console.log("payload is:-", payload);
    console.log("UserID is:-", req.userID);
  } catch (err) {
    //return error
    console.log(err);
    return res
      .status(401)
      .send("Unauthorized or something went wrong in token");
  }
  //call next middleware
  next();
};
export default jwtAuth;
