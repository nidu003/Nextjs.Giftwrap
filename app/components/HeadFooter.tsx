import React from 'react';
import Image from 'next/image';

const HeadFooter = () => {
  return (
    <div className="headfooter-container">
      <ul className="headfooternav">
        <li className="flex items-center">
          <Image src="/freeshipping.png" alt="Free Shipping" width={395} height={57} />
        </li>
        <li className="flex items-center">
          <Image src="/easyreturn.png" alt="Easy Return" width={395} height={57} />
        </li>
        <li className="flex items-center">
          <Image src="/samedaydelivery.png" alt="Same Day Delivery" width={395} height={57} />
        </li>
        <li className="flex items-center">
          <Image src="/securepayment.png" alt="Secure Payment" width={395} height={57} />
        </li>
      </ul>
    </div>
  );
};

export default HeadFooter;
