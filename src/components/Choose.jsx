/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";

const Choose = () => {
  return (
    <div className="w-full h-full"  data-aos="fade-up"
    data-aos-duration="3000">
      <h2
        className="main-title text-4xl mt-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        WHY CHOOSE US!
      </h2>
      <div className="flex items-center justify-center mt-20 bg-gray-900">
        <div className=" flex flex-col lg:flex lg:flex-row sm:items-center justify-center items-center  ">
          <div>
            <Image src="/chose.webp" width={423} height={100} alt="chose" className="object-cover shadow-2xl rounded-xl"/>
          </div>
          <div className="flex flex-col gap-6 shadow-2xl p-10 bg-white-50  text-center mr-[-35px] z-100">
            <h3 className="text-4xl font-bold  text-blue-300 ">
              Why You Need Our Pros?{" "}
            </h3>
            <div className="text-justify">
              <p className="text-[#ddd] mb-6 md:text-center sm:text-center lg:text-start">
              To properly clean your duct and vents in Houston & Dallas, Texas, you
                <br />
                need a long hose and a special rotating brush connected to the hose.
                <br />
                The hose needs to be long enough to reach your entire ducts. This
                <br />
                equipment is not usually found in every house, and not everybody
                <br />
                knows how to operate it
              </p>

              <p className="text-[#ddd]">
                  
                  That's why you need a professional cleaning service like Air Duct
                
                <br />
                Vents Cleaning TX. Get a Professional cleaning and examination.
                <br />
                house air quality with Air Duct Vents Cleaning TX professionals
                as
                <br />
                Ducts clean-up might be hard for those who are not familiar with it. It's
                <br />
                easy when you let the professionals do the work for you. We will come
                <br />
                to your property & determine the issue & give you a free estimate!
                <br />
              </p>
            </div>
            <span className="border-b-2 border-b-blue-300"></span>
            <div className="flex gap-2 items-center justify-start">
             
            </div>
            <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 items-center justify-center">
            <ul className="text-white flex flex-col items-start justify-center gap-3">
              <li className="flex gap-2 items-center justify-center"> <AiFillLike className="text-blue-300 w-[6] h-[6]"/> Free-Estimation & Cost-Effective Service.</li>
              <li className="flex gap-2 items-center justify-center"><AiFillLike className="text-blue-300 w-[6] h-[6]"/> "Near Me" duct cleaners.</li>
              <li className="flex gap-2 items-center justify-center"><AiFillLike className="text-blue-300 w-[6] h-[6]"/> Eco-friendly cleaning solutions.</li>
              <li className="flex gap-2 items-center justify-center"><AiFillLike className="text-blue-300 w-[6] h-[6]"/>Listen to all inquiries about your HVAC system.</li>
              <li className="flex gap-2 items-center justify-center"><AiFillLike className="text-blue-300 w-[6] h-[6]"/>Provide you with a detailed explanation .</li>
              <li className="flex gap-2 items-center justify-center"><AiFillLike className="text-blue-300 w-[6] h-[6]"/>The best mold removal methods.</li>
            </ul>
          
          </div>
              <button className="text-white text-2xl px-6 py-4 rounded-lg bg-transparent border-2 border-blue-300 mt-4 hover:bg-blue-300">Get A Free Estimate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Choose;
