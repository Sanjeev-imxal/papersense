import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import DemoPreview from '../components/DemoPreview';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <DemoPreview />
      <Footer />
    </div>
  );
};

export default Home;
