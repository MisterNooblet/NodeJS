import Joi from "joi";

const postSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    author: Joi.string().required()
});

const commentSchema = Joi.object({
    text: Joi.string().required(),
    author: Joi.string().required(),
    post: Joi.string().required()
});

export { postSchema, commentSchema }