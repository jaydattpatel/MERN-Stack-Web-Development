
import { body, validationResult } from "express-validator";
import ProductModel from "../models/product.model.js";

// create middleware function for validate form 
export const validateForm = async (req,res,next) => {

    // making rules of array for form
    const rules = [
      //making rule name is empty or not
      body('name').notEmpty().isLength({min:5}).withMessage('Name is required at least 5 characters.'),

      // making rule price is float and greater then 0 or not
      body('price').isFloat({gt:0}).withMessage('Price must be a positive value'),
      // making rule valid URL
      body('imageUrl').isURL().withMessage('URL is invalid')
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
      if(req.url == '/add-product'){
        return res.render('add-product', {errorMessage: errors});
      }
      if(req.url == '/update-product'){
        const prod = ProductModel.getById(req.body.id);
        return res.render('update-product',{errorMessage: errors, product: prod})
      }
    }else{
        next();
    }
}