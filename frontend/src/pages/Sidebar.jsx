import React, { useState } from 'react'
import {FiChevronRight} from "react-icons/fi"
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'

function Sidebar() {
    const [isOpen , setIsOpen] = useState(true)
  return (
    <div className={`bg-gray-800 sticky top-0 h-screen text-white  relative    ${isOpen ? "w-64 " : "w-20"}`}>
      sidebar

      <button  onClick={()=> setIsOpen(!isOpen)} className=' absolute  -right-3 top-4 p-1 rounded-full border-2 border-white bg-gray-800'>
        <FiChevronRight className={`w-5 h-5 transform  ${isOpen && "rotate-180"}`}/>
      </button>
{/* 
      logo */}
  <div>
    <div>
        <Link>
        <IoMdArrowRoundBack/>
        </Link>
    </div>
  </div>

    </div>
  )
}

export default Sidebar
