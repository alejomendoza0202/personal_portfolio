import Image from "../imgs/Alejandro.png";

const About = () => {
  return (
    <section className="mt-10" id="about">
      <main className="max-w-screen-lg mx-auto h-auto px-5 xl:px-0">
        <p className="text-gray-600 font-roboto italic">&lt;section&gt;</p>

        {/* Title */}
        <h2 className="text-white font-roboto font-bold text-3xl text-center">
          About Me
        </h2>
        {/* Info */}
        <div className="h-auto w-full flex flex-col mt-5 md:flex-row md:items-center">
          {/* Image */}
          <div className="flex justify-center h-[300px] w-4/5 mx-auto md:w-1/2 md:h-[300px] md:justify-start">
            <img
              src={Image}
              alt="Alejandro Mendoza photo"
              className="w-[300px] md:h-full object-cover rounded-[50px]"
            />
          </div>
          {/* Text */}
          <div className="px-5 md:w-1/2">
            <p className="text-gray-600 font-roboto italic">&lt;p&gt;</p>
            <p className="text-white my-3 font-roboto">
              Final year student of Systems Engineering at Universidad
              Industrial de Santander with 4+ months of professional experience
              in web design and development. Focused on frontend development,
              using React.js as the main technology. I am a curious, creative,
              fast learner, adaptive, and collaborative professional.
            </p>
            <p className="text-gray-600 font-roboto italic">&lt;/p&gt;</p>
          </div>
        </div>
        <p className="text-gray-600 font-roboto italic">&lt;/section&gt;</p>
      </main>
    </section>
  );
};

export default About;
