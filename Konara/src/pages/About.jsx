import React from 'react';
import AboutHeroSection from '../components/sections/AboutHeroSection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import CTASection from '../components/sections/CTASection';

const About = () => {
  return (
    <div className="flex flex-col flex-1 bg-background overflow-hidden">
      <AboutHeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <CTASection />
    </div>
  );
};

export default About;
