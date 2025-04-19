import React from 'react'
const Footer = () => {
  return (
    <>
     {/* Footer Section - Add this BELOW all other sections */}
<footer className="bg-gray-800 text-white py-8 ">
  <div className="container mx-auto px-4">
    
    {/* Top Row: Quick Links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Shop</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-300">All Products</a></li>
          <li><a href="#" className="hover:text-blue-300">New Arrivals</a></li>
          <li><a href="#" className="hover:text-blue-300">Deals</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Help</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-300">FAQs</a></li>
          <li><a href="#" className="hover:text-blue-300">Shipping</a></li>
          <li><a href="#" className="hover:text-blue-300">Returns</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-300">About Us</a></li>
          <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          <li><a href="#" className="hover:text-blue-300">Careers</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Connect</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-300">FB
          </a>
          <a href="#" className="hover:text-blue-300">IG</a>
          <a href="#" className="hover:text-blue-300">Twitter</a>
        </div>
      </div>
    </div>
    
    {/* Bottom Row: Copyright */}
    <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
      <p>© 2023 MyShop. All Rights Reserved.</p>
      <p className="mt-2 text-sm">Made with ❤️ using React & Firebase</p>
    </div>
  </div>
</footer> 
    </>
  )
}

export default Footer
