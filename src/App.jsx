import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Layout>
      <Hero />
      <AboutUs/>
      <Services />
      <Projects />
      <Contact/>
    </Layout>
  );
}

export default App;