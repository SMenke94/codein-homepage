import React from 'react';
import './styles/index.scss';
import Hero from './components/Hero';
import Values from './components/Values';
import Mission from './components/Mission';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import References from './components/References';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Values />
      <Services />
      <Portfolio />
      <Team />
      {/* <References /> */}
      <Contact />
    </div>
  );
};

export default App;
 