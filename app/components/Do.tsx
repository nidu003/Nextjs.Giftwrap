import React from 'react';
import Image from 'next/image';


const Do = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/image 143.png" className="card-img-top" alt="Personalized" />
            <div className="card-body">
              <h5 className="card-title">Personalized</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/image 144.png" className="card-img-top" alt="Luxurious" />
            <div className="card-body">
              <h5 className="card-title">Luxurious</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/image 142.png" className="card-img-top" alt="Special Occasion" />
            <div className="card-body">
              <h5 className="card-title">Special Occasion</h5>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-5">Trending Now</h2>
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <img src="/image 179.png" className="card-img-top-2" alt="Money Envelopes" />
            <div className="card-body">
              <h5 className="card-title">Money Envelopes</h5>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/image 180.png" className="card-img-top-2" alt="Wax Seals" />
            <div className="card-body">
              <h5 className="card-title">Wax Seals</h5>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/image 181.png" className="card-img-top-2" alt="Gift Tags" />
            <div className="card-body">
              <h5 className="card-title">Gift Tags</h5>
              <a href="#" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;