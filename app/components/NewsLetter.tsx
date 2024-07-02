"use client";
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

 

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="header-item">
            <img src="/artistdesigned.png" alt="Artist Designed" />
            <h3>Artist Designed</h3>
            <p>Every collection we collaborate with local and small artists to create new and exclusive designs.</p>
          </div>
          <div className="header-item">
            <img src="/giftforall.png" alt="Gift for all" />
            <h3>Gift for all</h3>
            <p>We offer a wide range of thoughtful curated collection of gifts suitable for everyone for every occasion.</p>
          </div>
          <div className="header-item">
            <img src="/recyclable.png" alt="Recyclable" />
            <h3>Recyclable</h3>
            <p>Our wrapping paper is 100% recyclable, non-toxic materials that contribute to a healthier planet.</p>
          </div>
          <div className="header-item">
            <img src="/quickdelivery.png" alt="Quick Delivery" />
            <h3>Quick Delivery</h3>
            <p>Orders are shipped 48 hours of ordering allowing you to share joy celebrate special moments without delay</p>
          </div>
          <div className="header-item">
            <img src="/madeinindia.png" alt="Made in India" />
            <h3>Made in India</h3>
            <p>Our gift wrap celebrates the craftsmanship of India. Each wrap is meticulously crafted by local skilled artisans.</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Newsletter;