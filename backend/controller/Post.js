
import User from "../Modal/User.js";
import Post from "../Modal/Post.js";

export const createPost = async(req , res)=>{
   // destructuring ku samey kala soo bax  modals ka body iga
  try {
     const {title ,    content ,  category } = req.body ;
  

   //soo hel userka loginka ah id giiisa 

   const userId = req.user._id.toString();
   //kasoo baaar data base userkan idigaan wataa
   const  user = await User.findById(userId)
   if(!user){
    return res.status(404).json({error: "you are not uthenticated"})
   }
   if(!content){
    return res.status(404).json({error: "post must contain both content and image"})
   }
   // abuuur post cusub
   const newPost =  new Post({
    title,
    content,
    category,
      Author: userId
    //image
   } )
   await newPost.save()
   res.json(newPost)
  } catch (error) {

    console.error(`error accur in post method ${error.message}`)
        res.status(404).json({error: "internal server error"})
  }
}
export const getAllPost = async()=>{}
export const getPost = async()=>{}
export const updatePost = async()=>{}
export const deletePost = async()=>{}