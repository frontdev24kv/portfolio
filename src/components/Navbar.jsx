import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={0}
            className="font-mono text-xl font-bold text-white"
          >
            Front<span className="text-blue-500">dev24</span>
            <span className="text-yellow-500">kv</span>
          </Link>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={0}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={0}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={0}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Ptojects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={0}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
