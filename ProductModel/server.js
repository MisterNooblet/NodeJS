import express from "express";
import morgan from "morgan";
import colors from "colors"
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import productRouter from './routes/productRoutes.js'
dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT || 8080
const app = express();
connectDB()
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

app.get('/', (req, res) => {
    res.json({
        message: 'welcome to my server'
    })
})
app.use('/products', productRouter)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})