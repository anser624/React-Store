import { useState } from "react";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Changed from <a> to <Link>
import logo from '../../assets/logo.png';

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-200 to-green-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold tracking-tight">
          <Link to="/" className="hover:text-gray-900 transition">
            <img src={logo} alt="Logo" className="h-16" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <div className="relative">
            <Link to="/add-product" className="flex items-center hover:text-yellow-300 transition">
              <span className="ml-2">AddProduct</span>
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 py-4 transition-all duration-300">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-lg hover:text-yellow-300 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg hover:text-yellow-300 transition"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/add-product"
              className="flex items-center text-lg hover:text-yellow-300 transition"
              onClick={toggleMenu}
            >
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Add Product
              {cart.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;