import React from 'react';
import './styles/index.scss';
import Hero from './components/Hero';
import Values from './components/Values';
import Mission from './components/Mission';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Values />
      <Services />
    </div>
  );
};

export default App;
 