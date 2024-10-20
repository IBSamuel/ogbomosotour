"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state between true and false
  };

  return (
    <>
      <nav className="fixed top-0 block text-white w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Ogbomoso</span>
          </a>

          {/* Toggle Button */}
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 md:p-0 mt-4 bg-gray-800 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 " aria-current="page">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-whiterounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                  Members
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                  Gallery
                </a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
