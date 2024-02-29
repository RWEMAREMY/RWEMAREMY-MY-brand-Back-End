import joi from 'joi';
export const Queryval=joi.object({
author:joi.string().min(3).required(),
email:joi.string().email({ tlds: { allow: false } }).min(6).required(),
content:joi.string().min(3).required()
})