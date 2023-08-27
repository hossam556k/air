import React from "react";
import Image from "next/image";
import { AiFillCar, AiFillLike } from "react-icons/ai";

const Cleaners = () => {
  return (
    <div className="h-full w-full "  data-aos="fade-up"
    data-aos-duration="3000">
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="main-title text-4xl" data-aos="fade-up"
        data-aos-duration="3000">CLEANERS</h2>
        <div className="flex  flex-col lg:flex lg:flex-row sm:items-center justify-center mb-9">
          <div className="flex flex-col gap-6 shadow-2xl p-12 bg-white-50  text-center mr-[-35px] z-100">
            <h3 className="text-4xl font-bold  text-blue-300 ">
              Professional cleaning service
            </h3>
            <div className="text-justify">
              <p className="text-gray-300 mb-6">
                Improve the air quality inside your house is the key to a
                better,
                <br />
                duct system & fresh air! If your air ducts supply your
                <br />
                house with polluted air, that will cause allergy symptoms &
                illness for those who suffer from
                <br />
                respiratory issues! Thus, air duct cleaning is essential for
                asthma-free & better
                <br />
                indoor air quality!
              </p>

              <p className="text-gray-300">
                Air duct vents cleaning can remove any hidden contaminants
                inside <br />
                your ducts & reduce their build-up in the long run! Improve your
                <br />
                house air quality with Air Duct Vents Cleaning TX professionals
                as

                <br />
                we are always ready to serve your needs & keep your loved ones
                <br />
                always safe and in good health, all that at the cheapest prices
                <br />
                and free estimates. CLEANERS Reliable & Quick
                <br />
              </p>
            </div>
            <span className="border-b-2 border-b-blue-300"></span>
            <div className="flex gap-2 items-center justify-start">
              <AiFillCar className="w-12 h-12 text-blue-300 hover:scale-110 transition-all shadow-2xl" />
              <div className="flex flex-col">
                <h3 className="text-xl text-start text-blue-300  font-semibold">Reliable & Quick</h3>
                <h4 className="text-gray-300">
                  {" "}
                  We guarantee you Quick & highly professional <br />{" "}
                  technicians, reliable customer reviews & tips.
                </h4>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <AiFillLike className="w-12 h-12 text-blue-300  hover:scale-110 transition-all shadow-2xl" />
              <div className="flex flex-col">
                <h3 className="text-xl text-blue-300   text-start font-semibold">
                  100% Guaranteed
                </h3>
                <h4 className="text-gray-300">
                  We guarantee you Quick & highly professional <br />{" "}
                  technicians, reliable customer reviews & tips.
                </h4>
              </div>
            </div>
          </div>
          <Image
            src="/off.webp"
            width={453}
            height={552}
            className="sm:m-6 object-fill ml-5"
            alt="offer"
          />
        </div>
      </div>
    </div>
  );
};

export default Cleaners;
