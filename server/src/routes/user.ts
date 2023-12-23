import { Router, Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
//Import the different kinds of errors
import { UserErrors } from "../errors";

//Importing model
import { User, UserModel } from "../models/user";

//Importing bcrypt for password hashing 
import bcrypt from "bcrypt";
import { TokenClass } from "typescript";


const router = Router();


//Making an endpoint that would allow user to register or sign up

router.post("/register", async (req: Request, res: Response) => {
    const { username, password, userDetails } = req.body;

    try{
    const user = await UserModel.findOne({ username })

    //Username authenticator 
    if(user){
        return res.status(400).json({ type:UserErrors.USERNAME_ALREADY_EXISTS })
    }

    
    //Insert Password Authenticator here

    //Hashing of Passwords 
    const HashingPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: HashingPassword, userDetails});
    await newUser.save();

    res.send("account made");

    }catch(err){
        res.status(500).json({ type: err }); 
    }      

});

export const tokenVerification = (req: Request, res: Response, next: NextFunction) => {
    const tokenAuthenticate = req.headers.authorization;

    if(tokenAuthenticate){
        jwt.verify(tokenAuthenticate, "jwtSecret", (err) => {
            if(err){
                res.json({auth: false, message: "Authentication Process Failed!"});
            }
            next();
        })
    }
}

router.post("/login", tokenVerification, async (req: Request, res: Response) => {
    const { username, password } = req.body; 
    
    try{
        const user: User = await UserModel.findOne({ username });

        if(!user){
            return res.status(400).json({ type: UserErrors.NO_USER_FOUND });
        }

        const passwordAuthenticate = bcrypt.compare(password, user.password);

        if(!passwordAuthenticate){
            return res.status(400).json({ type: UserErrors.WRONG_CREDENTIALS });
        }

        const tokenCreated = createToken(user._id, "jwtSecret");

        res.send(tokenCreated);


    }catch(err){
        res.status(500).json({ type: err });
    }

}); 


function createToken(userIDAuth: String, scrt: String) {

    const token = jwt.sign({id: userIDAuth}, scrt);

    return token;

}






export { router as UserRouter};