import { useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Changed from <a> to <Link>
import logo from "../../assets/logo.png";

const Navbar = () => {
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
            <span className="bg-opacity-20 rounded-full p-1 group-hover:bg-opacity-30">
              🏠
            </span>
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition">
            <span className="bg-opacity-20 rounded-full p-1 group-hover:bg-opacity-30">
              ℹ️
            </span>
            About
          </Link>
          <div className="relative">
            <Link
              to="/add-product"
              className="flex items-center hover:text-yellow-300 transition"
            >
              <span className="ml-2">DashBoard</span>
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
        <div className="md:hidden bg-gradient-to-b from-purple-900 to-indigo-800 py-6 px-4 transition-all duration-500 ease-in-out transform">
          <div className="container mx-auto flex flex-col space-y-6">
            <Link
              to="/"
              className="text-xl font-medium hover:text-pink-400 transition-all duration-300 flex items-center group"
              onClick={toggleMenu}
            >
              <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3 group-hover:bg-opacity-30">
                🏠
              </span>
              Home
            </Link>

            <Link
              to="/about"
              className="text-xl font-medium hover:text-pink-400 transition-all duration-300 flex items-center group"
              onClick={toggleMenu}
            >
              <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3 group-hover:bg-opacity-30">
                ℹ️
              </span>
              About
            </Link>

            <Link
              to="/add-product"
              className="text-xl font-medium hover:text-pink-400 transition-all duration-300 flex items-center group relative"
              onClick={toggleMenu}
            >
              <span className="bg-white bg-opacity-20 rounded-full p-1 mr-3 group-hover:bg-opacity-30">
                🛒
              </span>
              Add Product
            </Link>
          </div>

          {/* VIP Badge */}
          <div className="mt-8 text-center">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide animate-bounce">
              Premium Member
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
