import express from 'express';
const router = express.Router();
import { getUsers, createUser } from '../controllers/userController.js'

router.get('/', getUsers);
router.post('/', createUser);

export default router;