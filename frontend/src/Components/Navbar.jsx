import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'



 function Navbar() {
  const [open, setOpen] = useState(false);
const currentUser = useSelector((state)=> state.currentUser)
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">Teach-web</h1>
{/* desktop desin */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
          {!currentUser  ?   <Link to="/login">Sign in</Link>  : <Link to="/dash">Dashbroad</Link>
          
        }
         
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-blue-600">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contactt</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Sign in</Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar