import React from 'react';
import { 
    RocketLaunchIcon,
    ShieldCheckIcon,
    HeartIcon,
    UsersIcon 
  } from '@heroicons/react/24/outline';
  
const About = () => {
  return (
    <>
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About <span className="text-green-500">Our Shop</span>
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
          We're revolutionizing online shopping with quality products and exceptional service.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-5">
            <RocketLaunchIcon className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your orders delivered within 24 hours in major cities.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-5">
            <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Guarantee</h3>
          <p className="text-gray-600">
            100% authentic products with money-back guarantee.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-5">
            <HeartIcon className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Love</h3>
          <p className="text-gray-600">
            Rated 4.9/5 by 10,000+ happy customers worldwide.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-5">
            <UsersIcon className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Our team is always ready to help you with any queries.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Team</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A passionate group of e-commerce experts dedicated to bringing you the best shopping experience.
        </p>
      </div>
    </div>
    </>
  );

};

export default About;
