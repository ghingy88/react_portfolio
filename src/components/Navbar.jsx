import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
// import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="font-bold text-xl text-gray-800">Portfolio</NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}>Contact</NavLink>
            
          </div>
        </div>
      </div>
    </nav>
    );
  };

//   const Navbar = () => {
//     return (
//         <h1 className='text-red-500'>Hi</h1>
//     );
//   };
  
  export default Navbar;