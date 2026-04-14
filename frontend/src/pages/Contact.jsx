import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-8 md:flex gap-8">

        {/* LEFT SIDE - FORM */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">Contact Me</h1>
          <p className="text-gray-500 mt-2">
            I am Omar Cabdi, owner of this website. Feel free to contact me anytime.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="flex-1 bg-gray-50 p-6 rounded-xl mt-8 md:mt-0">

          <h2 className="text-xl font-bold text-gray-800">Contact Info</h2>

          <p className="mt-4 flex items-center gap-2 text-gray-600">
            <FaEnvelope /> Omarcabdi0008@gmail.com
          </p>

          <p className="mt-2 flex items-center gap-2 text-gray-600">
            <FaPhone /> +252 61 2 07 23 07
          </p>

          <h3 className="mt-6 font-semibold">Follow Me</h3>

          <div className="flex gap-4 mt-3 text-2xl text-gray-700">
            <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-900"><FaGithub /></a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Owner: <span className="font-semibold">Omar Cabdi</span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Contact;