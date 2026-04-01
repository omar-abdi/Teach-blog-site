import React from 'react'
import {Link} from "react-router-dom"
import {FaEdit, FaRegTrashAlt} from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
function PostList() {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-slate-800 font-bold hidden md:block'>post list</h1>



      {/* post lis */}

      <div className='space-y-4'>
        {/* past item */}
        <div className=' p-4 border-r border-l border-blue-900 items-center flex gap-4 justify-betweeen'>
        <div className='flex-1'>
          <h1 className='text-xl font-bold'>post titel : 01</h1>
          <p className='text-slate-700 '>bublush post at : 10/10/2026</p>

        </div>
        {/* desktop */}
        <div className='hidden md:flex gap-2'>
          <Link to="/dash/Editpost/:id" className='p-2 hover:bg-gray-200 rounded-lg'>
          <FaEdit size={20} className='text-slate-600'/> 
          </Link>
          <button className='p-2 hover:bg-red-200 rounded-lg'>
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
            <button className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md'>
              <FaRegTrashAlt size={20}/>delete
            </button>

          </div>

        </div>
        </div>
        
      </div>
    </div>
  )
}

export default PostList
