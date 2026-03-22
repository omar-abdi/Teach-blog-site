import express from "express"
import dotenv from "dotenv"
import AuthRouter from "./routes/Auth.js"
import dbConnect from "./Config/db.js"
const app = express()
dotenv.config()
app.use(express.json())
const PORT = process.env.PORT||4000
app.use("/api/users" , AuthRouter)
app.listen(PORT, ()=>{
    dbConnect()
    console.log(`server is runing port ${PORT}`)
})