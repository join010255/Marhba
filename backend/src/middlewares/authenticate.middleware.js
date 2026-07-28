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
        res.status(401).json({message : "your token is died"});
    }
}

export default authenticate;