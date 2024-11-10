import mongoose from "mongoose";

const conn = mongoose.connect(`${process.env.MONGODB_URL}`)

conn.then(()=> console.log('connected')).catch((error)=>{
    console.log("connected failed!")
})
