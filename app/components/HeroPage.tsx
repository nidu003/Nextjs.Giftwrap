import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[800px] lg:h-[1000px]">
      <Image
        src="/Heroimage.png"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Gifts Wrapped with Care,<br />Delivered with Love!
        </h3>
        <p className="text-lg md:text-xl mb-2">
          We take pride in offering exquisite gift wrapping solutions
        </p>
        <p className="text-lg md:text-xl mb-4">
          that reflects the care and thoughtfulness you put into selecting them.
        </p>
        <Link href="/buy-now" legacyBehavior>
          <a className="btn-he btn-primary text-lg md:text-xl px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-300">
            Buy Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
