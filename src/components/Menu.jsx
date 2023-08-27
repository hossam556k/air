"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Dryer Vent", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <AiOutlineClose
         
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ) : (
        <AiOutlineMenu
       
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      )}
     {!open && <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white absolute left-0 top-[88px] h-[calc(45vh-3rem)] animate-[moveup_2s_ease-in-out] w-[300px] flex flex-col gap-8 items-start justify-center text-xl z-10 shadow-2xl">
        {links.map((link) => (
          <Link className="animate-[moveright_3s_ease-in-out_1] mx-4" href={link.url} key={link.id} onClick={() => setOpen(true)}>
            {link.title}
          </Link>
        ))}
  
      
       
      </div>  }
      
      
    </div>
  );
}

export default Menu;
