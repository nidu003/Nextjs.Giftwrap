import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

const Features: React.FC = () => {
  return (
    <div className="features-container">
      <Feature
        icon="/artistdesigned.png"
        title="Artist Designed"
        description="Every collection we collaborate with local and small artists to create new and exclusive designs."
        width={180} // Reduced icon width
        height={135} // Reduced icon height
      />
      <Feature
        icon="/giftforall.png"
        title="Gift for all"
        description="We offer a wide range of thoughtful curated collection of gifts suitable for everyone for every occasion."
        width={180}
        height={112}
      />
      <Feature
        icon="/recyclable.png"
        title="Recyclable"
        description="Our wrapping paper is 100% recyclable, non-toxic materials that contribute to a healthier planet."
        width={180}
        height={148}
      />
      <Feature
        icon="/quickdelivery.png"
        title="Quick Delivery"
        description="Orders are shipped 48 hours of ordering allowing you to share joy celebrate special moments without delay"
        width={180}
        height={148}
      />
      <Feature
        icon="/madeinindia.png"
        title="Made in India"
        description="Our gift wrap celebrates the craftsmanship of India. Each wrap is meticulously crafted by local skilled artisans."
        width={180}
        height={137}
      />
    </div>
  );
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description, width = 180, height = 135 }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={title} width={width} height={height} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Features;
