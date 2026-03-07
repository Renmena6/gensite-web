import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Politicas from './pages/Politicas';

const Home = () => (
  <>
    <Hero />
    <AboutUs />
    <Services />
    <Projects />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    // Evita que se duplique el chatbot
    if (document.getElementById('gensite-chatbot-iframe')) return;

    const iframe = document.createElement('iframe');
    iframe.id = 'gensite-chatbot-iframe';
    
    // Usamos la ruta directa. Asegúrate de que el archivo esté en /public
    iframe.src = '/gensite-chatbot.html'; 
    
    // AJUSTE: Reducimos el ancho inicial para que no tape TODA la pantalla 
    // y permitimos que sea siempre interactivo.
    iframe.style.cssText = `
      position: fixed; 
      bottom: 20px; 
      right: 20px;
      width: 380px; 
      height: 600px;
      border: none; 
      z-index: 10000;
      background: transparent;
      pointer-events: auto; /* IMPORTANTE: Volvemos a auto para que sea clickable */
    `;
    
    iframe.setAttribute('allowtransparency', 'true');
    document.body.appendChild(iframe);

    return () => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/politicas" element={<Layout showNavbar={false}><Politicas /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;