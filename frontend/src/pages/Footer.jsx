import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">

        {/* Logo / Title */}
        <div>
          <h1 className="text-2xl font-bold">Teach Blog</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Simple blog platform for learning and sharing knowledge.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Quick Links</h2>
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
          <a href="/blogs" className="text-gray-400 hover:text-white">Blogs</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold">Contact</h2>
          <p className="text-gray-400 text-sm mt-2">
            Email: Omarcabdicali0008@gmail.com
          </p>
          <p className="text-gray-400 text-sm">
            Phone: +252 61 2 07  13 07
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-500 text-sm">
        © {new Date().getFullYear()} Teach Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;