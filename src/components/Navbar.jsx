/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full bg-auto backdrop-blur-md text-black z-50 shadow-lg bg-opacity-50">
      <div className="container-custom">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img
              src="/images/logo/logo-em.png"
              alt="Elite Managements Logo"
              className="h-10 w-auto transition-transform hover:scale-105"
            />
            <span className="text-xl font-semibold tracking-wide">
              ELITE MANAGEMENTS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "COURSES", path: "/courses" },
              { name: "BLOGS", path: "/blogs" },
              { name: "PLACEMENTS", path: "/placements" },
              { name: "GET IN TOUCH", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className="relative transition-colors hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "COURSES", path: "/courses" },
              { name: "BLOGS", path: "/blogs" },
              { name: "PLACEMENTS", path: "/placements" },
              { name: "GET IN TOUCH", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
