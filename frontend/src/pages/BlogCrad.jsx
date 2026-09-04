import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
function BlogCrad({blog}) {
  return ( 
    <Link 
  to={`/blogs/${blog._id}`}    
  className='group block mx-auto overflow-hidden rounded-2xl border border-[#dfe7df] bg-white p-3 shadow-[0_8px_30px_rgba(23,34,31,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(23,34,31,0.12)]'
>

  <div className="mb-5 overflow-hidden rounded-xl">
    <img 
      src={blog.image} 
      alt="" 
      className='h-56 w-full object-cover transition duration-500 group-hover:scale-105'
    />
  </div>


  <span className='mb-3 inline-block rounded-full bg-[#d8eee8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#138a78]'>
    {blog.category}
  </span>

  <h3 className='mb-2 text-lg font-bold leading-snug text-[#17221f] md:text-xl'>
    {blog.title}
  </h3>

 
  <div className='mt-3 flex items-center justify-between border-t border-[#e7ede7] pt-3 text-sm text-[#687871]'>
    <span>by {blog.Author?.fullName}</span>
    <span>{moment(blog.createdAt).format("DD MMM YYYY")}</span>
  </div>

</Link>
  )
}

export default BlogCrad
