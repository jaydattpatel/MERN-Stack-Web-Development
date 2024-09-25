// create token and save into cookie

export const sendToken = async (user, res, statusCode) => {
  const token = user.getJWTToken();
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res
    .status(statusCode)
    .cookie("token", token, cookieOptions)
    .json({ success: true, user, token });
};
