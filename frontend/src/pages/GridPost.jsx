import React from 'react'
import BlogCrad from './BlogCrad'
import { Link } from 'react-router-dom'

function GridPost({ isHome ,    posts}) {
    console.log(posts)
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((blogpost)=>(
            <div > 
                <BlogCrad  blog = {blogpost} key={blogpost._id}/>
                
            </div>
        ))}
      
    </div>
    </>
  )
}

export default GridPost
