"use client";
import React, { useState } from "react";

const Gallery: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div>
      <div className="horizontal-gallery">
        <img src="/last1.png" alt="Gallery Image 1" />
        <img src="/last2.png" alt="Gallery Image 2" />
        <img src="/last3.png" alt="Gallery Image 3" />
        <img src="/last4.png" alt="Gallery Image 2" />
        <img src="/last5.png" alt="Gallery Image 1" />
        <img src="/last6.png" alt="Gallery Image 2" />
      </div>
      <div className="container-ggg">
        <img src="/ballon.png" alt="Transparent Image" className="transparent-image" />
        <div className="image-container">
  <img src="/giftbox.png" alt="Transparent Image2" className="transparent-image2" />
</div>

        <div className="newsletter-sectiong">
          <div className="left-side">
            <h2>Newsletter Updates</h2>
            <p>Get Unique and trendy gift ideas and best offers delivered to your inbox.</p>
          </div>
          <div className="vertical-separator" /> {/* added vertical line */}
          <div className="right-side">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email-id"
                required
              />
              <button type="submit" className="submit-button">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
