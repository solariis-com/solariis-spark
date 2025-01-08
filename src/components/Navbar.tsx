import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="Solariis Logo" className="h-[61px] w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-light hover:text-text transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-text-light hover:text-text transition-colors">
              About
            </Link>
            <Link to="/products" className="text-text-light hover:text-text transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-text-light hover:text-text transition-colors">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-text px-4 py-2 rounded-lg transition-colors"
            >
              Partner with Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-text hover:text-text-light transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-text-light hover:text-text transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-text-light hover:text-text transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-text-light hover:text-text transition-colors"
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-text-light hover:text-text transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-primary hover:bg-primary-dark text-text rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Partner with Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;