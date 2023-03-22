import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.green.italic.bold);
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
    }
}

export default connectDB