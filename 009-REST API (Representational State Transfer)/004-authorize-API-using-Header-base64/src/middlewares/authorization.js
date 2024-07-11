import UserModel from "../features/user/user.model.js";

const authorization = (req,res,next) =>{
    
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).send("No authorization details found...!");
    }

    // get basic header like "Basic qwertyusdfghj345678cvdfgh"
    console.log("Header : ", authHeader);

    // now remove 'Basic ' in base64 credential
    const base64Credentials = authHeader.replace('Basic ', "");

    // now decode data into string
    const decodedCredential = Buffer.from(base64Credentials,'base64').toString('utf8');
    console.log("decodedCredential : ", decodedCredential); // [username:password]

    // now split string to array
    const credential = decodedCredential.split(':');

    const user = UserModel.getAll().find(u=>(u.email==credential[0]&&u.password==credential[1]));

    if(user){
        next();
    }else{
        return res.status(401).send("Incoreect Credentials...!");
    }
}

export default authorization;