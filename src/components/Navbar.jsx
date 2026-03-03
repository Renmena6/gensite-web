import React from 'react';


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 bg-white shadow-sm sticky top-0 z-50 h-20"> {/* Altura del nav fija */}
      
      {/* Contenedor del Logo */}
      <div className="flex items-center h-full"> {/* El contenedor mide lo mismo que el nav */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="relative">
            <img 
              src="public/img/logo1-removebg-preview.png" 
              alt="Gensite Logo" 
              className="h-50 w-auto object-contain mix-blend-multiply contrast-125 transform transition group-hover:scale-105"

            />
          </div>
        </a>
      </div>

      {/* Menú: Se mantiene centrado gracias al h-20 del nav */}
      <ul className="hidden md:flex gap-8 text-slate-600 font-medium">
        <li><a href="#inicio" className="hover:text-blue-600 transition">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-blue-600 transition">Servicios</a></li>
        <li><a href="#proyectos" className="hover:text-blue-600 transition">Proyectos</a></li>
      </ul>

      <a href="#contacto" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300">
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;