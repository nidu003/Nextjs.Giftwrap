
import React from "react";
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="foot-head">
          <h1>WEB LOGO</h1>
        </div>
        <p>Some footer text about the</p>
        <p>Agency. Just a little description to</p>
        <p>help people understand you better.</p>
        <div className="social-icons">
          <div className="icon-styles">
            <LuFacebook />
          </div>
          <div className="icon-styles">
            <CiTwitter />
          </div>
          <div className="icon-styles">
            <TiSocialLinkedinCircular />
          </div>
          <div className="icon-styles">
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="foot-head">
          <h1>Quick Links</h1>
        </div>
        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <div className="foot-head">
          <h1>Address</h1>
        </div>
        <p>
          Design Agency Head Office.
          <br />
          Airport Road
          <br />
          United Arab Emirate
        </p>
      </div>

      <div className="footer-last">Copyright Design Agency 2022</div>
    </div>
  );
};

export default Footer;
