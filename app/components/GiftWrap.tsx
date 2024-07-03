import React from 'react';

const GiftWrap = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Shop Gift Wraps</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card text-center">
            <img src="/Floral.png" className="card-img-top" alt="Floral Print" />
            <div className="card-body">
              <h2 className="card-title">Floral Print</h2>
              <p className="card-text">₹ 250/-</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <img src="/Asymmetric.png" className="card-img-top" alt="Asymmetric" />
            <div className="card-body">
              <h2 className="card-title">Asymmetric</h2>
              <p className="card-text">₹ 300/-</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <img src="/marble.png" className="card-img-top" alt="Marble Design" />
            <div className="card-body">
              <h2 className="card-title">Marble Design</h2>
              <p className="card-text">₹ 325/-</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <img src="/cellophane.png" className="card-img-top" alt="Cellophane" />
            <div className="card-body">
              <h2 className="card-title">Cellophane</h2>
              <p className="card-text">₹ 275/-</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <img src="/Mix.png" className="card-img-top" alt="Mix" />
            <div className="card-body">
              <h2 className="card-title">Mix</h2>
              <p className="card-text">₹ 200/-</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <img src="/Pastel.png" className="card-img-top" alt="Pastel Chromo" />
            <div className="card-body">
              <h2 className="card-title">Pastel Chromo</h2>
              <p className="card-text">₹ 330/-</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">Shop more</button>
      </div>
    </div>
  );
};

export default GiftWrap;