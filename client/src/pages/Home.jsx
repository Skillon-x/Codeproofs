import React from 'react';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import GlobalPresence from './GlobalPresence';
import Testimonials from './testimonials';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-[#0a0a0a] text-[#ffffff]">
      <Hero />
      <About />
      <Products />
      <GlobalPresence />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;