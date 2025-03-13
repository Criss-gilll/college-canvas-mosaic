
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import CampusLife from '@/components/CampusLife';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Programs />
      <Features />
      <Stats />
      <CampusLife />
      <Testimonials />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
