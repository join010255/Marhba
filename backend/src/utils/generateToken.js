import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({path : "./.env"})
class GenerateTokenAndValid{
    generatAcessAndReafreshToken = async(userId) => {
        try{
            const acessToken = await jwt.sign(
                {
                    id : userId
                },
                process.env.JWT_SECRET,
                {expiresIn : "1h"}
            );

            const reafreshToken = await jwt.sign(
                {id : userId},
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn : "7d"
                }
            );

            return {
                acess_token : acessToken,
                reafresh_token : reafreshToken
            }
        }catch(error){
            console.log(error);
        }
    };
}

export default new GenerateTokenAndValid();