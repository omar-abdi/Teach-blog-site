import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
function BlogCrad({blog}) {
  return ( 
    <Link 
  to={`/blogs/${blog._id}`}    
  className='block max-w-md mx-auto bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 r'
>

  <div className="flex justify-center mb-4">
    <img 
      src={blog.image} 
      alt="" 
      className='w-[90%] h-52 object-cover rounded-xl shadow-md'
    />
  </div>


  <span className='inline-block bg-slate-800 text-white text-sm px-3 py-1 rounded-full mb-3'>
    {blog.category}
  </span>

  <h3 className='text-lg md:text-xl font-semibold text-slate-800 mb-2 leading-snug'>
    {blog.title}
  </h3>

 
  <div className='flex items-center justify-between text-sm text-gray-500 border-t pt-3 mt-3'>
    <span>by {blog.Author?.fullName}</span>
    <span>{moment(blog.createdAt).format("DD MMM YYYY")}</span>
  </div>

</Link>
  )
}

export default BlogCrad
