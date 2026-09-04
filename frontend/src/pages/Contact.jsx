import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-[#f5f7f2] px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[#dfe7df] bg-white shadow-[0_24px_70px_rgba(23,34,31,0.1)] md:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT SIDE - FORM */}
        <div className="p-7 sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#138a78]">Let&apos;s connect</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#17221f]">Contact me</h1>
          <p className="mt-3 max-w-md leading-7 text-[#687871]">
            I am Omar Cabdi, owner of this website. Feel free to contact me anytime.
          </p>

          <form className="mt-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-[#d8e0d8] bg-[#f8faf7] px-4 py-3.5 text-[#17221f] outline-none transition placeholder:text-[#9aa9a2] focus:border-[#138a78] focus:bg-white focus:ring-4 focus:ring-[#d8eee8]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-[#d8e0d8] bg-[#f8faf7] px-4 py-3.5 text-[#17221f] outline-none transition placeholder:text-[#9aa9a2] focus:border-[#138a78] focus:bg-white focus:ring-4 focus:ring-[#d8eee8]"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full resize-none rounded-xl border border-[#d8e0d8] bg-[#f8faf7] px-4 py-3.5 text-[#17221f] outline-none transition placeholder:text-[#9aa9a2] focus:border-[#138a78] focus:bg-white focus:ring-4 focus:ring-[#d8eee8]"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#17221f] py-3.5 font-bold text-white shadow-lg shadow-[#17221f]/15 transition hover:bg-[#138a78]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="relative overflow-hidden bg-[#17221f] p-7 text-white sm:p-10 lg:p-14">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[24px] border-[#138a78]/30" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border-[28px] border-[#e4a15a]/20" />

          <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#58c9b4]">Contact details</p>
          <h2 className="mt-3 text-2xl font-black">Contact info</h2>

          <p className="mt-8 flex items-center gap-3 text-[#c6d5cf]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#58c9b4]"><FaEnvelope /></span> Omarcabdi0008@gmail.com
          </p>

          <p className="mt-4 flex items-center gap-3 text-[#c6d5cf]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#e4a15a]"><FaPhone /></span> +252 61 2 07 23 07
          </p>

          <h3 className="mt-12 font-bold">Follow me</h3>

          <div className="mt-4 flex gap-3 text-lg">
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c6d5cf] transition hover:bg-[#138a78] hover:text-white"><FaFacebook /></a>
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c6d5cf] transition hover:bg-[#e4a15a] hover:text-[#17221f]"><FaInstagram /></a>
            <a href="#" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c6d5cf] transition hover:bg-white hover:text-[#17221f]"><FaGithub /></a>
          </div>

          <p className="mt-12 border-t border-white/10 pt-5 text-sm text-[#91aaa0]">
            Owner: <span className="font-bold text-white">Omar Cabdi</span>
          </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;