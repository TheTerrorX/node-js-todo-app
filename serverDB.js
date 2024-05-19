import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {

        mongoose.set('strictQuery', false)
        const conn =  mongoose.connect(process.env.URL);
        console.log("database connection established");
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default connectDB;