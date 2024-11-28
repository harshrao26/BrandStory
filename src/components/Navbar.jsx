import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" flex items-center fixed w-full z-50 justify-between px-10  bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
         <img src={logo} alt="" className="h-24" />
     
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        {["Home", "Product", "Solutions", "Company", "Resources"].map(
          (item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
            >
              {item}
            </li>
          )
        )}
        <li>
          <button className="bg-[#5b6bd5] text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </li>
      </ul>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-3xl text-gray-700 focus:outline-none"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-gray-700 f">
          {["Home", "Product", "Solutions", "Company", "Resources"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </li>
            )
          )}
          <li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
