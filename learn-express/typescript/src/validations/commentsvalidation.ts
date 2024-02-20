import joi from 'joi';
export const commentval=joi.object({
    author:joi.string().min(3).required(),
    email:joi.string().min(6).required(),
    content:joi.string().min(8).required(),
    blog:joi.string().required(),
    createdAt:joi.number(),
})