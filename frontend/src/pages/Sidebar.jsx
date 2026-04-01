import React, { useState } from 'react'
import {FiChevronRight} from "react-icons/fi"
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'
import { FiHome, FiUser } from "react-icons/fi"
import { TbLogs } from "react-icons/tb"
import { IoIosCreate } from "react-icons/io"
import { LuLogOut } from "react-icons/lu"
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
    const [isOpen , setIsOpen] = useState(true)
    const logOut = ()=>{
      alert("logouted")
    }
const menueItems = [
  { name: "Dashboard", icon: FiHome, path: "/dash" },
  { name: "Posts", icon: TbLogs, path: "/dash/posts" },
  { name: "Create Posts", icon: IoIosCreate, path: "/dash/create post" },
  { name: "Profile", icon: FiUser, path: "/dash/profile" },
  { name: "Logout", icon: LuLogOut, action: logOut },
]
  return (
    <div className={`bg-gray-800 sticky top-0 h-screen text-white  relative    ${isOpen ? "w-64 " : "w-20"}`}>
  

      <button  onClick={()=> setIsOpen(!isOpen)} className=' absolute  -right-3 top-4 p-1 rounded-full border-2 border-white bg-gray-800'>
        <FiChevronRight className={`w-5 h-5 transform  ${isOpen && "rotate-180"}`}/>
      </button>
{/* 
      logo */}
  <div className='flex items-center space-x-2 mb-8'>
    <div className='w-8 h-8 items-center rounded-lg justify-center'>
        <Link>
        <IoMdArrowRoundBack  size={25}/>
        </Link>
     
    </div>
      { isOpen &&   <h1>Iftiinshe teach</h1>  }
  </div>
<nav> 
  {menueItems.map((item , index)=>(
     <div className=' '>
    <button   onClick={()=> item.action ? item.action() : item.path && navigate (item.path)} className='flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700'>
      <item.icon className=' w-6 h-6'/>
        {isOpen &&<span>{item.name}</span>}
    </button>
  
  </div>
  ))}
 
</nav>
    </div>
  )
}

export default Sidebar
