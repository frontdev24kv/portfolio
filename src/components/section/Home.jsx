import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
     className="min-h-screen flex items-center justify-center py-20 flex-col"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Hi, I'm Volodymyr!
        </h1>
      </div>
      <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto px-10">
        I am a full-stack developer who loves building clean, scalable web
        applications. My goal is to create solutions that offer both exceptional
        performance and a great user experience.
      </p>
      <div className="flex justify-center space-x-4">
      <Link to="projects" smooth={true} duration={500} offset={0}
      className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
      >View projects</Link>
       
       <Link to="contact" smooth={true} duration={500} offset={0}
          className="border border-blue-500/50 text-blue-500 rounded py-3 px-6 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
        hover:bg-blue-500/10"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Home;
