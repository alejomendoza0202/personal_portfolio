import React from "react";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`md:hidden fixed h-full w-full bg-black z-[99] transition-all duration-500 ${isOpen ? "top-0 left-0" : "top-[-1000px]"}`} onClick={toggle}>
      <div className="text-white text-4xl font-bold absolute top-5 right-5" onClick={toggle}>
        <ion-icon name="close"></ion-icon>
      </div>
      <ul className="flex flex-col h-full w-full justify-center gap-10 items-center" >
            <li className="text-white font-roboto hover:text-sky-300 transition-all duration-500 cursor-pointer text-3xl">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={toggle}
                className="active:font-4xl"
              >
                Projects
              </Link>
            </li>
            <li className="text-white font-roboto hover:text-red-300 transition-all duration-500 cursor-pointer text-3xl">
              <Link
                to="tech"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={toggle}
              >
                Technologies
              </Link>
            </li>
            <li className="text-white font-roboto hover:text-green-300 transition-all duration-500 cursor-pointer text-3xl">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={toggle}
              >
                About Me
              </Link>
            </li>
            <li className="text-white font-roboto hover:text-gray-300 transition-all duration-500 cursor-pointer text-3xl">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={toggle}
              >
                Contact
              </Link>
            </li>
          </ul>
    </aside>
  );
};

export default Sidebar;
