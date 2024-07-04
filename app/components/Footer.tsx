import React from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/Logo.png" alt="EC Gift Wrap" width={150} height={50} />
            </div>
            <p className="mb-4">
              Experience the Art of Gifting with Our Exquisite Wrapping Services. Discover Thoughtful Options for Every Occasion.
            </p>
            <ul className="flex space-x-4 mb-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <ul className="flex space-x-4">
              <li>
                <Image src="/Group.png" alt="Paypal" width={40} height={40} />
              </li>
              <li>
                <Image src="/Vector.png" alt="Mastercard" width={40} height={40} />
              </li>
              <li>
                <Image src="/Path.png" alt="Visa" width={40} height={40} />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">For Customers</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">FAQS</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">My account</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Shipping & Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Return Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            Design and Developed by GBJ Buzz © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;