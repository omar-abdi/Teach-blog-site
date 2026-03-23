import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    Author:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true

    },
    title: {
        type : String,
        required : true
    },
    category:{
        type: String,
        default: "Un-categorized"
    },
    content:{
        type : String
    },
    image:{
        type : String
    }

},{timestamps: true})




const Post = mongoose.model("Poast" , postSchema)


export default Post