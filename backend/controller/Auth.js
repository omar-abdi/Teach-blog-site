import User from "../Modal/User.js"

import bcryptjs from "bcryptjs"
import { generateToken } from "../utils/Token.js"

export const RegisterUser=  async(req , res)=>{

try {
        //xogta body ga laga sooo laga soo diray
    const {username , fullName , email , password , isAdmin} = req.body

    //2 hubi in ay inputs la buuxi iyo mid ka mid ah maran yahy ama dhaman ay maran yihin
    if(!username || !fullName || !email || !password){
        //soo celi error
        res.status(400).json({
            error: "Please fail All fialds"
        })
    }
        //3 hubi in uu muubix sharuudaha emailka laso 
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    return res.status(400).json({
        error: "Invalid email format",
    });
}
  


//5 hubi in uuu hore u jiray emailka
const existEmail =  await  User.findOne({email})
if(existEmail){
    return res.status(404).json({
        error: `${existEmail} with this email Already Exist `
    })
}
//5 hubi in uuu hore u jiray username
const existUsername =  await  User.findOne({username})
if(existUsername){
    return res.status(404).json({
        error: "User with this username Already Exist "
    })
}
//hubi in paswordka k yaryhy 6 xaraf
if(password.length <6){
    return res.status(404).json({
        error: "Password must be at lest  7 character "
    })
}
//4hubi in in uu passwordka encyptjs yhy 
const  hashhPassword =    bcryptjs.hashSync(password , 10)
 

const newUser = await new User({
    username ,
    fullName,
    email,
    password: hashhPassword,
    isAdmin
})
if(newUser){

    await newUser.save()
    generateToken(newUser._id , res)
    return res.status(200).json({
        messaage: "User Register Successfully",
        _id: newUser._id,
        username : newUser.username,
        fullName : newUser.fullName ,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
   
        
    })
}



  

} catch (error) {
    console.log("Error " ,error.message)
    res.status(500).json({
        message: error.message
    })
    
}
}
export const Login = async(req , res)=>{
   try {
     const {username ,  password} = req.body
     const user = await User.findOne({username})
     if(!user){
        return res.status(404).json({
            Error: `this Account not found ${username}`

        })
     }
     const isMatch = await bcryptjs.compare(password , user.password)
     if(!isMatch){
          return res.status(404).json({
            Error: "invalit credential"

        })
   

     }
      generateToken(user._id , res)
     res.status(200).json({
        messaage: "User login Successfully",
        _id: user._id,
        username : user.username,
        fullName : user.fullName ,
        email: user.email,
          isAdmin: user.isAdmin,
       

        
    })
   } catch (error) {
     console.log("Error " ,error.message)
    res.status(500).json({
        message: error.message
    })
    
   }
}

 export     const lougOut = (req , res)=>{
   try {
     res.clearCookie("access-token")
     res.status(200).json({
        error: "successfully lougout"
     })
   } catch (error) {
     console.log("Error " ,error.message)
    res.status(500).json({
        message: error.message
    })

    
   }
}

export const UpdateUser = async (req, res) => {
  try {
    const { username, fullName, email, password } = req.body;
    const id = req.user._id;

    const setFields = {
      username,
      fullName,
      email,
    };

    if (password && password.trim() !== "") {
      setFields.password = bcryptjs.hashSync(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: setFields },
      { new: true }
    ).select("-password");

    return res.status(200).json({
        message:"update successfully",
       user: updatedUser
  });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};


