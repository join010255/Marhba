import User from "../models/user.model.js";
import { Op } from "sequelize";
import Hash from "../utils/hashPassword.js";
import generatAcessAndReafreshToken  from "../utils/generateToken.js";
import { hashToken } from "../middlewares/authenticate.refresh.js";
class UserControle{
    register = async(req, res) => {
        try{
            const check = await User.findOne({
                where : {email :  req.body.email}
            });
            if(check){
                return res.status(400).json({
                    message : "UserName Or Email Is Exisist"
                });
            } 

            const newPasswordHash = await Hash.hashPassword(req.body.password); 
            
            req.body.password = newPasswordHash
            await User.create(req.body);
            res.status(201).json({message : "data is created"});
        }catch(error){
            console.log(error);
            res.status(500).json({message : "Server Error"})
        }
    };

    // login

    login = async(req, res) => {
        try{
            const checkUserNameOrEmail = await User.findOne({
                where : {email : req.body.email}
            });

            if(!checkUserNameOrEmail){
                return res.status(404).json({
                    message : "User Not Fond"
                });
            } 
            console.log(req.body.password, checkUserNameOrEmail.password)
            const checkPassword = await Hash.veryfyPasswordHash(checkUserNameOrEmail.password, req.body.password)
            if(!checkPassword) {
                return res.status(401).json({
                    message : "Invalid Email Or Password"
                });
            } 
            const tokens = await generatAcessAndReafreshToken(checkUserNameOrEmail);
            
            checkUserNameOrEmail.reafreshToken = await hashToken(tokens.reafresh_token);
            console.log(checkUserNameOrEmail)

            await checkUserNameOrEmail.save()

            res.status(201).json({message : tokens})
        }catch(error){
            console.log(error);
            res.status(500).json({message : "server error"});
        }
    };
}

export default new UserControle();