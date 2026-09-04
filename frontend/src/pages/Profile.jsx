import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Profile() {

    const currentUser = useSelector((state)=>state.currentUser)
    const [formdata , setFormData] = useState({
        username: "",
        fullName : "",
        email : "",
        password : ""
    })

    useEffect(()=>{
        if(currentUser){
            return setFormData({
                ...formdata ,
                username: currentUser.username,
                fullName : currentUser.fullName,
                email : currentUser.email,
                password :""
            })
        }
        return

    },[currentUser])
   
  
    const handdleChange = (e)=>{
       setFormData({
         ...formdata,
        [e.target.name]:e.target.value
       })
    }

    const handdleSubmit = async(e)=>{
          e.preventDefault()
          try {
             const res =await axios.put("/api/users" , formdata)
             const data = res.data
             setFormData(data)
          } catch (error) {
            console.log(error.message)
            
          }
    }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Card */}
      <div className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-black/60">
        
        {/* Profile Avatar Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 p-[2px] mb-3 shadow-lg shadow-blue-500/20">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-blue-400 font-bold text-2xl">
              {formdata.username ? formdata.username.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Your Profile
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage your account credentials
          </p>
        </div>

        {/* Unchanged Form Structure */}
        <form className="space-y-4" onSubmit={handdleSubmit}>
          
          <div>
            <label className="text-xs font-medium text-slate-400 mb-1.5 block ml-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formdata.username}
              onChange={handdleChange}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 mb-1.5 block ml-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formdata.fullName}
              onChange={handdleChange}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 mb-1.5 block ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formdata.email}
              onChange={handdleChange}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 mb-1.5 block ml-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formdata.password}
              onChange={handdleChange}
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700/70 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition duration-200"
          >
            Update Profile
          </button>

        </form>
      </div>
    </div>
  )
}

export default Profile