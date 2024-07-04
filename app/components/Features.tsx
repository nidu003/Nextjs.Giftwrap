import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Features = () => {
  return (
    <div className="features-container">
      <Feature
        icon="/artistdesigned.png"
        title="Artist Designed"
        description="Every collection we collaborate with local and small artists to create new and exclusive designs."
      />
      <Feature
        icon="/giftforall.png"
        title="Gift for all"
        description="We offer a wide range of thoughtful curated collection of gifts suitable for everyone for every occasion."
      />
      <Feature
        icon="/recyclable.png"
        title="Recyclable"
        description="Our wrapping paper is 100% recyclable, non-toxic materials that contribute to a healthier planet."
      />
      <Feature
        icon="/quickdelivery.png"
        title="Quick Delivery"
        description="Orders are shipped 48 hours of ordering allowing you to share joy celebrate special moments without delay"
      />
      <Feature
        icon="/madeinindia.png"
        title="Made in India"
        description="Our gift wrap celebrates the craftsmanship of India. Each wrap is meticulously crafted by local skilled artisans."
      />
    </div>
  );
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Features;