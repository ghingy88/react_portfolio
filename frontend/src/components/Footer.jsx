import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-span-2">
            
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="flex space-x-4">
              <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-white">About</NavLink></li>
              <li><NavLink to="/projects" className="text-gray-400 hover:text-white">Projects</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-white">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <ul className="flex space-x-4">
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://linkedin.com" className="text-gray-400 hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Ghingmo Luk All rights reserved.
        </div>
      </div>
    </footer>
  );
};
// const Footer = () => {
//     return (
//         <h1>hi</h1>
//     );
// };

export default Footer;
