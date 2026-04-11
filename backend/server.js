import express from "express"
import dotenv from "dotenv"
import AuthRouter from "./routes/Auth.js"
import dbConnect from "./Config/db.js"
import postRouter from "./routes/postRouter.js"
import cookieParser from "cookie-parser"
import {v2 as cloudinary} from "cloudinary"
import usersRouter from "./routes/users.js"
import cors from "cors"
const app = express()
dotenv.config()
app.use(express.json({ limit: "10mb" }));
app.use(express.json())
app.use(cors())
app.use(cookieParser())
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use("/api/users" , AuthRouter)
app.use("/api/posts" , postRouter)
app.use("/api/users" , usersRouter)
const PORT = process.env.PORT||4000

app.listen(PORT, ()=>{
    dbConnect()
    console.log(`server is runing port ${PORT}`)
})