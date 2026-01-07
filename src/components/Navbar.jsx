/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkNav, setIsDarkNav] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Auto theme switch on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsDarkNav(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md shadow-lg transition-all duration-300
        ${
          isDarkNav
            ? "bg-white/90 text-[#161E54] border-b border-border"
            : "bg-[#161E54]/90 text-white"
        }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 font-bold tracking-wide hover:opacity-90"
          >
            <img
              src="/images/logo/logo-em.png"
              alt="Elite Managements Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl">ELITE MANAGEMENTS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
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
                className={`transition-colors duration-300 ${
                  isDarkNav
                    ? "hover:text-yellow-500"
                    : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden items-center p-2 transition-colors duration-300"
            aria-label="Toggle menu"
          >
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500 transition-colors"
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-md transition-all duration-300
            ${
              isDarkNav
                ? "bg-white/95 text-[#161E54]"
                : "bg-[#161E54]/95 text-white"
            }`}
        >
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
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-yellow-500"
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
