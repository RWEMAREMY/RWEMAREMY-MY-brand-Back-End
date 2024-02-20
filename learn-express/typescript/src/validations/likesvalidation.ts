import joi from 'joi';
export const likeval=joi.object({
name:joi.string().min(3).required(),
content:joi.boolean().required()
})