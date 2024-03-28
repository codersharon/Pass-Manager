import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavHeading = "Pass-Manager"
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">{NavHeading}</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
                <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</a>
                <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Services</a>
                <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Heroicon name: menu */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              {/* Icon when menu is open. */}
              {/* Heroicon name: x */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;