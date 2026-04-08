import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import GridPost from './GridPost';
import { Link } from 'react-router-dom';

function Home() {
   const [post, setPost] = useState(null);
   const [posts, setPosts] = useState([]);
  
      useEffect(() => {
          const GetPosts = async () => {
              try {
                  const res = await fetch("/api/posts");
                  const data = await res.json();
                  setPost(data[0]);
                  setPosts(data);
              } catch (error) {
                  console.error("Error fetching post:", error.message);
              }
          };
          GetPosts();
      }, []);
  if (!posts || posts.length === 0) {
    return <h1>Loading...</h1>;
}
    
  return (
    <div className='container mx-auto overflow-hidden p-4'>
<Hero post = {post}/>
  <h1 className='text-2xl '>Resent Posts</h1>
  <GridPost  isHome = {true} posts ={posts}/>
  <Link className='bg-slate-700 rounded-lg px-6 py-2 shadow-lg text-white'>se more</Link >
    </div>
  )
}

export default Home
