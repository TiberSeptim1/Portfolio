import React, { useState } from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const Navitems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="text-white fixed top-0 left-0 right-0 z-50 bg-black/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-auto py-5 c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors"
          >
            Vedant
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <Navitems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <Navitems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
