import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-primary text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity duration-300">
              <img 
                src="/images/logo/logo-em.png" 
                alt="Elite Managements Logo" 
                className="h-10 w-auto mr-3 transition-transform duration-300 hover:scale-105"
              />
              <span className="text-xl font-bold">ELITE MANAGEMENTS</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={handleLinkClick} className="hover:text-accent-foreground transition-colors duration-200">HOME</Link>
            
            <Link to="/about" onClick={handleLinkClick} className="hover:text-accent-foreground transition-colors duration-200">ABOUT US</Link>
            
            <Link to="/courses" onClick={handleLinkClick} className="hover:text-accent-foreground transition-colors duration-200">COURSES</Link>
            <Link to="/blogs" onClick={handleLinkClick} className="hover:text-accent-foreground transition-colors duration-200">BLOGS</Link>
            <Link to="/placements" onClick={handleLinkClick} className="hover:text-accent-foreground transition-colors duration-200">PLACEMENTS</Link>
            <Link to="/contact" onClick={handleLinkClick} className="hover:text-accent-foreground transition-colors duration-200">GET IN TOUCH</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-emerald-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent-foreground transition-colors duration-200"
              onClick={handleLinkClick}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent-foreground transition-colors duration-200"
              onClick={handleLinkClick}
            >
              ABOUT US
            </Link>
            
            <Link 
              to="/courses" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent-foreground transition-colors duration-200"
              onClick={handleLinkClick}
            >
              COURSES
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent-foreground transition-colors duration-200"
              onClick={handleLinkClick}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;