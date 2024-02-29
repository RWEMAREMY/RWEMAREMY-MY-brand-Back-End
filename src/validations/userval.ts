import Joi from "joi";

export const expectedNewUser = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/).message("Please provide a strong password")
})

export const expectedLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/).message("Please provide a valid password")
})