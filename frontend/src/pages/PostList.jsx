import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {FaEdit, FaRegTrashAlt} from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from 'react-redux'
import axios from 'axios'
import moment from "moment"
import { useNavigate } from 'react-router-dom'




function PostList() {
  const naviagte = useNavigate()
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
 

 const deletePosts = async(id)=>{

  try {
    const res = await  axios.delete(`/api/posts/${id}`)
    const dat = res.data()
     setPosts(posts.filter((p)=> p._id !==id));
    
    
  } catch (error) {
    console.log(error.message)
    
  }
 }
  return (
    <div className='min-h-screen bg-[#f5f7f2] p-1 sm:p-4'>
      <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.28em] text-[#138a78]'>Creator studio</p>
          <h1 className='mt-2 text-3xl font-black tracking-tight text-[#17221f]'>Your posts</h1>
          <p className='mt-2 text-sm text-[#687871]'>Edit, review, and manage your published stories.</p>
        </div>
        <div className='w-fit rounded-2xl border border-[#d8e0d8] bg-white px-5 py-3 shadow-sm'>
          <p className='text-xs font-bold uppercase tracking-wider text-[#687871]'>Published</p>
          <p className='mt-1 text-2xl font-black text-[#17221f]'>{posts.length}</p>
        </div>
      </div>



      {/* post lis */}

      <div className='space-y-3'>
      {posts.map((post)=>(
         <div key={post._id} className='group flex items-center gap-4 rounded-2xl border border-[#dfe7df] bg-white p-4 shadow-[0_8px_24px_rgba(23,34,31,0.05)] transition hover:border-[#b9d8d0] hover:shadow-[0_14px_30px_rgba(23,34,31,0.09)] sm:p-5'>
        <div className='hidden h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-[#edf2ed] sm:block'>
          {post.image && <img src={post.image} alt='' className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />}
        </div>
        <div className='flex-1'>
          <span className='inline-flex rounded-full bg-[#d8eee8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#138a78]'>{post.category}</span>
          <h1 className='mt-2 line-clamp-2 text-base font-bold text-[#17221f] sm:text-lg'>{post.title}</h1>
          <p className='mt-1 text-xs text-[#687871]'>Published {moment(post.createdAt).format("DD MMM YYYY")}</p>

        </div>
        {/* desktop */}
        <div className='hidden items-center gap-2 md:flex'>
          <Link to={`/dash/editpost/${post._id}`}className='rounded-xl p-3 transition hover:bg-[#edf2ed]'>
          <FaEdit size={18} className='text-[#138a78]'/> 
          </Link>
          <button onClick={()=>deletePosts(post._id)}    className='rounded-xl p-3 transition hover:bg-[#fff0ed]'>
            <FaRegTrashAlt className='text-[#b34e42]'/>
          </button>
          
        </div>
        {/* mobile veiw */}
        <div className='relative md:hidden group'>
          <button className='rounded-xl border border-[#d8e0d8] p-2 text-[#687871] transition hover:bg-[#edf2ed]'>
            <BiDotsVerticalRounded/>
          </button>
          <div className='absolute right-0 top-10 z-10 hidden w-36 flex-col gap-2 rounded-2xl border border-[#dfe7df] bg-white p-2 shadow-xl group-hover:flex'>
            <Link to={`/dash/editpost/${post._id}`} className='flex items-center gap-2 rounded-xl p-2 text-sm font-semibold text-[#17221f] hover:bg-[#edf2ed]'>
            <FaEdit size={20}/> Edit
            </Link>
            <button  onClick={()=>deletePosts(post._id)} className='flex items-center gap-2 rounded-xl p-2 text-sm font-semibold text-[#b34e42] hover:bg-[#fff0ed]'>
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
