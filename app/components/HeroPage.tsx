import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="banner-card">
      <Image src="/image 141.png" alt="" width={1500} height={800} />
      <div className="banner-text">
        <h3>Gifts Wrapped with Care,</h3>
        <h3>Delivered with Love!</h3>
        <p>We take pride in offering exquisite gift wrapping solutions that reflects the care and thoughtfulness you put into selecting them.</p>
        <br></br>
        <Link href="/buy-now" className="btn btn-primary">Buy Now</Link>
      </div>
    </div>
  );
};

export default HeroPage;