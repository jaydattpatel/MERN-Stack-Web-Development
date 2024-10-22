//middleware to set res locals flash
const setFlash = (req, res, next) => {
  res.locals.flash = {
    success: req.flash("success"),
    error: req.flash("error"),
  };

  next();
};

export default setFlash;
