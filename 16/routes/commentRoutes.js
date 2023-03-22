import express from 'express';
const router = express.Router();
import { createComment } from '../controllers/commentController.js'

router.post('/', createComment);

export default router;