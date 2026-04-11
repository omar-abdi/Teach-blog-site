import User from "../Modal/User.js";

export const getUser = async(req , res)=>{

try {
    // todo is admin or user 

// find the users from data base 
const users = await User.find().sort({createdAt: -1}).select("-password")
if(users){
    return res.status(200).json({
        message : "successfuly ",
        users
    })
}
res.status(404).json([])
} catch (error) {
      return res.status(200).json({
        message : "error accur fetch from databasw users" ,
    
    })
    console.log(error.message)
    
}
}



