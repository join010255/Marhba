import * as z from "zod";



const loginSchema = z.object({
    email: z
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
});

const registerSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "First name must contain at least 2 characters"),

    lastName: z
        .string()
        .trim()
        .min(2, "Last name must contain at least 2 characters"),

    email: z
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
});



const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: result.error.flatten().fieldErrors
            });
        }

       
        //req.body = result.data;

        next();
    };
};



export const loginValidation = validate(loginSchema);

export const registerValidation = validate(registerSchema);