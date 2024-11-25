import React from "react";
import Navbar from "../Campont/Navbar";
import Page2 from "../Creator/Page2";
import Page3 from "../Creator/Page3";
import Footer from "../Campont/Footer"
import { assets3 } from "../assets/Pagesimg/page";

const Creator = () => {
  return (
    <>
      <div className="w-full font-montserrat h-screen bg-cover bg-center bg-[url('../src/assets/Pagesimg/Rectangle4.png')]">
        <Navbar />
        <h1 className="text-[3.5vw] px-[10vw] font-bold flex mt-[12vw]  text-white">
          Profile
        </h1>
        <br /> <br />
        <br />
        <div className="w-full flex px-[10vw] py-[5vw]">
          <div className="w-[60vw] h-[29vw] px-4 flex items-center  bg-white shadow-xl ">
            <div>
              <img className="w-[22vw]" src={assets3.Rectangle61} alt="" />
            </div>

            <div className="px-5">
              <div className="gap-1 flex flex-col">
                <span className="flex gap-4 text-[2vw] font-bold align-middle items-center drop-shadow-xl ">
                  Stive Machman{" "}
                  <img
                    className=" flex w-4 h-4"
                    src={assets3.Group191}
                    alt=""
                  />
                </span>
                <p className="text-lg font-semibold text-[#2A79D7]">
                  @Stive.Lio
                </p>
              </div>
              <br />
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Nunc vulputate libero et velit interdum, ac aliquet odio{" "}
                <br /> mattis. Lorem ipsum dolor sit amet, consectetur
                adipiscing <br /> elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis.
              </p>
              <br />
              <div className=" items-center flex gap-10">
                <div className="flex gap-3">
                  <img className="w-5" src={assets3.Vector} alt="" />
                  <h4 className="font-semibold">Bran Street New York, USA</h4>
                </div>
                <div className="flex gap-3">
                  <img className="w-6" src={assets3.Group192} alt="" />
                  <h4 className="font-semibold text-[#2A79D7]">
                    bit.ly/yte89k6
                  </h4>
                </div>
              </div>
              <br />
              <div className="flex gap-3">
                <img className="w-6" src={assets3.Group193} alt="" />
                <h4 className="font-semibold ">Joined March 2010</h4>
              </div>
              <div className="py-3">
                <button className=" px-2  py-2 gap-3 bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white w-[20vw] flex justify-center items-center ">
                  <img src={assets3.Vector1} alt="" /> Message to
                </button>
              </div>
            </div>
          </div>
        </div>
      <Page2/>
      <Page3/>
      <Footer/>
      </div>
      
    </>
  );
};

export default Creator;
