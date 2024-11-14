import mongoose from "mongoose";

declare global{
    var mongoose: any
}

const MONGODB_URL = process.env.MONGODB_URL!;

if(!MONGODB_URL){
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = ()=>{
    return mongoose.connect(MONGODB_URL)
}
export default dbConnect;