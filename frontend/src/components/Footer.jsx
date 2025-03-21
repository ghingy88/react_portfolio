import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4">
              <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/About" className="text-gray-400 hover:text-white">About</NavLink></li>
              <li><NavLink to="/Projects" className="text-gray-400 hover:text-white">Projects</NavLink></li>
              <li><NavLink to="/Contact" className="text-gray-400 hover:text-white">Contact</NavLink></li>
              <li><NavLink to="/Contact" className="text-gray-400 hover:text-white">Site-Map</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4">
              <li><a href="https://www.linkedin.com/in/ghingmoluk88/" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://github.com/ghingy88" className="text-gray-400 hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Ghingmo Luk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
