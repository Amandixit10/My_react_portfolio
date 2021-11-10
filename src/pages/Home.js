/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return(
  <div>
    <p>This is a paragraph</p> 
    <HeroSection />
     <AboutSection />
     <ServiceSection />
     <ProjectSection/>
     <TestimonialSection/>
     <ContactBanner/>
     <Footer/>
  </div>
  );
}

