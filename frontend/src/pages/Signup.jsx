import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Register } from '../Redux/api/userSlice'
import { useDispatch } from 'react-redux'
function Signup() {
  const dispatch = useDispatch()
  const [formData , setFormData] = useState({
    username :"",
    fullName : "",
    email : "",
    password : ""
  })
   const handleChanle = (e)=>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
    const handlSubmit =(e)=>{
    e.preventDefault()
    dispatch(Register(formData))
  
    }
  return (
    <div className='container  px-4 mx-auto max-w-4xl  overflow-hidden flex flex-col md:flex-row justify-around py-20'>
      <div>
        <h1 className='text-4xl font-bold  text-center md:text-left'>Welcome back </h1>
        <p className='text-2xl font-bold  text-center md:text-left'>Please Inter your Email and Passsword</p>
      </div>
      <div>
    <h1 className='text-2xl font-semibold  text-slate-700'>Create Account</h1>
         <form  onSubmit={handlSubmit} className='text-slate-800 flex flex-col gap-5   text-slate-800' >

            <div >
                <label  className='block my-2'>fullNmae:</label>
                <div>
                    <input type="text"   name='fullName' value={formData.fullName} onChange={handleChanle} placeholder='Enter fullName' className='w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition'/>
                </div>

            </div>
            <div >
                <label  className='block my-2'>Username:</label>
                <div>
                    <input type="text"  name='username' value={formData.username} onChange={handleChanle}    placeholder='Enter Username' className='w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition'/>
                </div>

            </div>
            <div >
                <label  className='block mb-2 text-sm font-medium'>Email:</label>
                <div>
                    <input type="email" name='email' value={formData.email} onChange={handleChanle}   placeholder='Enter Email' className='w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition'/>
                </div>

            </div>
            <div >
                <label  className='block mb-2 text-sm font-medium'>password:</label>
                <div>
                    <input type="password" name='password' value={formData.password} onChange={handleChanle}   placeholder='Enter password' className='w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition'/>
                </div>

            </div>

           <button className="bg-black text-white p-3 rounded-lg hover:bg-slate-800 transition">
    Signup
  </button>
  <p className="text-center text-sm text-slate-500">
Already  have an account? <span className="underline cursor-pointer"><Link to="/login">Signup</Link></span>
  </p>
         </form>

      </div>
    </div>
  )
}

export default Signup
