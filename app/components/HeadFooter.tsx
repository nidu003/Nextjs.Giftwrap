
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeadFooter = () => {
  return (
  
    <div className="headfooter-container">
    <div className="">
      <ul className="headfooternav ">
      
        <li>
        <div className="flex items-center space-x-2 h-57 ">
        <Image src="/freeshipping.png" alt="" width={390} height={57}/>
      </div>
        </li>
        <li>
        <div className="flex items-center space-x-2 ">
        <Image src="/easyreturn.png" alt="" width={390} height={57}/>
      </div>
        </li><li>
        <div className="flex items-center space-x-2 ">
        <Image src="/samedaydelivery.png" alt="" width={390} height={57}/>
      </div>
        </li><li>
        <div className="flex items-center space-x-2 ">
        <Image src="/securepayment.png" alt="" width={390} height={57}/>
      </div>
        </li>
        
      </ul>
    </div>
    </div>
    
  );
};

export default HeadFooter


