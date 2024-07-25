// check the cookies key for authentication 
export const auth = (req, res, next)=>{
    // if req have cookies
    if(req.session.userEmail) {
        next();
    } else{
        res.render('OOPs',{err: 'only recruiter is allowed to access this page, login as recruiter to continue',userName:null,userEmail:null});
    }
};