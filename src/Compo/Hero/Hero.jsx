import React from 'react';
import logo from '../../assets/logo.png';
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-indigo-800 text-white min-h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Welcome to MyStore
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate-fade-in delay-100">
          Discover the Best Deals on Your Favorite Products!
        </p>
        <a
          to="/products"
          className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-109"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;