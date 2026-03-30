import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Register } from '../Redux/api/userSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
     if(!formData.username || !formData.password | !formData.email || formData.fullName){
          toast.error("Please fail inputs")
        }
    e.preventDefault()
    dispatch(Register(formData))
  
     setFormData({
      username: "",
      password:""
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please fill in your details
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button className="bg-black text-white font-semibold p-3 rounded-lg hover:bg-gray-800 transition">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-medium underline">
              Login
            </Link>
          </p>

        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Signup