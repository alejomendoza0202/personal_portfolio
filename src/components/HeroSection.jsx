import Logo from "../imgs/react.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <header className="h-[400px] md:mb-10  w-full overflow-hidden mt-[45px]">
      <div className="max-w-screen-lg h-full mx-auto relative">
        <div className="p-5 xl:p-0 w-full h-full flex flex-col justify-evenly bg-black/50 md:w-1/2">
          <h1 className="text-center md:text-left text-white text-3xl font-roboto">
            Hi :), I'm Alejandro Mendoza, web developer
          </h1>
          {/* Buttons */}
          <div className="flex justify-center w-full gap-10 md:justify-start">
            <a href="./CV_alejandroMendoza" target="_blank">
              <button className="font-roboto text-white px-5 py-2 bg-sky-500 rounded-xl hover:bg-sky-400 transition-all duration-300 flex">
                See my CV
                <div className="hidden md:flex h-full items-center ml-2 text-xl font-bold">
                  <ion-icon name="log-out-outline"></ion-icon>
                </div>
              </button>
            </a>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
              className="font-roboto text-white px-5 py-2 bg-sky-500 rounded-xl hover:bg-sky-400 transition-all duration-300 cursor-pointer text-center"
            >
              See my projects
            </Link>
          </div>
        </div>
        {/* React spinning */}
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 md:top-0 md:right-0 md:-translate-x-0 md:translate-y-0 md:h-[350px] z-[-1]">
          <img
            src={Logo}
            alt=""
            className="h-full object-fit animate-spin-slow"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
