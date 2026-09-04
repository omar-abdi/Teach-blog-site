import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar() {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 text-slate-100 shadow-xl backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-1">
          <h1 className="text-2xl font-black tracking-tight text-white transition duration-200 group-hover:opacity-90">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Teach</span>
            <span className="text-slate-200">.web</span>
          </h1>
        </Link>

        {/* Desktop Design */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link 
            className="text-slate-300 transition duration-200 hover:text-blue-400" 
            to="/"
          >
            Home
          </Link>
          <Link 
            className="text-slate-300 transition duration-200 hover:text-blue-400" 
            to="/blogs"
          >
            Blogs
          </Link>
          <Link 
            className="text-slate-300 transition duration-200 hover:text-blue-400" 
            to="/contact"
          >
            Contact
          </Link>

          {!currentUser ? (
            <Link 
              className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-white font-semibold shadow-md shadow-blue-500/20 transition duration-200 hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98]" 
              to="/login"
            >
              Sign in
            </Link>
          ) : (
            <Link 
              className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-white font-semibold shadow-md shadow-blue-500/20 transition duration-200 hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98]" 
              to="/dash"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button 
          className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-3.5 py-1.5 text-lg text-slate-300 transition duration-200 hover:bg-slate-800 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-3 border-t border-slate-800/80 bg-slate-900/95 px-6 pb-6 pt-4 text-sm font-medium backdrop-blur-2xl md:hidden animate-in slide-in-from-top-2 duration-200">
          <Link 
            to="/" 
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Home
          </Link>
          <Link 
            to="/blogs" 
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Blogs
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Contact
          </Link>

          {!currentUser ? (
            <Link 
              to="/login" 
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-center font-semibold text-white shadow-md shadow-blue-500/20"
            >
              Sign in
            </Link>
          ) : (
            <Link 
              to="/dash" 
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-center font-semibold text-white shadow-md shadow-blue-500/20"
            >
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;