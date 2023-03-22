import express from 'express';
const router = express.Router();
import { getPosts, createPost } from '../controllers/postController.js'

router.get('/', getPosts);
router.post('/', createPost);

export default router;