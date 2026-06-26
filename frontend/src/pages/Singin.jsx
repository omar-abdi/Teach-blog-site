import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../Redux/api/userSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Signin() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.username.trim() || !formData.password.trim()) {
      toast.error('Please enter both username and password')
      return
    }

    dispatch(Login(formData))
    setFormData({
      username: '',
      password: ''
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%)]" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex flex-col justify-center gap-6 px-12 py-12 bg-slate-950 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-sky-400">Sign In</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Modern access for creators and teams
              </h2>
            </div>
            <p className="max-w-md text-slate-300 leading-7">
              Access your editorial workspace with a secure sign-in. Stay productive with quick access to drafts, posts, and publishing tools.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
              <p className="text-sm uppercase text-slate-400 tracking-[0.24em]">Tip</p>
              <p className="mt-3 text-base text-slate-200 leading-6">
                Use your username and password to sign in. If you need an account, register and start building your blog today.
              </p>
            </div>
          </div>

          <div className="px-8 py-10 sm:px-10 lg:px-12 lg:py-16">
            <div className="mb-8 text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">Welcome Back</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">Login to your account</h1>
              <p className="mt-3 text-sm text-slate-500 sm:text-base">Securely sign in and continue managing your blog content.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Username</span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Login
              </button>

              <div className="text-center text-sm text-slate-500">
                Don&apos;t have an account?{' '}
                <Link to="/signup" className="font-semibold text-slate-950 hover:text-sky-600">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar theme="colored" />
    </div>
  )
}

export default Signin