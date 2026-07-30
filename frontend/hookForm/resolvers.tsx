import {z} from "zod";

export const loginSchema = z.object({
    email : z.email("The Email Is Not Valid"),
    password : z.string().min(8, "Your Password Is not valid")
})

export const registerSchema = z.object({
    //
})