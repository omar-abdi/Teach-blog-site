import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useParams } from 'react-router-dom'
function Blogpost() {
  const [post , setPost ] = useState(null)
  const {id} = useParams()
 const getOnePost = async()=>{
  try {
    
    const res = await axios.get(`/api/posts/${id}`)
 const data =   res.data;
 setPost(data)
  } catch (error) {
    console.log(error.message)
    
  }
 }
useEffect(()=>{
  getOnePost()
},[id])
//  console.log(data)
 if(!post){
  return <h1>loading</h1>
 }
  return (
   <div className="max-w-3xl mx-auto px-4 py-10">

  {/* Category */}
  <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-full font-medium">
    {post?.category}
  </span>

  {/* Title */}
  <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight">
    {post?.title}
  </h1>

  {/* Author + Date */}
  <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
    <span>
      By <span className="font-semibold text-gray-700">
        {post?.Author?.fullName}
      </span>
    </span>

    <span>
      {post?.createdAt &&
        moment(post.createdAt).format("MMM DD, YYYY")}
    </span>
  </div>

  {/* Image */}
  <div className="mt-6">
    <img
      src={post?.image}
      alt={post?.title}
      className="w-full h-[400px] object-cover rounded-xl shadow-md"
    />
  </div>

  {/* Content */}
  <div
    className="mt-8 text-gray-700 leading-7 space-y-4 text-lg"
    dangerouslySetInnerHTML={{ __html: post?.content }}
  ></div>

</div>
  )
}

export default Blogpost
