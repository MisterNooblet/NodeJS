import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import morgan from "morgan";
import connectDB from "./config/mongoDB.js";

import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config({ path: './config/config.env' })

const app = express();
app.use(express.json())
connectDB()


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my API'
    })
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1))
})