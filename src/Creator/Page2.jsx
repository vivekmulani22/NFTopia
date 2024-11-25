import React from "react";
import { IoAdd } from "react-icons/io5";
import { assets3 } from "../assets/Pagesimg/page";

const Page2 = () => {
  return (
    <div className=" w-full px-[9vw]  py-5">
      <div className="flex shadow-2xl h-[6vw] items-center text-center px-4">
        <span className="border-r-[.1vw] border-[#0000005E] text-left px-8 gap-1 flex flex-col">
          <h4 className="font-lg text-[#0000005E] ">Created</h4>
          <h3 className="text-2xl font-bold">16</h3>
        </span>
        <span className="border-r-[.1vw] border-[#0000005E] text-left px-8 gap-1 flex flex-col">
          <h4 className="font-lg text-[#0000005E] ">Like</h4>
          <h3 className="text-2xl font-bold">879,502</h3>
        </span>
        <span className="border-r-[.1vw] border-[#0000005E] text-left px-8 gap-1 flex flex-col">
          <h4 className="font-lg text-[#0000005E] ">Followrs</h4>
          <h3 className="text-2xl font-bold">5,670</h3>
        </span>
        <span className=" text-left px-8 gap-1 flex flex-col">
          <h4 className="font-lg text-[#0000005E] ">Followed</h4>
          <h3 className="text-2xl font-bold">360</h3>
        </span>
        <div className="py-3">
          <button className=" px-2 py-1 text-[1.5vw] gap-3 bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white w-[15vw] flex justify-center items-center ">
            <IoAdd /> Message to
          </button>
        </div>
        <img className="px-8 " src={assets3.Layer2} alt="" />

        <div className="flex border-[.1vw] border-[#0000005E] p-[0.5vw_1vw] items-center">
          <input className=" outline-none border-none" placeholder="Search"  type="text" name="text" id="" />
            <img  className="w-[1.5vw] h-[1.5vw]" src={assets3.Group202} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
