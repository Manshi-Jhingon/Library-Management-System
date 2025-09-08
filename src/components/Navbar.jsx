import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Common neon link classes
  const linkClasses =
    "relative px-3 py-2 rounded-md text-white font-medium " +
    "transition-all duration-300 " +
    "hover:text-white " +
    "hover:shadow-[0_0_10px_#0ff,0_0_20px_#0ff,0_0_40px_#1de9b6] " +
    "hover:bg-gray-800 " +
    "hover:scale-110";

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Brand/Logo */}
        <div className="flex-shrink-0 text-white font-bold text-xl">
          Library Manager
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className={linkClasses}>Home</a>
          <a href="/books" className={linkClasses}>Books</a>
          <a href="/members" className={linkClasses}>Members</a>
          <a href="/issues" className={linkClasses}>Issue/Return</a>
          <a href="/reports" className={linkClasses}>Reports</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-black">
          <a href="/" className={linkClasses}>Home</a>
          <a href="/books" className={linkClasses}>Books</a>
          <a href="/members" className={linkClasses}>Members</a>
          <a href="/issues" className={linkClasses}>Issue/Return</a>
          <a href="/reports" className={linkClasses}>Reports</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
