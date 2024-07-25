import Jobs from "../models/jobs.js";
import Users from "../models/users.js";

export default class UserControl{

    postRegister(req,res){
       const {name,email,password} = req.body;
       Users.add(name,email,password);
       res.render('login',{userName:req.session.userName,userEmail:req.session.userEmail});
    }

    getLogin(req,res){
        res.render('login',{userName:req.session.userName,userEmail:req.session.userEmail});
    }

    postLogin(req,res){

        const {email,password} = req.body;
        const userFound = Users.isValidUser(email,password);
        if(!userFound){
           return res.render('OOPs',{err:'User not found please try again or register',userName:req.session.userName,userEmail:req.session.userEmail});
        }

        // add email to session for authentication
        req.session.userName = (Users.getByEmail(email)).name;
        req.session.userEmail = email;
        const jobs = Jobs.getAll();
        res.render('jobs',{jobs:jobs, userName:req.session.userName,userEmail:req.session.userEmail});
    }

    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.clearCookie('lastVisit');
                res.redirect('/');
            }
        });
    }
}