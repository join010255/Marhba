import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import User from "../models/user.model.js";

dotenv.config({path : "./.env"})
class GenerateTokenAndValid{
    generatAcessAndReafreshToken = async(userId) => {
        try{
            const userData = await User.findByPk(userId);
            if(!userData){
                throw new Error("User Not Found");
            }
            const payload = {id : userData}

            const [acessToken, reafreshToken] = await Promise.all([
                Promise.resolve(
                    jwt.sign(
                        payload,
                        process.env.JWT_SECRET,
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
            

            re
            if(!){
                const tokenHash = crypto
                .createHash("sha256")
                .update(reafreshToken)
                .digest("hex")
                userData.reafreshToken = tokenHash
                await userData.save()
            };



            return {
                acess_token : acessToken,
                reafresh_token : reafreshToken
            };
        }catch(error){
            console.log(error);
        };
    };
}

export default new GenerateTokenAndValid();