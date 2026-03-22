import mongoose from "mongoose";
const dbConnect = async()=>{
    try {
       await mongoose.connect(process.env.MONGDB_URL) 
       console.log("database connected......")
    } catch (error) {
        console.log("not connect data base")
        
    }
}



export default dbConnect