import React from 'react';
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