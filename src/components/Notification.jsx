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

function Notification() {
  return (
    <div className="bg-blue-400  text-white align-center h-12 px-4 flex items-center justify-around md:text-base ">
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-2">
          {" "}
          <AiFillClockCircle /> Mon - Sun : 8:00 AM - 11:00 PM
        </div>
        <div className="flex items-center gap-2 p-2">
          {" "}
          <AiFillPhone /> 281-402-9117‬
        </div>
      </div>
      <div className="flex gap-3 text-white ">
        <FaFacebookF className="w-6 h-6 bg-transparent cursor-pointer hover:scale-110 transition-all shadow-2xl" />
        <FaGooglePlusG className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
        <FaBloggerB className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
        <FaYoutube className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
        <FaYelp className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
        <FaLinkedinIn className="w-6 h-6 bg-transparent  cursor-pointer hover:scale-110 transition-all shadow-2xl" />
      </div>
    </div>
  );
}

export default Notification;
