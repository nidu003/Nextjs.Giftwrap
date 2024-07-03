import React from 'react';

function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="gift-wrap-option">
          <img src="/step-1.png" alt="Step 1" className="gift-wrap-image" />
          <div className="gift-wrap-text text-center">
            <h2 className="text-xl font-semibold mb-2">Step 1</h2>
            <p>Select the perfect gift wrap ensemble from our beautiful collection that suits your style and occasion.</p>
          </div>
        </div>

        <div className="gift-wrap-option">
          <img src="/step-2.png" alt="Step 2" className="gift-wrap-image" />
          <div className="gift-wrap-text text-center">
            <h2 className="text-xl font-semibold mb-2">Step 2</h2>
            <p>Customize your gift wrap with personalized messages, stickers, or ribbons to make it truly special.</p>
          </div>
        </div>

        <div className="gift-wrap-option">
          <img src="/step-3.png" alt="Step 3" className="gift-wrap-image" />
          <div className="gift-wrap-text text-center">
            <h2 className="text-xl font-semibold mb-2">Step 3</h2>
            <p>Place your order on our site and provide the delivery details. You can also schedule the delivery for a specific date.</p>
          </div>
        </div>

        <div className="gift-wrap-option">
          <img src="/step-4.png" alt="Step 4" className="gift-wrap-image" />
          <div className="gift-wrap-text text-center">
            <h2 className="text-xl font-semibold mb-2">Step 4</h2>
            <p>Sit back and relax as we carefully wrap your gift and deliver it to your doorstep or directly to your loved one.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;