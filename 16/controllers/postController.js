import Post from '../models/Post.js'
import { postSchema } from '../config/validation.js'
import User from '../models/User.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        const author = await User.findById(posts[0].author)
        console.log(posts[0]);
        console.log(posts[0].author);
        res.json({ ...posts[0]._doc, author: author.name });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

export const createPost = async (req, res) => {
    try {
        const { error } = postSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const { title, body, author } = req.body;
        const post = new Post({ title, body, author });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};