import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <button
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            onClick={toggleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={`${isOpen ? 'hidden' : 'block'}`}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${isOpen ? 'block' : 'hidden'}`}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <span className="text-gray-300">Logo</span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar