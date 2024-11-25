import React from "react";
import { assets } from "../assets/assets";
const Page4 = () => {
  return (
    <>
      <div className="w-full h-screen  font-montserrat">
        <h1 className="text-[2vw] py-6 font-semibold text-center">
          Browse By Category
        </h1>
        <br />  
        <div className="w-full h-screen flex flex-col items-center py-[3vw] bg-[url('../src/assets/Home/Homepage2/backimg.png')] bg-center bg-cover">
          
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center text-white">
                <div className="w-[23vw] h-[15vw] relative bg-white rounded-lg">
                  <img src={assets.Group49} alt="" className="absolute top-[-.5vw] w-[20vw] left-2 "/>
                </div>
                  <p className="text-[1.5vw]  py-6">3D Artwork</p>
              </div>
              <div className="text-center text-white">
                <div className="w-[23vw] h-[15vw] relative bg-white rounded-lg flex justify-center items-center">
                  <img src={assets.Group50} alt="" className=" top-[-.5vw] w-[15vw] left-2 "/>
                </div>
                  <p className="text-[1.5vw]  py-6">3D Artwork</p>
              </div>
              <div className="text-center text-white">
                <div className="w-[23vw] h-[15vw] relative bg-white rounded-lg flex justify-center items-center">
                  <img src={assets.Group51} alt="" className="  w-[20vw] left-2 "/>
                </div>
                  <p className="text-[1.5vw]  py-6">3D Artwork</p>
              </div>
              <div className="text-center text-white">
                <div className="w-[23vw] h-[15vw] relative bg-white rounded-lg flex justify-center items-center">
                  <img src={assets.Group52} alt="" className="  w-[15vw] overflow-hidden left-2 "/>
                </div>
                  <p className="text-[1.5vw]  py-6">3D Artwork</p>
              </div>
              <div className="text-center text-white">
                <div className="w-[23vw] h-[15vw] relative bg-white rounded-lg">
                  <img src={assets.Group53} alt="" className="absolute left-[1vw] w-[26vw] "/>
                </div>
                  <p className="text-[1.5vw]  py-6">3D Artwork</p>
              </div>
              <div className="text-center text-white">
                <div className="w-[23vw] h-[15vw] relative bg-white rounded-lg">
                  <img src={assets.Group54} alt="" className="absolute bottom-[.2vw] w-[20vw] left-2 "/>
                </div>
                  <p className="text-[1.5vw]  py-6">3D Artwork</p>
              </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
