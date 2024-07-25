import { jwtBlacklist } from "../features/user/user.repository.js";

// Function to check if a token is in the blacklist
function isTokenBlacklisted(token) {
    // return jwtBlacklist.has(token);
    Array.from(jwtBlacklist).some((tokenInfo) => {
            return tokenInfo.token === token;
          });
  }
//   const tokenExists = Array.from(jwtBlacklist).some((tokenInfo) => {
//     return tokenInfo.token === token;
//   });

const authenticateToken=(req, res, next)=>{
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).send("Unauthorized"); // Unauthorized
    }
  
    // Check if the token is in the blacklist
    if (isTokenBlacklisted(token)) {
      return res.status(401).send("unauthorized! please sign in"); // Forbidden
    }
  
    next();
  }
   
  jwtBlacklist.forEach((tokenInfo) => {
    // const timeDiffInSec=Date.now()-parseInt(tokenInfo.signedAt);
   console.log(tokenInfo);

});

  export default authenticateToken;