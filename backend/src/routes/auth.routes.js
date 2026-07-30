import { Router } from "express";
import UserControle from "../controllers/auth.controller.js";
import {loginValidation, registerValidation} from "../middlewares/validation.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";

import { authenticateReafreshToken } from "../middlewares/authenticate.refresh.js";


const userRouters = Router();

userRouters.post("/login", loginValidation, authenticate, UserControle.login)
userRouters.post("/register", registerValidation, UserControle.register)
userRouters.get("/refresh", authenticateReafreshToken)


export default userRouters;