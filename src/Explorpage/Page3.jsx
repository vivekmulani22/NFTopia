import React from 'react'
import { assets } from '../assets/assets'
import { assets1 } from '../assets/Explorepageimg/Explore'

const Page3 = () => {
  return (
    <>
    <div className='w-full px-[12vw] py-[5vw] flex itmes-center justify-center'>
        <div className='grid grid-cols-3 gap-11'>
              {/* card1 */}
              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <div className="w-full h-[23vw] flex  flex-col items-center rounded-[.5vw] bg-cover bg-[url('./src/assets/Explorepageimg/OBJECTS.png')] bg-[center_center]">
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
              <div className="w-[23vw] h-[41vw] rounded-xl flex flex-col  font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] px-5 py-3 relative">
                <div className='w-full flex  items-center justify-center' >
                <img className=" w-[20.6vw] h-[23vw]  rounded-xl" src={assets1.Frame7} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group1} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
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
  <div className="w-[23vw] h-[41vw] rounded-xl flex flex-col  font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] px-5 py-3 relative">
                <div className='w-full flex  items-center justify-center' >
                <img className=" w-[20.6vw] h-[23vw]  rounded-xl" src={assets1.OBJECTS1} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group1} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
                  <div className="flex py-4 px-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl px-4 font-medium">Easter Santa Clause</h2>
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
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] bottom-2  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] right-5 w-[20vw] py-2">Place a bid</button>
                </div>
              </div>

                {/* card 4 */}
              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets1.Group164} alt="" />
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

                {/* card 5 */}
                <div className="w-[23vw] h-[41vw] rounded-xl flex flex-col  font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] px-5 py-3 relative">
                <div className='w-full flex  items-center justify-center' >
                <img className=" w-[20.4vw] h-[23vw]  rounded-xl" src={assets1.OBJECTS2} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group1} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
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

              {/* card 6 */}
  <div className="w-[23vw] h-[41vw] rounded-xl flex flex-col  font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] px-5 py-3 relative">
                <div className='w-full flex  items-center justify-center' >
                <img className=" w-[20.6vw] h-[23vw]  rounded-xl" src={assets1.Group2} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group1} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
                  <div className="flex py-4 px-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl px-4 font-medium">Easter Santa Clause</h2>
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
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] bottom-2  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] right-5 w-[20vw] py-2">Place a bid</button>
                </div>
              </div>

                {/* card 7 */}
              <div className="w-[23vw] h-[41vw] rounded-xl font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative px-5 py-3">
                <img className="w-[34vw] h-[23vw]" src={assets1.Group167} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group22} alt="" />
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

                {/* card 8 */}
                <div className="w-[23vw] h-[41vw] rounded-xl flex flex-col  font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] px-5 py-3 relative">
                <div className='w-full flex  items-center justify-center' >
                <img className=" w-[20.4vw] h-[23vw]  rounded-xl" src={assets1.Group168} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group1} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
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

              {/* card 9 */}
  <div className="w-[23vw] h-[41vw] rounded-xl flex flex-col  font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] px-5 py-3 relative">
                <div className='w-full flex  items-center justify-center' >
                <img className=" w-[20.6vw] h-[23vw]  rounded-xl" src={assets1.Frame7} alt="" />
                <img className=" bottom-[36vw] start-[18vw] absolute" src={assets.Group22} alt="" />
                <p className="absolute bottom-[18vw] left-10 shadow-[rgba(0,0,0,0.35)_0px_5px_15px] items-center justify-center flex text-[#0000002E] font-semibold text-[1.5vw]  backdrop-blur-2xl w-[16vw] h-[3vw] ">
                    00 : 00 : 00 : 00
                  </p>
                </div>
                  <div className="flex py-4 px-4 gap-2 items-center text-xl text-[#00000082]">
                  <img className="w-[3vw] h-[3vw] rounded-full" src={assets.Group271} alt="" />
                  <p>@Johnson</p>
                </div>
                <h2 className="text-xl px-4 font-medium">Easter Santa Clause</h2>
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
                <button className="bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] bottom-2  hover:bg-gradient-to-r hover:from-[#21E7B7] hover:to-[#1B63FF] text-white px-[4vw] right-5 w-[20vw] py-2">Place a bid</button>
                </div>
              </div>


        </div>
    </div>
    </>
  )
}

export default Page3