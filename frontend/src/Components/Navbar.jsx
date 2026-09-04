import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'



 function Navbar() {
  const [open, setOpen] = useState(false);
const currentUser = useSelector((state)=> state.currentUser)
  return (
    <nav className="sticky top-0 z-50 border-b border-[#dfe7df] bg-[#f5f7f2]/95 text-[#17221f] shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        
        {/* Logo */}
       <Link to="/">
        <h1 className="text-xl font-black tracking-tight"><span className="text-[#138a78]">Teach</span><span className="text-[#17221f]">.web</span></h1>
       </Link>
{/* desktop desin */}
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link className="transition hover:text-[#138a78]" to="/">Home</Link>
          <Link className="transition hover:text-[#138a78]" to="/blogs">Blogs</Link>
          <Link className="transition hover:text-[#138a78]" to="/contact">Contact</Link>
          {!currentUser  ?   <Link className="rounded-full bg-[#17221f] px-5 py-2.5 text-white transition hover:bg-[#138a78]" to="/login">Sign in</Link>  : <Link className="rounded-full bg-[#17221f] px-5 py-2.5 text-white transition hover:bg-[#138a78]" to="/dash">Dashboard</Link>
          
        }
         
        </div>

        {/* Mobile Button */}
        <button 
          className="rounded-xl border border-[#d8e0d8] px-3 py-1 text-xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-[#dfe7df] bg-white px-5 pb-5 pt-4 text-sm font-semibold md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
       {!currentUser  ?   <Link to="/login" onClick={()=> setOpen(false)}>Sign in</Link>  : <Link to="/dash" onClick={()=> setOpen(false)}>Dashbroad</Link>
          
        }
        </div>
      )}
    </nav>
  );
}
export default Navbar