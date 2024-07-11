import UserModel from '../models/user.model.js';
import ProductModel from '../models/product.model.js';

export default class UserController {
  getRegister(req, res) {
    res.render('register',{ errorMessage: null, userEmail:null });
  }

  postRegister(req, res) {
    const { name, email, password } = req.body;
    UserModel.add(name, email, password);
    res.render('login', { errorMessage: null, userEmail:null });
  }

  getLogin(req, res) {
    res.render('login', { errorMessage: null, userEmail:null });
  }

  postLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(email,password);
    if (!user) {
      return res.render('login', {errorMessage: 'Invalid Credentials', userEmail:null});
    }
    
    // add email to session for authentication
    req.session.userEmail = email;

    var products = ProductModel.getAll();
    res.render('index', { products: products, userEmail: req.session.userEmail });
  }

  logout(req, res){
    // on logout, destroy the session
    req.session.destroy((err)=>{
      if(err){
        console.log(err);
      }
      else{
        // clear cookies variables when logout
        res.clearCookie('lastVisit');
        res.redirect('/login');
      }
      
    });
  }
}
