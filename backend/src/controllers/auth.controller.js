import User from "../models/user.model.js";
import { Op } from "sequelize";
import Hash from "../utils/hashPassword.js";
import GenerateTokenAndValid from "../utils/generateToken.js";

class UserControle{
    register = async(req, res) => {
        try{
            const check = await User.findOne({
                where :{ [Op.or] : [{email :  req.body.email}, {userName : req.body.userName}]}
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
                where : {login : req.body.login}
            });

            if(!checkUserNameOrEmail){
                return res.status(404).json({
                    message : "User Not Fond"
                });
            } 

            const checkPassword = await Hash.veryfyPasswordHash(req.body.password, checkUserNameOrEmail.password)
            if(!checkPassword) {
                return res.status(401).json({
                    message : "Invalid Email Or Password"
                });
            } 
            const tokens = await GenerateTokenAndValid.generatAcessAndReafreshToken();
            
            checkUserNameOrEmail.reafreshToken = tokens.reafresh_token;

            await checkUserNameOrEmail.save()

            res.status(201).json({message : tokens})
        }catch(error){
            console.log(error);
            res.status(500).json({message : "server error"});
        }
    };
}

export default new UserControle();