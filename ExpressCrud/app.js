import express from "express";
import errorHandler from "./middleware/errorHandler.js";
import router from "./routes/movieRoutes.js";
const app = express();

const port = 8080;
app.use(express.json());
app.use('/api/movies', router)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
