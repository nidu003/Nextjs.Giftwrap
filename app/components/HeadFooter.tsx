
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
        <Image src="/Group 48096363.png" alt="" width={390} height={57}/>
      </div>
        </li>
        <li>
        <div className="flex items-center space-x-2 ">
        <Image src="/Group 48096364.png" alt="" width={390} height={57}/>
      </div>
        </li><li>
        <div className="flex items-center space-x-2 ">
        <Image src="/Group 48096365.png" alt="" width={390} height={57}/>
      </div>
        </li><li>
        <div className="flex items-center space-x-2 ">
        <Image src="/Group 48096366.png" alt="" width={390} height={57}/>
      </div>
        </li>
        
      </ul>
    </div>
    </div>
    
  );
};

export default HeadFooter


