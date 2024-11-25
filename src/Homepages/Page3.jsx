import React from "react";
import Cards1 from "../Cards/Cards1";
import { Carddata } from "../assets/assets";

const Page3 = () => {
  return (
    <>
      <div className="w-full py-[5vw] font-montserrat">
        <div className="w-full flex flex-col items-center bg-[#0000000A] px-[9vw] py-[4vw] gap-4">
        <h1 className=" text-2xl font-medium">Live Bids</h1>
          <div className="w-full flex px-[9vw] py-[4vw] items-center justify-center">
            <div className="flex gap-4 ">
                {Carddata.map((item,index)=>{
                    return <Cards1 key={index} mainimg={item.mainimg} img={item.img} title={item.title} bid={item.bid} activity={item.activity}  fav2={item.fav2} title1={item.title1} button={item.button} fav3={item.fav3} idname={item.idname} time={item.time} buttonimg={item.buttonimg} bgColor ={item.bgColor} />
                })}
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Page3;
