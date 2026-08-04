import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import crypto from "crypto";
// import User from "../models/user.model.js";

dotenv.config({path : "./.env"})

    
const generatAcessAndReafreshToken = async(userId) => {
    try{
        if(!userId){
            throw new Error("User Not Found");
        }
        const payload = {id : userId.id}
        console.log("hello word")
        const [acessToken, reafreshToken] = await Promise.all([
            Promise.resolve(
                jwt.sign(
                    payload,
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn : "1h"
                    }
                )
            ),
            Promise.resolve(
                jwt.sign(
                    payload,
                    process.env.REFRESH_TOKEN_SECRET,
                    {
                        expiresIn : "7d"
                    }
                )
            )
        ])
        // console.log({
        //     acess_token : acessToken,
        //     reafresh_token : reafreshToken
        // })
        return {
            acess_token : acessToken,
            reafresh_token : reafreshToken
        };
    }catch(error){
        console.log(error);
    };
};

export default generatAcessAndReafreshToken;