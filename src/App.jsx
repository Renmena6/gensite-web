import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import IASolutions from './components/IASolutions';


function App() {
  return (
    <Layout>
      <Hero />
      <Services />

      <IASolutions />
    </Layout>
  );
}

export default App;