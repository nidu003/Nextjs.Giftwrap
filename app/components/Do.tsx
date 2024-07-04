import React from 'react';
import Image from 'next/image';

const Do: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <Image src="/Personalized.png" className="card-img-top" alt="Personalized" width={400} height={300} />
            <div className="card-body">
              <h5 className="card-title">Personalized</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <Image src="/Luxurious.png" className="card-img-top" alt="Luxurious" width={400} height={300} />
            <div className="card-body">
              <h5 className="card-title">Luxurious</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <Image src="/specialoccasion.png" className="card-img-top" alt="Special Occasion" width={400} height={300} />
            <div className="card-body">
              <h5 className="card-title">Special Occasion</h5>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-5">Trending Now</h2>

      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-img-top-2-container">
              <Image src="/moneyenvelop.png" className="card-img-top-2 hover-effect-zoom-out" alt="Money Envelopes" width={400} height={300} />
              <div className="overlay">
                <h5 className="card-title">Money Envelopes</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-img-top-2-container">
              <Image src="/waxseal.png" className="card-img-top-2 hover-effect-zoom-out" alt="Wax Seals" width={400} height={300} />
              <div className="overlay">
                <h5 className="card-title">Wax Seals</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-img-top-2-container">
              <Image src="/gifttag.png" className="card-img-top-2 hover-effect-zoom-out" alt="Gift Tags" width={400} height={300} />
              <div className="overlay">
                <h5 className="card-title">Gift Tags</h5>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;
