import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InputPanel from "./components/InputPanel";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { ToastContainer } from "react-toastify";

export default function App() {

  const HomeRef = useRef(null);
  const FeaturesRef = useRef(null);
  const GenerateRef = useRef(null);
  const AboutRef = useRef(null);

  const scrollIntoSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen sm:px-6 sm:py-6 p-3 lg:px-16 w-full bg-gradient-to-br from-black to-blue-900 overflow-x-hidden">
      <Navbar
        onHomeClick={() => scrollIntoSection(HomeRef)}
        onFeaturesClick={() => scrollIntoSection(FeaturesRef)}
        onGenerateClick={() => scrollIntoSection(GenerateRef)}
        onAboutClick={() => scrollIntoSection(AboutRef)}
      />
      <div ref={HomeRef}>
        <Hero />
      </div>
      <div ref={FeaturesRef}>
        <Features />
      </div>
      <div ref={GenerateRef}>
        <InputPanel />
      </div>
      <ToastContainer/>
      <div ref={AboutRef}>
        <Footer />
      </div>
    </div>
  );
}
