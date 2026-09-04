import React from 'react'
import { useState , useEffect } from 'react';
import GridPost from './GridPost';
import axios from 'axios';
function Blogs() {

     const [posts, setPosts] = useState([]);
    
        useEffect(() => {
            const GetPosts = async () => {
                try {
                    const res = await axios.get("/api/posts");
                    const data = await res.data;
                  
                    setPosts(data);
                } catch (error) {
                    console.error("Error fetching post:", error);
                }
            };
            GetPosts();
        }, []);
    
       if(!posts){
        return <h1>loding</h1>
       }
  return (
    <div className='min-h-screen bg-[#f5f7f2] px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
      <p className='text-sm font-bold uppercase tracking-[0.28em] text-[#138a78]'>The journal</p>
      <h1 className='mt-3 text-4xl font-black tracking-tight text-[#17221f] md:text-5xl'>All stories</h1>
      <p className='mt-3 max-w-xl text-[#687871]'>Ideas, lessons, and field notes from the Teach community.</p>
      <div className='mt-10'>
        <GridPost  posts = {posts}/>
      </div>
      </div>
    </div>
  )

}

export default Blogs
