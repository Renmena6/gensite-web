import React from 'react';

const Navbar = () => {
  // Función genérica para scroll suave
 const handleScroll = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    // Calculamos la posición del elemento menos el alto del navbar (para que no lo tape)
    const offset = 80; 
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo: vuelve al inicio */}
      <div 
        onClick={(e) => handleScroll(e, 'inicio')}
        className="text-2xl font-black tracking-tighter text-blue-600 cursor-pointer"
      >
        GEN<span className="text-slate-900">SITE</span>
      </div>

      <ul className="hidden md:flex gap-8 text-slate-600 font-medium">
        <li className="hover:text-blue-600 cursor-pointer transition">
          <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>Inicio</a>
        </li>
        
        <li className="hover:text-blue-600 cursor-pointer transition">
          <a href="#ia-solutions" onClick={(e) => handleScroll(e, 'ia-solutions')}>IA Solutions</a>
        </li>
        
        <li className="hover:text-blue-600 cursor-pointer transition">
          <a href="#proyectos" onClick={(e) => handleScroll(e, 'proyectos')}>Proyectos</a>
        </li>
      </ul>

      <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300">
        Contacto
      </button>
    </nav>
  );
};

export default Navbar;