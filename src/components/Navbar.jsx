import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo: vuelve al inicio */}
      <a 
        href="#inicio" 
        className="text-2xl font-black tracking-tighter text-blue-600 cursor-pointer hover:opacity-80 transition"
      >
        GEN<span className="text-slate-900">SITE</span>
      </a>

      <ul className="hidden md:flex gap-8 text-slate-600 font-medium">
        <li className="hover:text-blue-600 transition">
          <a href="#inicio">Inicio</a>
        </li>
        
        <li className="hover:text-blue-600 transition">
          <a href="#ia-solutions">IA Solutions</a>
        </li>
        
        <li className="hover:text-blue-600 transition">
          <a href="#proyectos">Proyectos</a>
        </li>
      </ul>

      {/* Botón Contacto como enlace para que sea funcional */}
      <a 
        href="#contacto"
        className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300 text-center"
      >
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;