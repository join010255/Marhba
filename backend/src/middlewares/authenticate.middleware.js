import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({path : "./.env"})

const authenticate = async(req, res, next) => {
    
    try{
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
        res.status(401).json({message : "your token is died"});
    }
}

export default authenticate;