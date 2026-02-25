import React from "react";
import Navbar from "./Navbar"; // Agregamos el punto: ./ significa "esta misma carpeta"
import Footer from "./Footer"; // Agregamos el punto: ./

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;