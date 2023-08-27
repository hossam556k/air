"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import React, { useEffect, useState } from "react";
import { AiFillPhone } from "react-icons/ai";

const data = [
  {
    image: "/air1.webp",
  },
  {
    image: "/air2.jpg",
  },
  {
    image: "/air3.jpg",
  },
];

const Slider = () => {
  const [currentside, setCurrentSide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      <div className="flex items-center justify-center flex-col gap-10 text-balck-700 font-bold mr-6 mx-auto text-center">
        <h1 className="text-3xl text-center uppercase p-4 md:text-6xl xl:text-5xl text-white">
          AIR DUCT VENTS
          <span></span>{" "}
          <span className="text-blue-300">
              <Typewriter
                options={{
                  strings: ["CLEANING"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
        </h1>
        <p className="text-gray-300 font-normal mx-10">
        You might ask yourself what ducts cleaning is exactly & how often should I clean air ducts by myself. Air duct vents cleaning requires professionalism which Air Duct Vents Cleaning TX experts have & it should be done regularly to keep your house clean & safe against hidden dangers!

        </p>
        <div className="flex flex-col gap-10 lg:flex lg:flex-row xl:gap-9 "> 
        <button className="bg-green-400 text-2xl text-white rounded-lg  hover:bg-blue-400 py-4 px-8 hover:scale-110 shadow-lg duration-500">
        <div className="flex gap-1 items-center justify-center">
        <AiFillPhone />
        281-402-9117
    
        </div>
        </button>
        <button className="bg-blue-400 text-2xl text-white rounded-lg hover:bg-green-400  py-4 px-8 hover:scale-110 shadow-lg duration-500 ">
        <div className="flex gap-1 items-center justify-center">
        <AiFillPhone />
        281-402-9117
    
        </div>
        </button>
        </div>
      </div>
      <div className=" relative mt-3"></div>
      <Image
      
        src={data[currentside].image}
        alt="air"
        
        width={767}
        height={10}
        className="hidden xl:flex object-fill"
      />
    
     
    </div>
  );
};

export default Slider;
