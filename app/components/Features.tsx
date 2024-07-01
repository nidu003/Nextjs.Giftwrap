import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <img src="/artistdesigned.png" alt="Artist Designed" className="w-20 h-20" />
          <h3 className="text-xl font-bold mt-4">Artist Designed</h3>
          <p className="text-gray-600 mt-2">Every collection we collaborate with local and small artists to create new and exclusive designs.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/giftforall.png" alt="Gift for all" className="w-20 h-20" />
          <h3 className="text-xl font-bold mt-4">Gift for all</h3>
          <p className="text-gray-600 mt-2">We offer a wide range of thoughtful curated collection of gifts suitable for everyone for every occasion.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/recyclable.png" alt="Recyclable" className="w-20 h-20" />
          <h3 className="text-xl font-bold mt-4">Recyclable</h3>
          <p className="text-gray-600 mt-2">Our wrapping paper is 100% recyclable, non-toxic materials that contribute to a healthier planet.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/quickdelivery.png" alt="Quick Delivery" className="w-20 h-20" />
          <h3 className="text-xl font-bold mt-4">Quick Delivery</h3>
          <p className="text-gray-600 mt-2">Orders are shipped 48 hours of ordering allowing you to share joy celebrate special moments without delay</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/madeinindia.png" alt="Made in India" className="w-20 h-20" />
          <h3 className="text-xl font-bold mt-4">Made in India</h3>
          <p className="text-gray-600 mt-2">Our gift wrap celebrates the craftsmanship of India. Each wrap is meticulously crafted by local skilled artisans.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;