import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className="banner-card">
      <Image src="/Heroimage.png" alt="" width={1500} height={800} />
      <div className="banner-text">
        <h3>Gifts Wrapped with Care,</h3>
        <h3>Delivered with Love!</h3>
        <p>We take pride in offering exquisite gift wrapping solutions that reflect the care and thoughtfulness you put into selecting them.</p>
        <Link href="/buy-now" passHref>
          {/* Use <a> inside <Link> with legacy behavior */}
          <a className="btn">Buy Now</a>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
