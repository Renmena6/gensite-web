import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Politicas from './pages/Politicas';
import ChatWidget from './components/ChatWidget';

// El ChatWidget se queda acá, dentro de Home
const Home = () => (
  <>
    <Hero />
    <AboutUs />
    <Services />
    <Projects />
    <Contact />
    <ChatWidget /> 
  </>
);

function App() {
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