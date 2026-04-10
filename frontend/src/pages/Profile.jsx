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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
    
    <h1 className="text-2xl font-bold text-center mb-6">
      Your Profile
    </h1>

    <form className="space-y-4"  onSubmit={handdleSubmit}>
      
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formdata.username}
        onChange={handdleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formdata.fullName}
        onChange={handdleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formdata.email}
        onChange={handdleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={formdata.password}
        onChange={handdleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Update Profile
      </button>

    </form>
  </div>
</div>
  )
}

export default Profile
