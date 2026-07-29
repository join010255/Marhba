import { Router } from "express";
import UserControle from "../controllers/auth.controller.js";
import {loginValidation, registerValidation} from "../middlewares/validation.middleware.js";


const userRouters = Router();

userRouters.post("/login", loginValidation, UserControle.login)