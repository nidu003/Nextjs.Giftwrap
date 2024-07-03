import React from 'react';
import Image from 'next/image';

const Do: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Card */}
        <div className="card">
          <img src="/Personalized.png" className="card-img-top" alt="Personalized" />
          <div className="card-body">
            <h5 className="card-title">Personalized</h5>
          </div>
        </div>

        {/* Second Card */}
        <div className="card">
          <img src="/Luxurious.png" className="card-img-top" alt="Luxurious" />
          <div className="card-body">
            <h5 className="card-title">Luxurious</h5>
          </div>
        </div>

        {/* Third Card */}
        <div className="card">
          <img src="/specialoccasion.png" className="card-img-top" alt="Special Occasion" />
          <div className="card-body">
            <h5 className="card-title">Special Occasion</h5>
          </div>
        </div>

        {/* Trending Now Section */}
        <div className="col-span-3">
          <h2 className="text-2xl lg:text-3xl mt-5">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            {/* First Trending Card */}
            <div className="card">
              <div className="card-img-top-2-container relative">
                <img src="/moneyenvelop.png" className="card-img-top-2 hover-effect-zoom-out" alt="Money Envelopes" />
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 text-white p-4">
                  <h5 className="card-title text-xl md:text-2xl lg:text-3xl">Money Envelopes</h5>
                  <a href="#" className="btn btn-primary mt-2">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Second Trending Card */}
            <div className="card">
              <div className="card-img-top-2-container relative">
                <img src="/waxseal.png" className="card-img-top-2 hover-effect-zoom-out" alt="Wax Seals" />
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 text-white p-4">
                  <h5 className="card-title text-xl md:text-2xl lg:text-3xl">Wax Seals</h5>
                  <a href="#" className="btn btn-primary mt-2">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Third Trending Card */}
            <div className="card">
              <div className="card-img-top-2-container relative">
                <img src="/gifttag.png" className="card-img-top-2 hover-effect-zoom-out" alt="Gift Tags" />
                <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 text-white p-4">
                  <h5 className="card-title text-xl md:text-2xl lg:text-3xl">Gift Tags</h5>
                  <a href="#" className="btn btn-primary mt-2">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Do;