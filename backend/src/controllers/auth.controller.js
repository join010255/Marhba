import User from "../models/user.model.js";

class UserControle{
    register = async(req, res) => {
        try{
            await User.create(req.body);
            res.status
        }
    }
}