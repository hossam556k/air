"use client"
import Image from "next/image";
import React, { useState } from "react";
import Faq from "./Faq";

const Tips = () => {
  const [open, setOpen] = useState(false);
  const toggle= (index)=>{
    if(open === index) {
      return setOpen(null);
    }
    setOpen(index);

  }
  const data = [
    {
      title: "How often should I have my duct cleaned ?",
      dec: "Your house comfort is significant can affect your indoor quality. The harmful particles presence as dust, mold spores, pollen, & insects can cause illness reactions even for those healthiest people.",
      bt: "Read More >>>",
    },
    {
      title: "How Long Does It Take To Clean Air Ducts?",
      dec: "Lots of people wonde How long does duct cleaning take?. This is not a silly question! Taking care of your air ducts is essential to ensure the longevity of your HAVC system. Most heating & cooling systems have from ten to fifteen vents that need regular cleaning If you have a professional team of air duct cleaners as Air Duct Vents Cleaning working on your system in Houston Dallas Texas you can expect the entire cleaning process within two to four hours.This is just an estimate of how long it will take to get your ductwork cleaned. The actual time will depend on the number of vents you have, the available workers, & how the vents are dirty. For example, it will take a bit longer to have them in tip-top shape if you have a very dirty duct",
      bt: "Read More >>>",
    },
    {
      title: "Does Air Duct Cleaning Make a Mess ?",
      dec: "Lots of people wonde How long does duct cleaning take?. This is not a silly question! Taking care of your air ducts is essential to ensure the longevity of your HAVC system. Most heating & cooling systems have from ten to fifteen vents that need regular cleaning If you have a professional team of air duct cleaners as Air Duct Vents Cleaning working on your system in Houston Dallas Texas you can expect the entire cleaning process within two to four hours.This is just an estimate of how long it will take to get your ductwork cleaned. The actual time will depend on the number of vents you have, the available workers, & how the vents are dirty. For example, it will take a bit longer to have them in tip-top shape if you have a very dirty duct",

      bt: "Read More >>>",
    },
    {
      title: "How Much Does Air Duct Cleaning Cost ?",
      dec: "Lots of people wonde How long does duct cleaning take?. This is not a silly question! Taking care of your air ducts is essential to ensure the longevity of your HAVC system. Most heating & cooling systems have from ten to fifteen vents that need regular cleaning If you have a professional team of air duct cleaners as Air Duct Vents Cleaning working on your system in Houston Dallas Texas you can expect the entire cleaning process within two to four hours.This is just an estimate of how long it will take to get your ductwork cleaned. The actual time will depend on the number of vents you have, the available workers, & how the vents are dirty. For example, it will take a bit longer to have them in tip-top shape if you have a very dirty duct",
      bt: "Read More >>>",
    },
  ];
  return (
    <div className="h-full w-full"  data-aos="fade-up"
    data-aos-duration="3000">
      <div className="flex flex-col items-center justify-center mt-20">
        <h2
          className="main-title text-4xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          TRUSTWORTHY TIPS
        </h2>
        <div className="flex flex-col lg:flex lg:flex-row justify-center mb-9 mx-6">
          <div className="flex flex-col gap-2  p-12 bg-blue-300 text-center relative shadow-xl  mr-[-28px]">
            <h2 className="text-4xl font-semibold text-black">
              (FAQS)
            </h2>
            {data.map((data, index) => {
              // eslint-disable-next-line react/jsx-key
              return <Faq key={index} open={index===open} title={data.title} dec={data.dec} toggle={()=>toggle(index)} bt={data.bt}/>;
            })}
          </div>
          
          <Image
            src="/air2.jpg"
            width={500}
            height={552}
            className="sm:m-6  ml-[-2px] rounded-xl hidden xl:flex object-cover"
            alt="mold"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Tips;
