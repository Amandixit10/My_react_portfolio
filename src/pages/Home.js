/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import PText from '../components/PText';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return(
  <div>
    <p>This is a paragraph</p> 
    <HeroSection />
     <AboutSection />
     <ServiceSection />
     <ProjectSection/>
  </div>
  );
}
