import express from 'express'
import { addMovie, deleteMovie, getMovie, listMovies, updateMovie } from '../controllers/movieController.js';
const router = express.Router();

router.route("/").get(listMovies).post(addMovie)
router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie)


export default router