import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import IASolutions from './components/IASolutions';
import Contact from './components/Contact';


function App() {
  return (
    <Layout>
      <Hero />
      <Services />

      <IASolutions />
      <Contact/>
    </Layout>
  );
}

export default App;