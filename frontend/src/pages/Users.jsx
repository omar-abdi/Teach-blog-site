import React, { useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import axios from 'axios'
import moment from 'moment'





function Users() {
  const currentUser = useSelector((state) => state.currentUser)
  const [users, setUsers] = useState([])
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
    <div className='min-h-screen bg-[#f5f7f2] p-1 sm:p-4'>
      <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <p className='text-xs font-bold uppercase tracking-[0.28em] text-[#138a78]'>Workspace</p>
          <h1 className='mt-2 text-3xl font-black tracking-tight text-[#17221f]'>Manage users</h1>
          <p className='mt-2 text-sm text-[#687871]'>Review members and manage access permissions.</p>
        </div>
        <div className='w-fit rounded-2xl border border-[#d8e0d8] bg-white px-5 py-3 shadow-sm'>
          <p className='text-xs font-bold uppercase tracking-wider text-[#687871]'>Total members</p>
          <p className='mt-1 text-2xl font-black text-[#17221f]'>{users.length}</p>
        </div>
      </div>



      {/* userslis */}

      <div className='space-y-3'>
      {users.map((user)=>(
         <div key={user._id} className='group flex items-center gap-4 rounded-2xl border border-[#dfe7df] bg-white p-4 shadow-[0_8px_24px_rgba(23,34,31,0.05)] transition hover:border-[#b9d8d0] hover:shadow-[0_14px_30px_rgba(23,34,31,0.09)] sm:p-5'>
        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d8eee8] text-lg font-black text-[#138a78]'>
          {user.fullName?.charAt(0)?.toUpperCase()}
        </div>
        <div className='min-w-0 flex-1'>
          <h1 className='truncate text-base font-bold text-[#17221f] sm:text-lg'>{user.fullName}</h1>
          <p className='mt-1 text-xs text-[#687871] sm:text-sm'>Registered {moment(user.createdAt).format("DD MMM YYYY")}</p>
          <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${user.isAdmin ? 'bg-[#fff0d9] text-[#a86418]' : 'bg-[#edf2ed] text-[#687871]'}`}>
            {user.isAdmin ? 'Administrator' : 'Member'}
          </span>

        </div>
        {/* desktop */}
        <div className='hidden items-center gap-2 md:flex'>
          <div className='p-1'>
       {user.isAdmin ?(
        <button  
        
        
         className="rounded-xl bg-[#fff0ed] px-4 py-2 text-xs font-bold text-[#b34e42] transition hover:bg-[#b34e42] hover:text-white"
        onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: false ,
            isActivated:user.isActivated
          })}
        
        >Make User</button>
       ): (
         <button    className="rounded-xl bg-[#d8eee8] px-4 py-2 text-xs font-bold text-[#138a78] transition hover:bg-[#138a78] hover:text-white"
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
            className='rounded-xl p-3 transition hover:bg-[#fff0ed]'>
            <FaRegTrashAlt className='text-[#b34e42]'/>
          </button>
          
        </div>
        {/* mobile veiw */}
        <div className='relative md:hidden group'>
          <button className='rounded-xl border border-[#d8e0d8] p-2 text-[#687871] transition hover:bg-[#edf2ed]'>
            {/* <BiDotsVerticalRounded/> */}
          </button>
          <div className='absolute right-0 top-10 z-10 hidden w-36 flex-col gap-2 rounded-2xl border border-[#dfe7df] bg-white p-2 shadow-xl group-hover:flex'>
            {user.isAdmin ?(
        <button  
        
        
         className="rounded-xl bg-[#fff0ed] px-3 py-2 text-xs font-bold text-[#b34e42] transition hover:bg-[#b34e42] hover:text-white"
        onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: false ,
            isActivated:user.isActivated
          })}
        
        >To User</button>
       ): (
         <button    className="rounded-xl bg-[#d8eee8] px-3 py-2 text-xs font-bold text-[#138a78] transition hover:bg-[#138a78] hover:text-white"
          onClick=
         
         {()=>updateIsAdmin({
          id:user._id ,
           isAdmin: true ,
            isActivated:user.isActivated
          })}> To Admin </button> )
       }
            <button
           onClick={()=>deleteUser(user._id)}  
            className='rounded-xl p-2 transition hover:bg-[#fff0ed]'>
            <FaRegTrashAlt className='text-[#b34e42]'/>
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
