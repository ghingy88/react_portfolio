import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
// import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const activeClass = ({ isActive }) =>
      isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'hover:text-blue-600';

    return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24 items-center font-mono">
          <NavLink to="/" className="font-bold text-4xl">GL<span className="text-indigo-600">.</span></NavLink>
          {/* Desktop Nav */}
          <div className="hidden xl:flex space-x-8">
            <NavLink to="/" className={activeClass}>&lt;Home /&gt;</NavLink>
            <NavLink to="/about" className={activeClass}>&lt;About /&gt;</NavLink>
            <NavLink to="/projects" className={activeClass}>&lt;Home /&gt;</NavLink>
            <NavLink to="/contact" className={activeClass}>&lt;Contact /&gt;</NavLink>
            <NavLink to="/blog" className={activeClass}>&lt;Blog /&gt;</NavLink>
          </div>
          
          {/* Mobile view */}
          <div className='xl:hidden py-4'>mobile nav
          <div className="flex flex-col space-y-2">
        </div>
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