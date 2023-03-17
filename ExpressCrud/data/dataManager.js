import fs from 'fs'

const getMovies = () => {
    try {
        const data = fs.readFileSync('movies.json').toString()
        const parsedData = JSON.parse(data)
        return parsedData
    } catch (error) {
        return []
    }
}


const saveMovie = (movie) => {
    const allMovies = getMovies()
    allMovies.push({ ...movie, id: allMovies.length + 1 })
    saveMovies(allMovies)
}

const saveMovies = (data) => {
    const moviesJSON = JSON.stringify(data)
    fs.writeFileSync('./movies.json', moviesJSON)
}

const getMovieById = (id) => {
    const allMovies = getMovies()
    if (id > allMovies.length) return null
    return allMovies[id - 1]
}

const updateMovieById = (id, movie) => {
    const allMovies = getMovies()
    if (id > allMovies.length) return null
    const allMoviesNew = allMovies.map(mov => {
        console.log(mov.id, id);
        if (mov.id === Number(id)) {

            return {
                ...movie,
                id: Number(id)
            }
        } else {
            return mov
        }
    })
    saveMovies(allMoviesNew)
    return 'Movie updated!'
}

const deleteMovieById = (id) => {
    const allMovies = getMovies()
    if (id > allMovies.length) return null
    const allMoviesNew = allMovies.filter(movie => id === movie.id)
    console.log(allMoviesNew);
    saveMovies(allMoviesNew)
    return 'Movie removed!'
}

export { getMovies, saveMovie, getMovieById, deleteMovieById, updateMovieById }