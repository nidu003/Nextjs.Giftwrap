import React from 'react';
import NavBar from './Components/NavBar';
import HeroPage from './Components/HeroPage';
import HeadFooter from './Components/HeadFooter';
import Do from './Components/Do';
import HowItWorks from './Components/HowItWorks';  // Assuming this component exists
import GiftWrap from './Components/GiftWrap';  // Assuming this component exists
import ImageGrid from './Components/ImageGrid';  // Assuming this component exists
import Features from './Components/Features';  // Assuming this component exists
import Gallery from './Components/Gallery';  // Assuming this component exists

export default function Home() {
  return (
    <div className="bg-custom">
      <NavBar />
      <HeroPage />
      <HeadFooter />
      <Do />
      <HowItWorks />
      <GiftWrap />
      <ImageGrid />
      <Features />
      <Gallery />
    </div>
  );
}
