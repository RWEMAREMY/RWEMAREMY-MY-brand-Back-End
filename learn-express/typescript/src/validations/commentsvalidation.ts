import joi from 'joi';
export const commentval=joi.object({
    name:joi.string().min(3).required(),
    email:joi.string().email({ tlds: { allow: false } }).min(6).required(),
    content:joi.string().min(8).required(),
    blog:joi.string().required(),
   
})