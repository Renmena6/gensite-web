import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 bg-white shadow-sm sticky top-0 z-50 h-20">
      
      {/* Contenedor del Logo */}
      <div className="flex items-center h-full">
        <a href="#inicio" className="flex items-center group">
          <div className="relative">
            {/* CORRECCIÓN: Quitamos "public" de la ruta y ajustamos el h- (altura) */}
            <img 
              src="/img/logo1-removebg-preview.png" 
              alt="Gensite Logo" 
              className="h-36 w-auto object-contain transform transition group-hover:scale-105"
              /* h-16 (64px) queda perfecto dentro de un nav de h-20 (80px) */
            />
          </div>
        </a>
      </div>

      {/* Menú */}
      <ul className="hidden md:flex gap-8 text-slate-600 font-medium">
        <li><a href="#inicio" className="hover:text-blue-600 transition">Inicio</a></li>
        <li><a href="#servicios" className="hover:text-blue-600 transition">Servicios</a></li>
        <li><a href="#proyectos" className="hover:text-blue-600 transition">Proyectos</a></li>
      </ul>

      {/* Botón */}
      <a href="#contacto" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300">
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;