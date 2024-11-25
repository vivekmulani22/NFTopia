import React from 'react'
import Navbar from './Navbar'
import Page2 from '../Explorpage/Page2'
import Page3 from '../Explorpage/Page3'
import Footer from './Footer'

const Explor = () => {
  return (
    <>
    <div className=" font-montserrat w-full h-full bg-[url('../src/assets/Explorepageimg/Rectangle41.png')] bg-cover">
      <Navbar/>
      <h1 className='text-white flex  px-[10vw] py-[5vw] text-[4vw] font-bold mt-[13vw]'>Explore Artworks</h1>
    </div>
      <Page2/>
      <br />
      <Page3/>
      <br />
      <Footer/>
    </>
  )
}

export default Explor
