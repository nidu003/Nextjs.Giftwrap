import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeadFooter = () => {
  return (
    <div className="headfooter-container bg-gray-100 py-4">
      <ul className="headfooternav flex flex-wrap justify-center items-center space-x-4">
        <li className="flex items-center">
          <Image src="/freeshipping.png" alt="" width={195} height={28} />
        </li>
        <li className="flex items-center">
          <Image src="/easyreturn.png" alt="" width={195} height={28} />
        </li>
        <li className="flex items-center">
          <Image src="/samedaydelivery.png" alt="" width={195} height={28} />
        </li>
        <li className="flex items-center">
          <Image src="/securepayment.png" alt="" width={195} height={28} />
        </li>
      </ul>
    </div>
  );
};

export default HeadFooter;
