import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection  />
      <ProjectsSection />
      <Technologies />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
