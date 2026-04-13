import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {FaEdit, FaRegTrashAlt} from "react-icons/fa"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from 'react-redux'
import axios from 'axios'
import moment from "moment"
import { useNavigate } from 'react-router-dom'





function Users() {
  const naviagte = useNavigate()
  const currentUser = useSelector((state)=>state.currentUser)
 
  const [users , setUsers] = useState([])
    const getPostfunction = async () => {
    try {
      const res = await axios.get("/api/users");
setUsers(res.data.users);

    } catch (err) {
      console.error(err);
    }
  };
useEffect(() => {


 getPostfunction()     
}, [currentUser]);




 const deleteUser = (id)=>{

  try {
    const res = axios.delete(`/api/users/${id}`)
    console.log(res.data);
     setUsers(users.filter((user)=> user._id !==id));
    
    
  } catch (error) {
    console.log(error.message)
    
  }
 }
if(users.length <0){
    return <h1>loading</h1>
}
//update is admin
const updateIsAdmin = async({id , isAdmin , isActivated})=>{
  const res = await fetch(`/api/users/${id}`,{
    method: "PUT",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({isAdmin , isActivated:isActivated})
  });
 
  const data = await  res.json()
  getPostfunction()
}
//update is admin
const updateisActivated = async({id , isAdmin , isActivated})=>{
  const res = await fetch(`/api/users/${id}`,{
    method: "PUT",
    headers:{"Content-Type":"aplication/json"},
    body: JSON.stringify({isAdmin , isActivated:isActivated})
  });
 
  const data = await  res.json()
  getPostfunction()
}
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-slate-800 font-bold hidden md:block'>manage users</h1>



      {/* userslis */}

      <div className='space-y-4'>
      {users.map((user)=>(
         <div key={user._id}    className=' p-4 border-r border-l border-blue-900 items-center flex gap-4 justify-betweeen'>
        <div className='flex-1'>
          <h1 className='text-xl font-bold'>{user.fullName}</h1>
          <p className='text-slate-700 '> Registered on{moment(user.createdAt).format("d-MM-YYYY")}</p>

        </div>
        {/* desktop */}
        <div className='hidden md:flex gap-2'>
          <div className='p-2 hover:bg-gray-200 rounded-lg'>
       {user.isAdmin ?(
        <button  
        
        
         className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
        onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: false ,
            isActivated:user.isActivated
          })}
        
        >Make User</button>
       ): (
         <button    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
          onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: true ,
            isActivated:user.isActivated
          })}>Make Admin </button> )
       }


          </div>
          <button
           onClick={()=>deleteUser(user._id)}  
            className='p-2 hover:bg-red-200 rounded-lg'>
            <FaRegTrashAlt className='text-red-900'/>
          </button>
          
        </div>
        {/* mobile veiw */}
        <div className='relative  md:hidden group'>
          <button className='p-1 hover:bg-gray-200 transition-colors rounded-full '>
            <BiDotsVerticalRounded/>
          </button>
          <div className='hidden group-hover:flex absolute top-8 right-0 flex-col gap-2  bg-white border-slate-200 shadow-lg w-32 rounded-lg '>
            {user.isAdmin ?(
        <button  
        
        
         className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
        onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: false ,
            isActivated:user.isActivated
          })}
        
        >To User</button>
       ): (
         <button    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition"
          onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: true ,
            isActivated:user.isActivated
          })}> To Admin </button> )
       }
            <button
           onClick={()=>deleteUser(user._id)}  
            className='p-2 hover:bg-red-200 rounded-lg'>
            <FaRegTrashAlt className='text-red-900'/>
          </button>
          </div>

        </div>
        </div>
        
      ))}
       
        
      </div>
    </div>
  )
}

export default Users
