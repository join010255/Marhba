import * as z from "zod";


const loginValidationObject = z.object({
    login : z.string().min(1, "Login is required"),
    password : z.string().min(8, "Password is required")
})

export const loginValidation = (req, res, next) => {
    const loginValidationBB = loginValidationObject.safeParse(req.body);

    if(!loginValidationBB) {
        return res.status(400).json({
            message : "Error In Login Requist"
        })
    }
    next()
}