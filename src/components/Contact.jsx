import React from "react";
import Image from "../imgs/contact.svg";

const Contact = () => {
  return (
    <section className="w-full h-auto mt-10" id="contact">
      <main className="max-w-screen-lg mx-auto px-5 xl:px-0 ">
        <p className="text-gray-600 font-roboto italic">&lt;section&gt;</p>
        <h2 className="text-white font-roboto text-center text-3xl font-bold">
          Let's get in touch!
        </h2>
        {/* Info */}
        <div className="h-auto w-full flex flex-col mt-5 md:flex-row md:items-center">
          {/* Text */}
          <div className="px-5 md:w-1/2">
            <p className="text-white my-3 font-roboto">
              <span className="text-gray-600 font-roboto italic">&lt;p&gt;</span> <br/> I get
              excited about opportunities where I'm able to develop websites. <br/>
              <span className="text-gray-600 font-roboto italic">&lt;/p&gt;</span>
              <br />
              <span className="text-gray-600 font-roboto italic">&lt;p&gt;</span><br/>
              You can contact me by email: mendozalopezfredyalejandro@gmail.com <br/>
              <span className="text-gray-600 font-roboto italic">&lt;/p&gt;</span>
            </p>
          </div>
          {/* Image */}
          <div className="flex justify-center h-[300px] w-4/5 mx-auto md:w-1/2 md:h-[300px] md:justify-end">
            <img
              src={Image}
              alt="Alejandro Mendoza photo"
              className="w-[200px] object-contain md:h-full md:w-[300px]"
            />
          </div>
        </div>
        <p className="text-gray-600 font-roboto italic">&lt;/section&gt;</p>
      </main>
    </section>
  );
};

export default Contact;
