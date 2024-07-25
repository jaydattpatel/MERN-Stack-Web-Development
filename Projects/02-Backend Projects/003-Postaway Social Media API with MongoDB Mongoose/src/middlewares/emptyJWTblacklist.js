import { jwtBlacklist } from "../features/user/user.repository.js";

function cleanUpBlacklist(req, res, next) {
  const currentTime = Date.now();
  jwtBlacklist.forEach((tokenInfo) => {
    const timeDiffInSec = (Date.now() - parseInt(tokenInfo.signedAt)) / 1000;
    if (timeDiffInSec > 14400) {
      jwtBlacklist.delete(tokenInfo);
    }
  });

  next();
}
export default cleanUpBlacklist;
