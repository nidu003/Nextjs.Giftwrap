import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/Logo.png" alt="EC Gift Wrap" className="w-12 h-auto mr-2" />
              <span className="text-xl font-bold">EC Gift Wrap</span>
            </div>
            <p className="text-sm">
              Experience the Art of Gifting with Our Exquisite Wrapping Services. Discover Thoughtful Options for Every Occasion.
            </p>
            <ul className="flex space-x-4 mt-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <img src="/Group.png" alt="Paypal" className="w-12 h-auto" />
              <img src="/Vector.png" alt="Mastercard" className="w-12 h-auto" />
              <img src="Path.png" alt="Visa" className="w-12 h-auto" />
            </div>
          </div>

          {/* Customer Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">For Customers</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">FAQs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">My Account</a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">Shipping & Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">Return Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-400">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm">
            Design and Developed by GBJ Buzz &copy; 2024 cmp name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;