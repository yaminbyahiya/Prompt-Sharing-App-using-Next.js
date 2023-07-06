import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"prompt_share_app",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection error: ", error);
    }
}