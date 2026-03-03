import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';

import Contact from './components/Contact';


function App() {
  return (
    <Layout>
      <Hero />
      <AboutUs/>
      <Services />

      <Contact/>
    </Layout>
  );
}

export default App;