import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container-h">
      <div className="title-h">How It Works</div>
      <div className="steps">
        <div className="step">
          <div className="step-title">Step 1</div>
          <div className="step-image">
            <img src="/gift-wrap-images.jpg" alt="Gift wrap images" />
          </div>
          <div className="step-description">
            Select the perfect gift wrap ensemble from our beautiful collection that suits your style and occasion.
          </div>
        </div>
        <div className="step">
          <div className="step-title">Step 2</div>
          <div className="step-image">
            <img src="/gift-box-image.jpg" alt="Gift box image" />
          </div>
          <div className="step-description">
            Customize your gift wrap with personalized messages, stickers, or ribbons to make it truly special.
          </div>
        </div>
        <div className="step">
          <div className="step-title">Step 3</div>
          <div className="step-image">
            <img src="/gift-wrapped-image.jpg" alt="Gift wrapped image" />
          </div>
          <div className="step-description">
            Place your order on our site and provide the delivery details. You can also schedule the delivery for a specific date.
          </div>
        </div>
        <div className="step">
          <div className="step-title">Step 4</div>
          <div className="step-image">
            <img src="/delivery-image.jpg" alt="Delivery image" />
          </div>
          <div className="step-description">
            Sit back and relax as we carefully wrap your gift and deliver it to your doorstep or directly to your loved one.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;