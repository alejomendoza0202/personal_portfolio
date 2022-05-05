import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ toggle }) => {
  //------------------ Hooks ------------------

  // useState

  return (
    <nav className="w-full h-[45px] md:h-[56px] px-5 py-3 fixed top-0 left-0 z-[10] backdrop-blur-md">
      {/* Main Container */}
      <div className="max-w-screen-lg h-full mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="w-4/5 md:w-1/4 flex align-center">
          <h2 className=" text-white font-roboto md:text-xl font-bold text-center">
            Alejandro Mendoza
          </h2>
        </div>
        {/* Center */}
        <div className="hidden w-1/2 h-full  align-center md:flex">
          <ul className="flex w-full justify-center gap-5 items-center">
            <li className="text-white font-roboto hover:text-sky-300 transition-all duration-500 cursor-pointer focus:text-sky-300">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Projects
              </Link>
            </li>
            <li className="text-white font-roboto hover:text-red-300 transition-all duration-500 cursor-pointer">
              <Link
                to="tech"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Technologies
              </Link>
            </li>
            <li className="text-white font-roboto hover:text-green-300 transition-all duration-500 cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                About Me
              </Link>
            </li>
            <li className="text-white font-roboto hover:text-gray-300 transition-all duration-500 cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="hidden md:flex w-1/4  gap-4 justify-end text-2xl items-center">
          <a
            href="https://www.linkedin.com/in/fredy-alejandro-mendoza-lopez-9319b6187/"
            target="_blank"
            className="flex items-center"
          >
            <div className="text-white flex items-center">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </a>
          <a
            href="https://github.com/alejomendoza0202"
            target="_blank"
            className="flex items-center"
          >
            <div className="text-white flex items-center">
              <ion-icon name="logo-github"></ion-icon>
            </div>
          </a>
        </div>
        {/* Right Mobile */}
        <div className="w-1/5 md:hidden cursor-pointer" onClick={toggle}>
          <div className="text-white flex justify-end text-3xl items-center">
            <ion-icon name="menu"></ion-icon>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
