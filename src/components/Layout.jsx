import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Agregamos { showNavbar = true } para controlar la visibilidad
const Layout = ({ children, showNavbar = true }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Solo se renderiza si showNavbar es true */}
      {showNavbar && <Navbar />}
      
      <main className="grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;