import React from "react";
import { RxActivityLog } from "react-icons/rx";
import { FaStar } from "react-icons/fa";

const Cards1 = ({ mainimg, img, title, bid, activity, fav, fav2, bgColor, title1, button ,idname,time,buttonimg}) => {

  return (
    <>
      <div className="w-[23vw] h-[38vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative p-5">
        <div className={`${bgColor} w-full h-[20vw] flex  rounded-[.5vw] bg-cover `}>

          <div className="flex gap-2 " >

          <div className="flex  gap-2 ml-3 mt-5 items-center justify-center rounded-md h-9 w-[9vw]">
            {/* <span className="text-white  flex items-center gap-1">{buttonimg}</span> */}
            <img className="w-[8vw]" src={buttonimg} alt="" />
          </div>
            <img className="w-[4vw] h-[4vw] object-cover mt-4 ml-[5vw]" src={fav2} alt="" />
          </div>


          <img
            className="  h-[14vw] p-1 absolute top-20 left-2 flex object-cover"
            src={mainimg}
            alt=""
          />
            <p className="text-white text-md w-[15vw] items-center flex justify-center absolute top-[18vw] left-[4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] backdrop-blur-sm">{time}</p>
        </div>

          <div className="flex gap-3 py-3 items-center">
            <img className=" object-cover w-[3vw] h-[3vw]" src={idname[0]} alt="" /> 
            <span className="text-black text-[#00000082] text-xl">{idname[1]}</span>
          </div>
        <p className="text-black text-xl font-medium">{title}</p>

      
        <div className="flex py-1 justify-between  items-center">
          <div>
      <h2 className="text-[#00000082] text-md font-semibold">{title1}</h2>
          <p className="text-[#1B63FF] font-bold text-md">{bid}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-[1vw] h-[1vw]" src={img} alt="" />
            <p className="text-[#00000082] text-md">{activity}</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] font-bold  text-[1.2vw] text-white w-full py-2 mt-3">{button}</button>
      </div>
    </>
  );
};

export default Cards1;
