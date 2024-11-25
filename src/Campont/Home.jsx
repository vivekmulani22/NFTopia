import React from "react";
import Navbar from "./Navbar";
import Hero from "../Homepages/Hero";
import Page2 from "../Homepages/Page2";
import Page3 from "../Homepages/Page3";
import Page4 from "../Homepages/Page4";
import Page5 from "../Homepages/Page5";
import Page6 from "../Homepages/Page6";
import Page7 from "../Homepages/Page7";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[50%] bg-[url('./src/assets/Home/Frame1.png')] bg-cover w-full h-screen">
        <Navbar />
        <Hero />
      </div>
      <Page2 />
      <Page3 />
      <Page4 />
      <br /> <br /> <br /> <br /> <br />
      <Page5/>
      <Page6/>
      <br />
      <Page7/>
      <br /><br /><br />
      <Footer/>
    </>
  );
};

export default Home;
