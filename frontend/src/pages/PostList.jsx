import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {FaEdit, FaRegTrashAlt} from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from 'react-redux'
import axios from 'axios'
import moment from "moment"




function PostList() {
  const currentUser = useSelector((state)=>state.currentUser)
 
  const [posts , setPosts] = useState([])
useEffect(() => {
  const getPostfunction = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/posts/user/${currentUser.username}`);
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

 getPostfunction()     
}, [currentUser]);
 

 const deletePosts = (id)=>{

  try {
   axios.delete(`/api/posts/${id}`)
     setPosts(posts.filter((p)=> p._id !==id));
    
    
  } catch (error) {
    console.log(error)
    
  }
 }
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-slate-800 font-bold hidden md:block'>post list</h1>



      {/* post lis */}

      <div className='space-y-4'>
      {posts.map((post)=>(
         <div key={post.id}    className=' p-4 border-r border-l border-blue-900 items-center flex gap-4 justify-betweeen'>
        <div className='flex-1'>
          <h1 className='text-xl font-bold'>{post.title}</h1>
          <p className='text-slate-700 '>bublush p{moment(post.createdAt).format("d-MM-YYYY")}</p>

        </div>
        {/* desktop */}
        <div className='hidden md:flex gap-2'>
          <Link to="/dash/Editpost/:id" className='p-2 hover:bg-gray-200 rounded-lg'>
          <FaEdit size={20} className='text-slate-600'/> 
          </Link>
          <button onClick={()=>deletePosts(post._id)}    className='p-2 hover:bg-red-200 rounded-lg'>
            <FaRegTrashAlt className='text-red-900'/>
          </button>
          
        </div>
        {/* mobile veiw */}
        <div className='relative  md:hidden group'>
          <button className='p-1 hover:bg-gray-200 transition-colors rounded-full '>
            <BiDotsVerticalRounded/>
          </button>
          <div className='hidden group-hover:flex absolute top-8 right-0 flex-col gap-2  bg-white border-slate-200 shadow-lg w-32 rounded-lg '>
            <Link to= "/dash/Editpost/:id" className='flex items-center gap-2 p-2 bg-gary-100'>
            <FaEdit size={20}/> Edit
            </Link>
            <button  onClick={()=>deletePosts(post._id)} className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md'>
              <FaRegTrashAlt size={20}/>delete
            </button>

          </div>

        </div>
        </div>
        
      ))}
       
        
      </div>
    </div>
  )
}

export default PostList
