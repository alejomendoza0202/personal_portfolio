import { useState } from "react";

import img1 from "../imgs/hoower.png";
import img2 from "../imgs/dusan.png";
import img3 from "../imgs/latino.png";

export const ProjectsSection = () => {
  const [isHoower, setIsHoower] = useState(false);
  const [isDusan, setIsDusan] = useState(false);
  const [isLatino, setIsLatino] = useState(false);

  return (
    <section className="w-full h-auto " id="projects">
      <main className="max-w-screen-lg mx-auto px-5 xl:px-0">
        <p className="text-gray-600 font-roboto italic">&lt;section&gt;</p>
        <h2 className="text-white font-roboto text-center font-bold text-3xl">
          Projects
        </h2>

        {/* Projects container */}
        <div className="w-full flex flex-col p-5 h-auto gap-2 md:flex-row md:mt-10">
          {/* Projects */}
          {/* Hoower */}
          <div
            onMouseEnter={() => setIsHoower(true)}
            onMouseLeave={() => setIsHoower(false)}
            className="w-full h-[90vw] md:h-[300px] bg-black border-2 border-white flex flex-col justify-center gap-5 items-center md:w-1/3 hover:bg-gray-900 transition-all cursor-pointer hover:rounded-xl duration-500 relative"
          >
            <img src={img1} alt="Hoower Cajicá Project" className="w-[40%] object-fit" />
            <div
              className={`w-3/4 flex flex-col items-center gap-3 ${
                isHoower ? "block" : "hidden"
              }`}
            >
              <p className="text-white text-center font-roboto">
                <span className="font-bold">Technologies:</span> MongoDB,
                Express.js, Node.js, React.js
              </p>
              <a href="https://hoowercajica.com/" target="_blank">
                <button className=" font-roboto text-white px-5 py-2 bg-sky-500 rounded-xl hover:bg-sky-400 transition-all duration-300 flex">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
          {/* Dusan */}
          <div
            onMouseEnter={() => setIsDusan(true)}
            onMouseLeave={() => setIsDusan(false)}
            className="w-full h-[90vw] md:h-[300px] bg-black border-2 border-white flex flex-col justify-center gap-5 items-center md:w-1/3 hover:bg-gray-900 transition-all cursor-pointer hover:rounded-xl duration-500 relative"
          >
            <img src={img2} alt="Dusan Project" className="w-[40%] object-fit" />
            <div
              className={`w-3/4 flex flex-col items-center gap-3 ${
                isDusan ? "block" : "hidden"
              }`}
            >
              <p className="text-white text-center font-roboto">
                <span className="font-bold">Technologies:</span>WordPress, Elementor
              </p>
              <a href="https://dusancorp.com/" target="_blank">
                <button className=" font-roboto text-white px-5 py-2 bg-sky-500 rounded-xl hover:bg-sky-400 transition-all duration-300 flex">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
          {/* Latino */}
          <div
            onMouseEnter={() => setIsLatino(true)}
            onMouseLeave={() => setIsLatino(false)}
            className="w-full h-[90vw] md:h-[300px] bg-black border-2 border-white flex flex-col justify-center gap-5 items-center md:w-1/3 hover:bg-gray-900 transition-all cursor-pointer hover:rounded-xl duration-500 relative"
          >
            <img src={img3} alt="Latino Research Project" className="w-[40%] object-fit" />
            <div
              className={`w-3/4 flex flex-col items-center gap-3 ${
                isLatino ? "block" : "hidden"
              }`}
            >
              <p className="text-white text-center font-roboto">
                <span className="font-bold">Technologies:</span> WordPress, Elementor
              </p>
              <a href="https://latinoresearch.us/" target="_blank">
                <button className=" font-roboto text-white px-5 py-2 bg-sky-500 rounded-xl hover:bg-sky-400 transition-all duration-300 flex">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
        </div>
        <p className="text-gray-600 font-roboto italic">&lt;/section&gt;</p>
      </main>
    </section>
  );
};
