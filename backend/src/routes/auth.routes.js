import { Router } from "express";
import UserControle from "../controllers/auth.controller.js";
import {loginValidation, registerValidation} from "../middlewares/validation.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import { authenticateReafreshToken } from "../middlewares/authenticate.refresh.js";


const userRouters = Router();

userRouters.post("/login", loginValidation, UserControle.login)
userRouters.post("/register", registerValidation, UserControle.register)
userRouters.get("/refresh", authenticateReafreshToken)
userRouters.get("/me", authenticate, UserControle.getMe)


export default userRouters;