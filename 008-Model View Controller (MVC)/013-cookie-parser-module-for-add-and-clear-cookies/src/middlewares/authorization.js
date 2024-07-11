
// check the cookies key for authentication 
export const auth = (req, res, next)=>{
    // if req have cookies
    if(req.session.userEmail) {
        next();
    } else{
        res.redirect('/login');
    }
};