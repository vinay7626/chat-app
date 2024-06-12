import mongoose from "mongoose";

const connectMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        // console.log(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to mongodb",error.message)
    }
}

export default connectMongo;