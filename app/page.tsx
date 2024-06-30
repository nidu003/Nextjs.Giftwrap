import React from 'react';
import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import HeadFooter from './components/HeadFooter';



import Do from './components/Do';
import HowItWorks from './components/HowItWorks';
import GiftWrap from './components/GiftWrap';
import ImageGrid from './components/ImageGrid';



export default function Home() {
  return (
    <div>
      
      <div className="bg-custom">
      <NavBar />
      
        <HeroPage/>
        <HeadFooter/>
        </div>
        
       <Do/>
       <HowItWorks/>
       <GiftWrap/>
       <ImageGrid/>
       
       
       

               </div>
      
        
      
      
   
  );
}
