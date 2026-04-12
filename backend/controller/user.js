import User from "../Modal/User.js";

export const getUser = async(req , res)=>{

try {
    // todo is admin or user 
if(!req.user || !req.user.isAdmin){
    res.status(404).json({
      status: "fail",
        message: "you  are not Admin you can not view users"
    })
}
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
        message : "error accur fetch from  data base  users" ,
    
    })
    console.log(error.message)
    
}
}



export const deleteUser = async(req , res)=>{
    try {
        if(!req.user || !req.user.isAdmin){
          return    res.status(404).json({
status: "fail",
        message: "you  are not Admin you can not view users"
    })
            


        }
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "user successfully deleted"
        })
        
    } catch (error) {
         return res.status(500).json({
        message : "error accur to delete  user" ,
    
    })
    console.log(error.message)
        
    }
}