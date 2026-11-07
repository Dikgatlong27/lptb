import React from 'react';
import Hero from '../../components/HomePage/Hero';
import AbtLPTB from '../../components/HomePage/AbtLPTB';
import Svc from '../../components/HomePage/Svc';
import WhyChooseUs from '../../components/HomePage/WhyChooseUs';
import Clients from '../../components/HomePage/Clients';
import CTA from '../../components/HomePage/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <AbtLPTB />
      <Svc />
      <WhyChooseUs />
      <Clients />
      <CTA />
    </main>
  );
};

export default Home;
