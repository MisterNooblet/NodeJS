import { getMovies, saveMovie, getMovieById, deleteMovieById, updateMovieById } from "../data/dataManager.js"

const listMovies = (req, res) => {
    const allMovies = getMovies()
    res.status(200).json({ response: allMovies })
}

const addMovie = (req, res) => {
    const { title, year, director } = req.body

    if (!title || !year || !director) {
        res.status(400)
        throw new Error('Please provide a title , year and director!')
    } else {
        saveMovie({ title, year, director })
        res.status(201).json({ message: 'Movie added successfuly', title, year, director })
    }
}

const updateMovie = (req, res) => {
    const { title, year, director } = req.body

    if (!title || !year || !director) {
        res.status(400)
        throw new Error('Please provide a title , year and director!')
    } else {
        const id = req.params.id
        const response = updateMovieById(id, { title, year, director })
        if (response === null) {
            res.status(404).json({ response: 'movie not found' })
        } else {
            res.status(201).json({ message: 'Movie updated Successfuly', title, year, director })
        }
    }
}

const deleteMovie = (req, res) => {
    const id = req.params.id
    const response = deleteMovieById(id)
    if (response === null) {
        res.status(404).json({ response: 'movie not found' })
    } else {
        res.status(200).json({ response: response })
    }
}

const getMovie = async (req, res) => {
    const id = req.params.id
    const movie = await getMovieById(id)
    console.log(movie);
    if (movie === null) {
        res.status(404).json({ response: 'movie not found' })
    } else {
        res.status(200).json({ response: movie })
    }

}
export { listMovies, addMovie, updateMovie, deleteMovie, getMovie }