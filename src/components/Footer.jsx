import React from "react";
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import {
  FaBloggerB,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-blue-400  text-white align-center h-12 flex flex-col items-center justify-around md:text-base p-5">
  
    
    <div className="flex gap-3 text-white ">
      <FaFacebookF className="w-6 h-6 bg-transparent cursor-pointer hover:scale-110 transition-all shadow-2xl" />
      <FaGooglePlusG className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
      <FaBloggerB className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
      <FaYoutube className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
      <FaYelp className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
      <FaLinkedinIn className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
    </div>
    <div>Copyright © 2019 - 2023 - airductvents.com - Sitemap</div>

  </div>
  )
}

export default Footer