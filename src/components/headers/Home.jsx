import React from 'react';
import CoreServices from '../main/CoreServices';
import HeroSection from '../main/HeroSection';
import IntroductionSection from '../main/IntroductionSection';
import WhyChooseUs from '../main/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroductionSection/>
      <CoreServices />
      <WhyChooseUs />
    </div>
  )
}

export default Home
