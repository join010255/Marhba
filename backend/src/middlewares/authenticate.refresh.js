import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import crypto from "crypto";
import generateToken from "../utils/generateToken.js";

dotenv.config({path : "./.env"})

const hashToken = async(text) => {
    return crypto
    .createHash("sha256")
    .update(text)
    .digest("hex");
}

export const authenticateReafreshToken = async(req, res, next) => {
    try{
        const headerData = req.headers.Authorization;
        
        if(!headerData || !headerData.startsWith("Bearer ")){
            return res.status(401).json({
                message : "Refresh token is required."
            })
        }

        const refreashToken = headerData.split(" ")[1]
        
        const decode = await jwt.verify(refreashToken, "add sectet key")

        const user = await User.findByPk(decode.id);

        if(!user){
            return res.status(404).json({
                message : "User Not Fond"
            })
        }

        if(!user.reafreshToken){
            return next()
        };
        
        const checkRefreshToken = await hashToken(refreashToken);

        if(checkRefreshToken !== user.reafreshToken){
            return res.status(401).json({
                message : "Token is not true"
            });
        }
        
        const ganerateNewTokens = await generateToken()
        res.status(201).json(ganerateNewTokens)
        next()

    }catch(error){
        console.log("error")
    }
}