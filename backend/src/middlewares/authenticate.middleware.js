import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config({path : "./.env"})

const authenticate = async(req, res, next) => {
    
    try{
        const userData = await User.findOne({
            where : {email : req.body.email}
        });

        if(!userData.reafreshToken){
            return next();
        }
        const header = req.headers.authorization;
        if(!header || !header.startsWith("Bearer ")){
            return res.status(401).json({
                message :  "Acess token is required."
            })
        }

        const token = header.split(" ")[1]
        
       const decode =  await jwt.verify(token, process.env.JWT_SECRET);
       req.user = decode
       next()
       
    }catch(error){
        console.log(error)
        res.status(401).json({message : "your token is died"});
    }
}

export default authenticate;