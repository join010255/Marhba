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
            const userData = await User.findOne({
                where : {email : req.body.email}
            });

            if(!userData){
                return res.status(404).json({
                    message : "User Not Fond"
                });
            } 
            console.log(req.body.password, userData.password)
            const checkPassword = await Hash.veryfyPasswordHash(userData.password, req.body.password)
            if(!checkPassword) {
                return res.status(401).json({
                    message : "Invalid Email Or Password"
                });
            } 
            const tokens = await generatAcessAndReafreshToken(userData);
            
            userData.reafreshToken = await hashToken(tokens.reafresh_token);
            console.log(userData)

            await userData.save()

            res.status(201).json({message : tokens})
        }catch(error){
            console.log(error);
            res.status(500).json({message : "server error"});
        }
    };

    getMe = async(req, res) => {
        try{
            const userData = await User.findOne({
                where : {id :  req.user.id},
                attributes : []
            })

            if(!userData){
                res.status(404).json({message : "User Not Fond"})
            }
            res.status(201).json({message : userData})
        }catch(error){
            console.log(error);
        }
    }
}

export default new UserControle();