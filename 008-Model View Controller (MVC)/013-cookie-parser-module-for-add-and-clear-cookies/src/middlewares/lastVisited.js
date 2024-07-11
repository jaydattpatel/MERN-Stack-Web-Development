
export const setLastVisit = (req,res,next)=>{
    // check cookies from request
    if(req.cookies.lastVisit){
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }

    const cookiesOptions = {
        maxAge : 2*24*60*60*1000,
    }

    // add cookie in response
    res.cookie('lastVisit', new Date().toISOString(), cookiesOptions);

    next();
};
