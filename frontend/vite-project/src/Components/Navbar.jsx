import React, { useState, useEffect } from 'react';
import Login from '../Components/login';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      <li className="font-semibold"><a href="/">Home</a></li>
      <li className="font-semibold"><a href="/Courses">Course</a></li>
      <li className="font-semibold"><a href="/Contact">Contact</a></li>
      <li className="font-semibold"><a href="#">About</a></li>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-base-100 px-4 py-2 shadow-sm transition-all duration-300 ease-in-out
          ${sticky ? 'shadow-md bg-base-300' : ''}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4">
          {/* Logo + Mobile Hamburger */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 mr-2 rounded-md hover:bg-base-200 focus:outline-none"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <a className="text-2xl font-bold cursor-pointer">Bookstore</a>
          </div>

          {/* Desktop Nav Items + Search + Theme */}
          <div className="hidden md:flex items-center gap-x-6">
            <ul className="flex space-x-6">{navItems}</ul>

            <label className="flex items-center px-2 py-1 rounded-md border border-gray-300">
              <svg className="h-5 w-5 opacity-50 mr-1"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <circle cx="11" cy="11" r="8" strokeWidth="2.5" />
                <path d="M21 21l-4.3-4.3" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search"
                className="bg-transparent outline-none"
              />
            </label>

            <select
              className="select select-bordered select-sm"
              defaultValue="light"
              onChange={(e) =>
                document.documentElement.setAttribute('data-theme', e.target.value)
              }
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Login Button (always visible) */}
          <button
            className="btn btn-sm bg-black text-white hover:bg-slate-800 px-4 py-1 rounded-lg"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-base-100 shadow-lg rounded-md overflow-hidden animate-slide-down">
            <ul className="flex flex-col space-y-2 p-4">{navItems}</ul>
          </div>
        )}
      </nav>

      {/* Your Dialog-based Login Modal */}
      <Login />
    </>
  );
}
