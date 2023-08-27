/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import {
  AiFillLike,
  AiFillClockCircle,
  AiFillPhone,
  AiTwotoneMail,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="w-full h-full mt-20"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h2
        className="main-title text-4xl mt-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        CONTACT US
      </h2>
      <div className="flex items-center justify-center mt-20 bg-gray-900">
        <div className=" flex flex-col lg:flex lg:flex-row sm:items-center justify-center items-center  ">
          <div className="flex flex-col gap-6 shadow-2xl p-10 bg-white-50  text-center  bg-slate-900">
            <h3 className="text-3xl font-bold  text-blue-300 ">
              GET IN TOUCH{" "}
            </h3>
            <div
  className="block max-w-md rounded-lg bg-white p-6 dark:bg-transparent">
  <form>
    <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput7"
        placeholder="Name" />
      <label
        htmlFor="exampleInput7"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Name
      </label>
    </div>

    <div className="relative mb-6" data-te-input-wrapper-init>
      <input
        type="email"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput8"
        placeholder="Email address" />
      <label
        htmlFor="exampleInput8"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Email address
      </label>
    </div>

    <div className="relative mb-6" data-te-input-wrapper-init>
      <textarea
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Message"></textarea>
      <label
        htmlFor="exampleFormControlTextarea13"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Message
      </label>
    </div>

    <div
      className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
      <input
        className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
        type="checkbox"
        value=""
        id="exampleCheck10" />
      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer text-blue-300"
        htmlFor="inputId">
        Send me a copy of this message
      </label>
    </div>

    <button
      type="submit"
      className="text-white text-2xl px-12 py-3 rounded-lg bg-transparent border-2 border-blue-300 mt-4 hover:bg-blue-300"
      data-te-ripple-init
      data-te-ripple-color="light">
      Send
    </button>
  </form>
</div>
            <span className="border-b-2 border-b-blue-300"></span>
            <div className="flex gap-2 items-center justify-start"></div>
            <div className="flex  items-start justify-start">
              <button className="text-white text-2xl px-6 py-4 rounded-lg bg-transparent border-2 border-blue-300 mt-4 hover:bg-blue-300">
                contact us
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 shadow-2xl p-20 bg-white-50 text-center">
            <h3 className="text-4xl font-bold  text-blue-300 text mb-14">
              ABOUT US{" "}
            </h3>
            <div className="flex items-start justify-start gap-12">
              <div className="flex flex-col items-center justify-br gap-2 text-gray-300">
                <AiFillLike className="text-6xl text-blue-300" />
                <h5 className="text-2xl">Address</h5>
                <p>
                  8598 W Bellfort Ave <br /> Houston TX 77071
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-gray-300">
                <AiFillClockCircle className="text-6xl text-blue-300" />
                <h5 className="text-2xl">Working Hours</h5>
                <p>
                  Mon - Fri 8 AM - 7 PM <br />
                  Sat - Sun 9 AM - 5 PM
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-12">
              <div className="flex flex-col items-center justify-br gap-2 text-gray-300">
                <AiFillPhone className="text-6xl text-blue-300" />
                <h5 className="text-2xl">Phone No.</h5>
                <p>
                  281-402-9117
                  <br /> 214-799-0731
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-gray-300">
                <AiTwotoneMail className="text-6xl text-blue-300" />
                <h5 className="text-2xl">Email</h5>
                <p>
                  Hossam@email.com <br />
                </p>
              </div>
            </div>

            <span className="border-b-2 border-b-blue-300"></span>
            <div className="flex gap-2 items-center justify-start"></div>
            <div className="flex flex-col items-center justify-center">
              <button className="text-white text-2xl px-6 py-4 rounded-lg bg-transparent border-2 border-blue-300 mt-4 hover:bg-blue-300">
                Get A Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
