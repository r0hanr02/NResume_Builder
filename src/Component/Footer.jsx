// src/components/Footer.jsx
// import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import { GrResume } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <GrResume size={25}/>
          <h2 className="text-xl font-semibold">Digital Resume Builder</h2>
          <p className="text-gray-400 text-sm">Build and download professional resumes with ease.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 mt-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
            <li><Link to="/editor" className="hover:text-gray-400">Resume Editor</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@nresume.com</p>
          <p className="text-gray-400 text-sm">Phone: +1 (123) 456-7890</p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-blue-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-blue-300" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Digital Resume Builder. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-gray-400 mx-2">Privacy Policy</a> | 
          <a href="#" className="hover:text-gray-400 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
