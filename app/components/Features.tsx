import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Features = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <Feature
          icon="/artistdesigned.png"
          title="Artist Designed"
          description="Every collection we collaborate with local and small artists to create new and exclusive designs."
        />

        {/* Feature 2 */}
        <Feature
          icon="/giftforall.png"
          title="Gift for all"
          description="We offer a wide range of thoughtful curated collection of gifts suitable for everyone for every occasion."
        />

        {/* Feature 3 */}
        <Feature
          icon="/recyclable.png"
          title="Recyclable"
          description="Our wrapping paper is 100% recyclable, non-toxic materials that contribute to a healthier planet."
        />

        {/* Feature 4 */}
        <Feature
          icon="/quickdelivery.png"
          title="Quick Delivery"
          description="Orders are shipped within 48 hours, allowing you to share joy and celebrate special moments without delay."
        />

        {/* Feature 5 */}
        <Feature
          icon="/madeinindia.png"
          title="Made in India"
          description="Our gift wrap celebrates the craftsmanship of India. Each wrap is meticulously crafted by local skilled artisans."
        />
      </div>
    </div>
  );
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-item bg-white shadow-md p-4 rounded-lg">
      <img src={icon} alt={title} className="w-20 h-20 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Features;