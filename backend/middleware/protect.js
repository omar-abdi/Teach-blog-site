import jwt from "jsonwebtoken"
import User from "../Modal/User.js"

export const protect = async(req , res , next)=>{
   // hubi in uu token jiro qofkan in uu token hysto

  try {
     const token = req.cookie.access-token
   if(!token){
    return res.status(401).json({
        error: "unuthorazed : No token!"
    })
   }
   //kala fur fur token ka ama virfy garey 
   const decoded = jwt.verify(token , protect.env.SECRET_TOKEN)
   if(!decoded){
      return res.status(401).json({
        error: "unuthorazed : invalid token"
    })

   }
   // soo hel user by id 
   const user = await User.findById(decoded.userId).select("-password")
   if(!user){
      return res.status(404).json({
        error: "user not found"
    })
   }
  req.user= user 
   next()
  } catch (error) {
    console.error(`Error product route ${error.message}`)
    res.status(500).json({
        error: "internal server error"
    })
  }
}