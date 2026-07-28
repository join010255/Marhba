import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({path : "./.env"})

const authenticate = async(req, res, next) => {
    const header = req.headers.authorization;

    const token = header.split(" ")[1]
    console.log(token)
    try{
       const decode =  await jwt.verify(token, process.env.JWT_SECRET);
       req.user = decode
       next()
    }catch(error){
        
        res.status(500).json({message : "your token is dad"});
    }
}

export default authenticate;