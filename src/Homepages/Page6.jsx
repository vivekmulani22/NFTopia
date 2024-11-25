import React from "react";
import { assets } from "../assets/assets";

const Page6 = () => {
  return (
    <>
      <div className="w-full  font-montserrat">
        <div className="w-full flex flex-col items-center justify-center  bg-[#0000000A] px-[4vw] py-[4vw] gap-4">
          <h1 className=" text-2xl font-medium">Explore Artworks</h1>
          <div className="w-full flex px-[0vw] py-[4vw] items-center justify-center">
            <div className="grid grid-cols-4 gap-[3vw] ">

              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <div className="w-full h-[23vw] flex  flex-col items-center rounded-[.5vw] bg-cover bg-[url('./src/assets/Home/Homepage2/card2.png')] bg-[center_center]">
                  <div className="flex justify-between items-center gap-[8vw] py-[1vw]">
                    <img src={assets.Group37} alt="" />
                    <img src={assets.Group22} alt="" />
                  </div>
                  <p className="absolute bottom-[18vw] left-[1.vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
                <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Ellipse12} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Startup Concept</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>
              </div>



              {/* card2 */}
              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative">
                <img className=" w-[23vw] h-[24vw] rounded-xl" src={assets.Card1} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group1} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                  <div className="flex py-4 px-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group261} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl px-4 font-medium">Ornament Illustration</h2>
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                <div className="flex justify-center">
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] right-5 w-[20vw] py-2">Place a bid</button>
                </div>
              </div>



{/* card3 */}
              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <div>
                <img className="w-[34vw] h-[23vw] " src={assets.Card3} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group22} alt="" />
                <p className="absolute bottom-[18vw] left-[3.4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
                <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Easter Santa Clause</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>

              </div>

              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets.Card4} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group22} alt="" />
                <p className="absolute bottom-[18vw] left-[3.4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Easter Santa Clause</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>

              </div>

              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets.Card5} alt="" />
                <p className="absolute bottom-[18vw] left-[3.4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Ellipse12} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Startup Concept</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>

              </div>

              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets.Card6} alt="" />
                <p className="absolute bottom-[18vw] left-[3.4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Ellipse12} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Startup Concept</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>

              </div>

              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets.Card7} alt="" />
                <p className="absolute bottom-[18vw] left-[3.4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                  <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Easter Santa Clause</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>

              </div>
              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets.Card8} alt="" />
                <p className="absolute bottom-[18vw] left-[3.4vw] shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                  <div className="flex py-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl font-medium">Easter Santa Clause</h2>
                <div className="flex justify-between items-center py-2">
                    <div className="flex flex-col">
                    <p className="text-[#00000082] font-semibold">Current Bid</p>
                    <p className="text-[#00000082] text-[#1B63FF] font-semibold ">83.46ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.Layer2} alt="" />
                        <p className="text-[#00000082] font-semibold">Activity</p>
                    </div>
                </div>
                
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7]  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] w-[20vw] py-2">Place a bid</button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
