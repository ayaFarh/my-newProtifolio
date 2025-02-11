import React, { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { HiBars2 } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navDetails = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/Projects' },
    { name: 'Contact', link: '/contact' }
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
    <nav className="flex flex-col gap-3 md:flex-row  justify-between items-center  text-white relative">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">Aya</h1>
        <div onClick={toggleNav} className="cursor-pointer md:hidden">
          <HiBars2 className="text-3xl font-bold" />
        </div>
      </div>

     
      <ul
  className={`absolute md:static z-50 top-[100%] left-1/2 transform -translate-x-1/2 w-[70%] rounded-md bg-black/70 backdrop-blur-lg text-white flex flex-col items-center gap-3 py-5 transition-all duration-300 ease-in-out ${
    isNavOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
  } md:flex md:flex-row md:w-auto md:bg-transparent md:opacity-100 md:scale-100 md:pointer-events-auto`}
>
        {navDetails.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? 'bg-white/10 px-3 py-2 rounded-lg'
                  : 'px-3 py-2'
              }
              onClick={closeNav}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
         <div className=" cursor-pointer px-3 py-2">
        <FaMoon />
      </div>
      </ul>

      
     
    </nav>
  </>
);
} 
  