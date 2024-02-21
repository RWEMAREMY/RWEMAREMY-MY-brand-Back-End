import joi from 'joi';
export const postval=joi.object({
    title: joi.string().min(5).required(),
    content: joi.string().min(5).required(),
})