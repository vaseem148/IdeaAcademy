import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        console.log("Connecting to MongoDB Atlas... 🔌");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully! 🔥");
    } catch (err) {
        console.error("❌ MongoDB-Connection Error:", err);
    }
}

export default connectMongoDB;