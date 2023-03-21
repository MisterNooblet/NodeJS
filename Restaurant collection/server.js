import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'


import restraunts from './routes/restrauntRoutes.js'

dotenv.config({ path: './config/config.env' })

const app = express();


connectDB();


if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my API'
    })
});

app.use(express.json())
app.use('/api/v1/restraunts', restraunts)
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1))
})