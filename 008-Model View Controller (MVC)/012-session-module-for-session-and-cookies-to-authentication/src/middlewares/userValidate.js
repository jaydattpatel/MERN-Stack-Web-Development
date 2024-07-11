import { body, validationResult } from "express-validator";

export const userValidation = async (req, res, next) => {
    // Write your code here
    const rules = [
        body('name').notEmpty().isLength({min:5, max:20}).withMessage('Name is required minimum 5 to 20 characters.'),
        body('email').isEmail().withMessage("Enter a valid email."),
        body('password').isLength({min:8, max:30}).withMessage("Password is required minimun 8 to 30 characters.")
    ];

    // now run and checking all rules 
    await Promise.all(
      rules.map(rl => rl.run(req))
    );  

    // now taking validation result
    let validationInfo = validationResult(req);
    let errors = validationInfo.errors
    // console.log(errors);

    if (errors.length > 0) {
        return res.render('register',{ errorMessage: errors, userEmail:null });
    }else{
        next();
    }
};