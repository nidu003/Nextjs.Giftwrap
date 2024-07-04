import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="footer-section">
            <div className="logo mb-4">
              <img src="/Logo.png" alt="EC Gift Wrap" />
            </div>
            <p className="text-sm">
              Experience the Art of Gifting with Our Exquisite Wrapping Services. Discover Thoughtful Options for Every Occasion.
            </p>
            <ul className="social-media mt-4 flex gap-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-times"></i>
                </a>
              </li>
            </ul>
            <ul className="payment-methods mt-4 flex gap-4">
              <li>
                <img src="/Group.png" alt="Paypal" />
              </li>
              <li>
                <img src="/Vector.png" alt="Mastercard" />
              </li>
              <li>
                <img src="/Path.png" alt="Visa" />
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading mb-4">For Customers</h3>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading mb-4">Information</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>
            Design and Developed by GBJ Buzz &copy; 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
