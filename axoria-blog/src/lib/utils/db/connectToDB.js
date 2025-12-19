import mongoose from "mongoose";

export async function connectToDB(){
    if(mongoose.connection.readyState){
        console.log("Using existing connection:", mongoose.connection.name)
        return
    }
    try{
        const uri = process.env.MONGODB_URI;

        await mongoose.connect(uri);
        console.log("Connected to dabase:", mongoose.connection.name)
    } catch(err){
           console.error("MongoDB Atlas error:", err);
            throw err;
    }
}