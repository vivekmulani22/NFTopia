import React from 'react'
import { assets } from '../assets/assets'


const Page7 = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center font-montserrat'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-semibold'>Explore ArtWorks</h1>
        </div>
        <br />
      </div>
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='w-[25vw] h-[36vw] py-[4vw] rounded-xl flex-col items-center flex font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative'>
                    <img className='' src={assets.Gro} alt="" />
                     <h2 className='py-5 text-center font-bold text-xl' >Connect your wallet</h2>
                     <p className='text-center text-[#00000082] font-semibold px-10'>NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.</p>
                </div>
                <div className='w-[25vw] h-[36vw] py-[4vw] rounded-xl flex-col items-center flex font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative'>
                    <img className='' src={assets.Gro1} alt="" />
                     <h2 className='py-8 text-center font-bold text-xl' >Create Collection</h2>
                     <p className='text-center text-[#00000082] font-semibold px-10'>NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.</p>
                </div>
                <div className='w-[25vw] h-[36vw] py-[4vw] rounded-xl flex-col items-center flex font-montserrat shadow-[rgba(0,0,0,0.35)_0px_5px_15px] relative'>
                    <img className='' src={assets.Gro2} alt="" />
                     <h2 className='py-5 text-center font-bold text-xl' >List Them To Sale</h2>
                     <p className='text-center text-[#00000082] font-semibold px-10'>NFTs are the latest and greatest application of blockchain technology, and marketplace has become theplatform for NFT.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page7
