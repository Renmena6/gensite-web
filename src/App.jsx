import React, { useEffect } from 'react'; // Agregamos useEffect aquí
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
  // --- Lógica del Chatbot ---
  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = '/gensite-chatbot.html'; // Asegurate que el archivo esté en la carpeta /public
    iframe.style.cssText = `
      position: fixed; 
      bottom: 0; 
      right: 0;
      width: 420px; 
      height: 620px;
      border: none; 
      background: transparent;
      z-index: 99999;
    `;
    iframe.setAttribute('scrolling', 'no');
    document.body.appendChild(iframe);

    // Limpieza: elimina el chat si el componente se destruye (buena práctica)
    return () => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, []);
  // --------------------------

  return (
    <Router>
      <Routes>
        {/* En la Home, el Navbar se ve (valor por defecto true) */}
        <Route path="/" element={
          <Layout> 
            <Home />
          </Layout>
        } />
        
        {/* En Políticas, le decimos showNavbar={false} */}
        <Route path="/politicas" element={
          <Layout showNavbar={false}>
            <Politicas />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;