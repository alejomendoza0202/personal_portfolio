import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-auto md:h-[300px] flex-col my-5">
      <div className="max-w-screen-lg mx-auto px-5 xl:px-0 md:h-full md:flex md:flex-col justify-between">
        <p className="text-gray-600 font-roboto italic">&lt;footer&gt;</p>
        {/* Container */}
        <div className="w-full flex flex-col mt-10 md:flex-row">
          {/* Name */}
          <div className="w-full flex justify-center md:w-1/3">
            <h2 className="w-[200px] text-3xl font-roboto text-white text-center font-bold">
              Alejandro Mendoza
            </h2>
          </div>
          {/* Contact */}
          <div className="w-full flex flex-col justify-center items-center mt-5 md:w-1/3 md:mt-0 md:items-start">
            <h2 className="text-2xl font-roboto text-white">Contact</h2>
            <p className="text-[14px] font-roboto text-white mt-2">
              mendozalopezfredyalejandro@gmail.com
            </p>
          </div>
          {/* Social */}
          <div className="flex mt-10 gap-5 justify-center md:w-1/3 md:mt-0">
            <a href="https://www.linkedin.com/in/fredy-alejandro-mendoza-lopez-9319b6187/"  target="_blank" className="flex items-center">
              <div className="text-white flex items-center text-[60px]">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </a>
            <a href="https://github.com/alejomendoza0202" target="_blank" className="flex items-center">
              <div className="text-white flex items-center text-[60px]">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </a>
          </div>
        </div>
        <p className="text-gray-600 font-roboto italic">&lt;/footer&gt;</p>
      </div>
    </footer>
  );
};

export default Footer;
