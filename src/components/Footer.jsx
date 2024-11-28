import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white py-6 mt-16 ">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Menu Section */}
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              Menu
            </a>
            <a href="#" className="hover:text-gray-300">
              Menu
            </a>
            <a href="#" className="hover:text-gray-300">
              Menu
            </a>
            <a href="#" className="hover:text-gray-300">
              Menu
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-gray-300 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-4 border-t border-gray-700 pt-4 text-sm text-gray-400 flex justify-between">
          <span>© 2023 Equence</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
