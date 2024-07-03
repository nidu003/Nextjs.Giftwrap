import React from 'react';
import Image from 'next/image';

const HeadFooter = () => {
  return (
    <div className="headfooter-container bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <ul className="headfooternav flex flex-wrap justify-center items-center">
          <li className="flex items-center space-x-2 mb-4 mx-2 sm:mx-4 md:mb-0">
            <Image src="/freeshipping.png" alt="Free Shipping" width={130} height={19} />
          </li>
          <li className="flex items-center space-x-2 mb-4 mx-2 sm:mx-4 md:mb-0">
            <Image src="/easyreturn.png" alt="Easy Returns" width={130} height={19} />
          </li>
          <li className="flex items-center space-x-2 mb-4 mx-2 sm:mx-4 md:mb-0">
            <Image src="/samedaydelivery.png" alt="Same Day Delivery" width={130} height={19} />
          </li>
          <li className="flex items-center space-x-2 mb-4 mx-2 sm:mx-4 md:mb-0">
            <Image src="/securepayment.png" alt="Secure Payment" width={130} height={19} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadFooter;