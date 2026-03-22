import User from "../Modal/User.js"

import bcryptjs from "bcryptjs"

export const RegisterUser=  async(req , res)=>{

try {
        //xogta body ga laga sooo laga soo diray
    const {username , fullName , email , password} = req.body

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
        error: "User with this email Already Exist "
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
    password: hashhPassword
})
if(newUser){
    await newUser.save()
    return res.status(200).json({
        messaage: "User Register Successfully",
        _id: newUser._id,
        username : newUser.username,
        fullName : newUser.fullName ,
        email: newUser.email,

        
    })
}



  

} catch (error) {
    console.log("Error " ,error.message)
    res.status(500).json({
        message: error.message
    })
    
}
}