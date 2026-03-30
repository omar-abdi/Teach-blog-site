import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Login } from '../Redux/api/userSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    if(!formData.username || !formData.password){
      toast.error("Please fail inputs")
    }
    e.preventDefault()
    dispatch(Login(formData))
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
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please enter your credentials
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Username */}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white font-semibold p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>

          {/* Link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black font-medium underline">
              Register
            </Link>
          </p>

        </form>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Signin