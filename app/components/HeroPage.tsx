import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="banner-card relative overflow-hidden">
      <div className="relative">
        <Image src="/Heroimage.png" alt="" layout="responsive" width={1500} height={800} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Gifts Wrapped with Care,<br/>Delivered with Love!
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            We take pride in offering exquisite gift wrapping solutions 
            that reflect the care and thoughtfulness you put into selecting them.
          </p>
          <Link href="/buy-now">
            <a className="btn-he btn-primary px-6 py-3 rounded-full text-lg md:text-xl lg:text-2xl hover:bg-white hover:text-black transition duration-300">
              Buy Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;