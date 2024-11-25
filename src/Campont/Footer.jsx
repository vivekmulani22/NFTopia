import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#131927] px-[8vw] flex flex-col  py-[5vw]  ">
        <div className="flex text-white">
          <div className=" w-[50vw] ">
            <img src="./src/assets/Logo.png" alt="" />
            <p className="py-20 ">
              We provide one-stop solutions for all IT items; <br /> your bliss
              is just a click away. Star Tech trusts in quality <br /> client We
              provide one-stop solutions for all IT items; your <br /> bliss is
              just a click away. Star Tech trusts in quality client
            </p>
          </div>

          <div className="flex justify-between gap-[8vw] mr-[5vw]">
            <div>
              <h2 className="font-bold ">Marketplace</h2>
              <br />
              <ul className="flex flex-col gap-5 font-light top-10 text-md   ">
                <li>ProperGuideleilnes</li>
                <li>Buy Products</li>
                <li>Compare Us</li>
                <li>Career</li>
                <li>Build Ecommerce</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold ">Marketplace</h2>
              <br />
              <ul className="flex flex-col gap-5 font-light top-10 text-md   ">
                <li>3D Artworks</li>
                <li>Photography</li>
                <li>Flat Illustration</li>
                <li>Painting</li>
                <li>Intro Videos</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold ">Insight Community</h2>
              <br />
              <ul className="flex flex-col gap-5 font-light top-10 text-md   ">
                <li>Global Partners</li>
                <li>Forum</li>
                <li>virtual world</li>
                <li>Community</li>
                <li>Brand Assets</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="border-t-2 border "></span>
        <p className=" ml-[56vw] text-white py-3">© Copyrighted & Designed by BDevs</p>
      </div>
    </>
  );
};

export default Footer;
