import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
    <div className='w-full h-screen flex mr-[10vw] mt-[-5vw]'>

     <div className=" w-full flex px-[9vw] py-[7vw] font-montserrat">
          <div className="flex flex-col gap-[1.9vw] mt-10">
            <h1 className="text-white  text-[3.5vw] font-bold ">
              Discover Digital Artworks <br /> & Collect{" "}
              <span className="text-[#21E7B7]">Best NFTs</span>{" "}
            </h1>
            <p className="text-gray-400 text-[1.2vw]">
              There Is Eno Ugh Digital Artworks Available Online To Help You{" "}
              <br /> Put Together Crypto Currency website.
            </p>
            <div className="flex gap-[2vw] items-center">
              <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] text-white px-[2.9vw] py-[0.4vw]  text-[1.2vw]">
                Explore
              </button>
              <button className="text-white text-[1.2vw] font-bold flex gap-2 align-middle">
                <FaRegCirclePlay className=" text-[1.7vw]" /> Watch Video
              </button>
            </div>

            <div className=" text-white w-[20vw] ">
              <div className=" grid grid-cols-2  items-center">
                <div className=" flex flex-col">
                  <h2 className="text-[2vw] font-bold">21k+</h2>
                  <p className="font-thin text-[1vw]">Digital Artworks</p>
                </div>
                <div className=" flex flex-col">
                  <h2 className="text-[2vw] font-bold">6k+</h2>
                  <p className="font-thin text-[1vw]">Global Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
          <img className='mr-[10vw]' src="./src/assets/Home/character_01.png" alt="" />
    </div>
    </>
  )
}

export default Hero
