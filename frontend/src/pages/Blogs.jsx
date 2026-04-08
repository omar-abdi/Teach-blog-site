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
    <div>
      <h1 className='text-2xl text-slate-800  '>All Posts in website</h1>
      <div className='container mx-auto'>
        <GridPost  posts = {posts}/>
      </div>
    </div>
  )

}

export default Blogs
