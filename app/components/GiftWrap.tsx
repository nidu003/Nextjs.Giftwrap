import React from 'react';

const GiftWrap = () => {
  return (
    <div className="container-g">
      <h1>Shop Gift Wraps</h1>
      <div className="grid">
        <div className="item">
          <img src="/Floral.png" alt="Floral Print" />
          <h2>Floral Print</h2>
          <p>₹ 250/-</p>
        </div>
        <div className="item">
          <img src="/Asymmetric.png" alt="Asymmetric" />
          <h2>Asymmetric</h2>
          <p>₹ 300/-</p>
        </div>
        <div className="item">
          <img src="/marble.png" alt="Marble Design" />
          <h2>Marble Design</h2>
          <p>₹ 325/-</p>
        </div>
        <div className="item">
          <img src="/cellophane.png" alt="Cellophane" />
          <h2>Cellophane</h2>
          <p>₹ 275/-</p>
        </div>
        <div className="item">
          <img src="/Mix.png" alt="Mix" />
          <h2>Mix</h2>
          <p>₹ 200/-</p>
        </div>
        <div className="item">
          <img src="/Pastel.png" alt="Pastel Chromo" />
          <h2>Pastel Chromo</h2>
          <p>₹ 330/-</p>
        </div>
      </div>
      <button className="shop-more">Shop more</button>
    </div>
  );
};

export default GiftWrap;