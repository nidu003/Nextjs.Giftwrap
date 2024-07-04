import React from 'react';
import NavBar from './Components/Navbar';
import HeroPage from './Components/HeroPage';
import HeadFooter from './Components/HeadFooter';
import Do from './Components/Do';
import HowItWorks from './Components/HowItWorks';
import GiftWrap from './Components/GiftWrap';
import ImageGrid from './Components/ImageGrid';
import Gallery from './Components/Gallery';
import Features from './Components/Features';
import Footer from './Components/Footer';

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
