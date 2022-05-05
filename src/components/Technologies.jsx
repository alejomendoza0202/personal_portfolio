import React from "react";

const Technologies = () => {
  const tech = [
    {
      title: "React.js",
      href: "https://assets.website-files.com/60d251a34163cf29e1220806/610ccf8b080e59622903db0e_react_logo.png",
      alt: "React Logo",
    },
    {
      title: "JavaScript",
      href: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      alt: "JavaScript logo",
    },
    {
      title: "HTML5",
      href: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
      alt: "HTML5 logo",
    },
    {
      title: "CSS3",
      href: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      alt: "CSS3 Logo",
    },
    {
      title: "Tailwind CSS",
      href: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      alt: "Tailwind CSS Logo",
    },
    {
      title: "Tensorflow",
      href: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
      alt: "Tensorflow logo",
    },
  ];
  return (
    <section className="w-full h-auto mt-10" id="tech">
      <main className="max-w-screen-lg mx-auto px-5 xl:px-0">
      <p className="text-gray-600 font-roboto italic">&lt;section&gt;</p>

          <h2 className="text-3xl font-roboto text-white text-center font-bold">
            Technologies
          </h2>
          <div className="flex flex-wrap items-center md:flex-row md:gap-5 mt-10 md:flex-nowrap">
            {tech.map((item, index) => (
              // Card Container
              <div key={index} className="h-auto w-1/2 flex flex-col items-center my-5 md:w-1/6">
                {/* Title */}
                <div className="w-full h-auto flex justify-center mb-5">
                  <span className="text-white font-roboto">{item.title}</span>
                </div>
                {/* Image */}
                <div className="w-full h-[200px] flex justify-center md:h-[100px] hover:animate-pulse">
                  <img src={item.href} alt={item.alt} className='h-full w-full object-contain md:w-[60%]' />
                </div>
              </div>
            ))}
          </div>
        <p className="text-gray-600 font-roboto italic">&lt;/section&gt;</p>

      </main>
    </section>
  );
};

export default Technologies;
