import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <img src="/Logo.png" alt="EC Gift Wrap" />
            </div>
            <p>
              Experience the Art of Gifting with Our Exquisite Wrapping Services. Discover Thoughtful Options for Every Occasion.
            </p>
            <ul className="social-media">
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
            <ul className="payment-methods">
              <li>
                <img src="/Group.png" alt="Paypal" />
              </li>
              <li>
                <img src="/Vector (1).png" alt="Mastercard" />
              </li>
              <li>
                <img src="/path3005.png" alt="Visa" />
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-heading">For Customer</h3>
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
          <div className="col-md-4">
            <h3 className="footer-heading">Information</h3>
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
        <div className="row copyright">
          <div className="col-md-12">
            <p>
              Design and Developed by GBJ Buzz Copyright © 2024 cmp name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;