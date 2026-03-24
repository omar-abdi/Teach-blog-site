import express from "express"
import dotenv from "dotenv"
import AuthRouter from "./routes/Auth.js"
import dbConnect from "./Config/db.js"
import postRouter from "./routes/postRouter.js"
import cookieParser from "cookie-parser"
const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use("/api/users" , AuthRouter)
app.use("/api/posts" , postRouter)
const PORT = process.env.PORT||4000

app.listen(PORT, ()=>{
    dbConnect()
    console.log(`server is runing port ${PORT}`)
})