import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/Heroimage.png"
        alt="Hero image"
        layout="fill"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-4">
        <h3 className="hero-title">
          Gifts Wrapped with Care,<br />Delivered with Love!
        </h3>
        <p className="hero-text">
          We take pride in offering exquisite gift wrapping solutions
        </p>
        <p className="hero-text">
          that reflects the care and thoughtfulness you put into selecting them.
        </p>
        <Link href="/buy-now" legacyBehavior>
          <a className="btn-he btn-primary">
            Buy Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
