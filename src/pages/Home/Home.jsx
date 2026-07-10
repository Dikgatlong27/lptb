import React from 'react'
import { Hero, AbtLPTB, Svc, YaBathoFeature, WhyChooseUs, Clients, CTA } from '../../components'
import FeaturedProjects from '../../components/HomePage/FeaturedProjects'

const Home = () => {
  return (
    <div>
        <Hero />
        <AbtLPTB />
        <Svc />
        <FeaturedProjects />
        <YaBathoFeature />
        <WhyChooseUs />
        <Clients />
        <CTA />
    </div>
  )
}

export default Home
