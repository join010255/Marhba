import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const authenticateReafreshToken = async(req, res, next) => {
    try{
        const headerData = headers.authorization
        if(!headerData) return res.status()
        const decode = 
    }
}