// import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const links = [
  //   { link: "/", text: "Home" },
  //   { link: "/Explor", text: "Explor" },
  //   { link: "/Creators", text: "Creators" },
  //   { link: "/Pages", text: "Pages" },
  // ]

  return (
    <nav className="px-[7.5vw] py-5 font-serif items-center">
      <div className="flex items-center justify-between  px-7 py-3 rounded-2xl shadow-[0px_0px_10px_rgba(227,228,237,0.37)] rounded-[0px 0px 30px]  backdrop-blur-2xl">
        <img
          className="w-[6vw] cursor-pointer"
          src="./src/assets/Logo.png"
          alt=""
        />
        <ul className="flex gap-6 text-white">
          <li className="">
            <Link
              to="/"
              className={` hover:text-[#21E7B7]  flex ${
                activeLink === "/Home" ? " text-[#21E7B7] w-[5.5vw] h-[2.4vw] rounded-md items-center flex justify-center shadow-[0px_0px_5px_rgba(227,228,237,0.37)]  backdrop-blur-[20vw] " : ""}`}
              onClick={() => handleLinkClick("/Home")}
            >
              Home
            </Link> 
          </li>
          <li className="">
            <Link
              to="/Explor"
              className={`hover:text-[#21E7B7] ${
                activeLink === "/Explor" ? "text-[#21E7B7] w-[5.5vw] h-[2.4vw] rounded-md items-center flex justify-center shadow-[0px_0px_5px_rgba(227,228,237,0.37)]  backdrop-blur-[20vw]" : ""
              }`}
              onClick={() => handleLinkClick("/Explor")}
            >
              Explor
            </Link>
          </li>
          <li className="">
            <Link
              to="/Creators"
              onClick={() => handleLinkClick("/Creators")}
              className={`hover:text-[#21E7B7] ${
                activeLink === "/Creators" ? "text-[#21E7B7] w-[5.5vw] h-[2.4vw] rounded-md items-center flex justify-center shadow-[0px_0px_5px_rgba(227,228,237,0.37)]  backdrop-blur-[20vw]" : ""
              }`}
            >
              Creators
            </Link>
          </li>
          
          <li className="relative group">
            <button
              className={`hover:text-[#21E7B7] ${
                activeLink === "/Pages" ? "text-[#21E7B7] w-[5.5vw] h-[2.4vw] rounded-md items-center flex justify-center shadow-[0px_0px_5px_rgba(227,228,237,0.37)] backdrop-blur-[20vw]" : ""
              }`}
              onClick={() => handleLinkClick("/Pages")}
            >
              Pages
            </button>
            <ul className="absolute hidden text-center group-hover:block shadow-[0px_0px_5px_rgba(227,228,237,0.37)]  backdrop-blur-[20vw]   rounded-md items-center  divide-y w-[7vw] py-2 mt-1">
              <li>
                <Link
                  to="/Creator"
                  className="block px-4 py-2 text-white hover:text-[#21E7B7]"
                  onClick={() => handleLinkClick("/Page1")}
                >
                  Creators
                </Link>
              </li>
              <li>
                <Link
                  to="/Art"
                  className="block px-4 py-2 text-white hover:text-[#21E7B7]"
                  onClick={() => handleLinkClick("/Page2")}
                >
                  Art
                </Link>
              </li>
              <li>
                <Link to="/Faqs" className="block px-4 py-2 text-white hover:text-[#21E7B7]" onClick={() => handleLinkClick("/Page3")}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link to="/Register" className="block px-4 py-2 text-white hover:text-[#21E7B7]" onClick={() => handleLinkClick("/Page3")}>
                  Register
                </Link>
              </li>
              <li>
                <Link to="/Login" className="block px-4 py-2 text-white hover:text-[#21E7B7]" onClick={() => handleLinkClick("/Page3")}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Terms" className="block px-4 py-2 text-white hover:text-[#21E7B7]" onClick={() => handleLinkClick("/Page3")}>
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/Error" className="block px-4 py-2 text-white hover:text-[#21E7B7]" onClick={() => handleLinkClick("/Page3")}>
                  Error
                </Link>
              </li>
            </ul>
          </li>
         
          <li className="">
            <Link
              to="/Blog"
              onClick={() => handleLinkClick("/Blog")}
              className={`hover:text-[#21E7B7] ${
                activeLink === "/Blog" ? "text-[#21E7B7] w-[5.5vw] h-[2.4vw] rounded-md items-center flex justify-center shadow-[0px_0px_5px_rgba(227,228,237,0.37)]  backdrop-blur-[20vw]" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li className="">
            <Link
              to="/Contact"
              onClick={() => handleLinkClick("/Contact")}
              className={`hover:text-[#21E7B7] ${
                activeLink === "/Contact" ? "text-[#21E7B7] w-[5.5vw] h-[2.4vw] rounded-md items-center flex justify-center shadow-[0px_0px_5px_rgba(227,228,237,0.37)]  backdrop-blur-[20vw]" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
