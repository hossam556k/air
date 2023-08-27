import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className=" flex justify-between h-10 items-center  p-4 text-white text-bold border-b-2 border-b-blue-300 uppercase md:h-20 lg-px-20 xl:px-40 ">
    <Image src="/logo.png" width={140} height={40} alt="logo"/>
    <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4">
        <Link className="hover:text-blue-300"  href="/">
          Home
        </Link>
        <Link className="hover:text-blue-300" href="/menu">
        Dryer Vent
        </Link>
        <Link className="hover:text-blue-300" href="/contact">
          Contact Us
        </Link>
        <Link className="hover:text-blue-300" href="/contact">
        Blog 
        </Link>
      </div>
    
    </div>
  );
};

export default Navbar;
