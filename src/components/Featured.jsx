import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full mx-auto"  data-aos="fade-up"
    data-aos-duration="3000">
      <div className="flex items-center justify-center flex-col  lg:flex lg:flex-row  mt-[20px] w-full">
        <div data-aos="fade-left" data-aos-duration="500"  className=" flex gap-6 px-8 py-6 bg-green-400">
        <Image src="/express-delivery.png" width={65} height={65} alt="car" className="object-fill "/>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-[#fff] font-bold">Free Estimate</h1>
            <p className="text-gray-200">
              We show up at your place to offer you a free estimate <br />&
              inspection. No extra fees or charges !
            </p>
          </div>
        </div>
        <div    data-aos="fade-right"
        data-aos-duration="500" className="flex gap-6 px-6 py-6 bg-blue-400 ">
          <Image src="/discount.png" width={65} height={65} alt="free" className="object-fill "/>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-[#fff] font-bold">Same Day Service</h1>
            <p className="text-gray-200">
              We value your time & business, so we guarantee you an <br />{" "}
              exceptional same day service .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
