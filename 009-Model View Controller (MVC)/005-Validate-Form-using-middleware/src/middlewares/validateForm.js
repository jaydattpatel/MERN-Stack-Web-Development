// create middleware function for validate form 
export const validateForm = (req,res,next) => {

    const { name, price, imageUrl } = req.body;
    let errors = [];
    if (!name || name.trim() == '') {
      errors.push('Name is required');
    }
    if (!price || parseFloat(price) < 1) {
      errors.push(
        'Price must be a positive value'
      );
    }
    try {
      const validUrl = new URL(imageUrl);
    } catch (err) {
      errors.push('URL is invalid');
    }

    if (errors.length > 0) {
      return res.render('add-product', {errorMessage: errors,});
    }else{
        next();
    }
}