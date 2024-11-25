import React from 'react'
import Navbar from './Navbar'
import Page1 from '../Creators/Page1'
import Footer from './Footer'

const Creators = () => {
  return (
    <>
    <div className={` font-montserrat w-full h-full  bg-[url('../src/assets/Creatorsimg/Rectangle.png')] bg-center bg-cover`}>
      <Navbar/>
      <h1 className='text-[3vw] text-white font-bold  px-[10vw] mt-[20%]'>Creators</h1>
    </div>
    <Page1/>
    <Footer/>
    </>
  )
}

export default Creators
