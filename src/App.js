import React,{  Suspense } from 'react';
import './styles/index.scss';
import Hero from './components/Hero';
import Values from './components/Values';
import {MissionComp} from './components/Mission';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/essentials/Footer';

const App = () => {
  return (
    <div>
        <Hero />
        <MissionComp />
        <Services />
        <Values />
        <Portfolio />
        <Team />
        <References />
        <Contact />
        <Footer />
    </div>
  );
};

export default App;