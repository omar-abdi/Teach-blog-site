
import User from "../Modal/User.js";
import Post from "../Modal/Post.js";
import {v2 as cloudinary} from "cloudinary"

export const createPost = async(req , res)=>{
   // destructuring ku samey kala soo bax  modals ka body iga
  try {
     const {title ,    content ,  category } = req.body ;
  // image soo hel as distructure ahaan 
let {image} = req.body
   //soo hel userka loginka ah id giiisa 

   const userId = req.user._id.toString();
   //kasoo baaar data base userkan idigaan wataa
   const  user = await User.findById(userId)
   if(!user){
    return res.status(404).json({error: "you are not uthenticated"})
   }
   if(!content && !image){
    return res.status(404).json({error: "post must contain both content and image"})
   }
   //upload image
if(image){
    const uploaddedImage =  await   cloudinary.uploader.upload(image)
   image = uploaddedImage.secure_url;
}
   // abuuur post cusub
   const newPost =  new Post({
    title,
    content,
    category,
      Author: userId,

    image
   } )
   await newPost.save()
   res.json(newPost)
  } catch (error) {

    console.error(`error accur in post method ${error.message}`)
        res.status(404).json({error: "internal server error"})
  }
}
export const getAllPost = async(req , res)=>{
   try {
      const posts = await Post.find().sort({createdAt: -1}).populate({path: "Author" ,select:"-password"}) //with out 
      if(posts.length === 0){
         return res.status(200).json([])
      }
      return res.status(200).json(posts)
      
   } catch (error) {
       console.error(`error accur in get method ${error.message}`)
        res.status(404).json({error: "internal server error"})
      
   }
}
export const getPost = async(req , res)=>{
   try {
      const post = await Post.findById(req.params.id).populate({
         path:  "Author" ,
           select: "-password"
         })

      if(!post){
     return res.status(404).json({error: "past not found"}) 
      }
      return res.status(200).json(post)
   } catch (error) {
       console.error(`error accur in getbyid method ${error.message}`)
        res.status(500).json({error: "internal server error"})
      
      
   }
}
export const updatePost = async(req , res)=>{
   try {
      const {id} = req.params;
      const {title , content , category} = req.body
      let {image} = req.body;
      //soo heli qof wax update greynaa idiga
      const userId = req.user._id.toString();
      //sooo hel post iga
      const post = await Post.findById(id)
      if(!post){
         return  res.status(404).json({error: "not found post"})

      }
      if(post.Author.toString() !== userId){
           return  res.status(404).json({error: "unuthorized in this post ! !"})

      }
      if(!image && !title && !content && !category){
           return  res.status(404).json({error: "At lest one fiald must be updted"})
      }
      if(image&image !== post.image){
         const updatedImage = cloudinary.uploader.upload(image)
         const image= updatedImage.secure_url
      }
      const updatedData = await Post.findByIdAndUpdate(id , {title , content , category , image}, {new : true})
      return res.status(200).json(updatedData)
   } catch (error) {
      console.error(`error accur in update method ${error.message}`)
        res.status(500).json({error: "internal server error"})
      
      
   }
}
export const deletePost = async(req , res)=>{
   try {
      const post = await Post.findById(req.params.id)
      if(!post){
         return res.status(404).json({
            message : "post not foud"
         })
      }
      if(post.Author.toString() !== req.user.id.toString()){
          return  res.status(404).json({error: "unuthorized in this post !"})

      }
      // image ka delete

      if(post.image){
const imageId = post.image.split("/").pop().split(".")[0];
         await cloudinary.uploader.destroy(imageId)

      }
    await Post.findByIdAndDelete(req.params.id)

    return res.status(200).json({
      message: "successfully deleted this post "
    })


   } catch (error) {
        console.error(`error accur in delete  method ${error.message}`)
        res.status(500).json({error: "internal server error"})
      
      
   }
}
export const getUserPost =  async(req , res)=>{
   try {
    const {username} = req.params
    const user = await User.findOne({username})

   if(!user){
         return  res.status(404).json({error: "not found user"})

      }
      const posts = await Post.find({Author: user._id}).sort({createdAt: -1}).populate({path: "Author" , select: "-password"})
      res.json(posts)
   } catch (error) {
       console.error(`error accur in delete  method ${error.message}`)
        res.status(500).json({error: "internal server error"})

      
   }
}