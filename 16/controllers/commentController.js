import Comment from '../models/Comment.js'
import { commentSchema } from '../config/validation.js';

export const createComment = async (req, res) => {
    try {
        const { error } = commentSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const { text, author, post } = req.body;
        const comment = new Comment({ text, author, post });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};