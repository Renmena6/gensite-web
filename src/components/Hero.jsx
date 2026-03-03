import React from 'react';

const Hero = () => {
  return (
    <header id="inicio" className="relative py-32 md:py-48 px-6 overflow-hidden bg-slate-950">
      
      {/* Fondo con Efecto de Scroll usando solo Tailwind */}
<div 
  className="absolute inset-0 z-0 opacity-60 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/img/banner1.jpeg')" }}
>
  {/* El degradado (Overlay) */}
  <div className="absolute inset-0 bg-linear-to-b from-slate-980/40 via-transparent to-slate-950/20"></div>
</div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Badge superior */}
        <span className="bg-blue-600/50 text-blue-400 border border-blue-500/80 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
          AGENCIA DE IA & WEB
        </span>

        {/* Título Principal - Cambiado a blanco para fondo oscuro */}
<h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
  Automatiza tu éxito con <br />
  <span 
    className="text-blue-500"
    style={{ 
      textShadow: '0px 0px 1px rgba(0, 0, 0, 5), 0px 1px 1px rgba(0, 0, 0, 5)' 
    }}
  >
    Webs Inteligentes
  </span>
</h1>

        {/* Descripción - Color suavizado para fondo oscuro */}
        <p className="text-xl text-slate-300 max-w-2xl mb-10">
          Diseñamos experiencias digitales que no solo se ven bien, sino que piensan. 
          Integramos agentes de IA para escalar tu negocio.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 inline-block text-center"
          >
            Empezar ahora
          </a>

           <a
            href="#servicios"
            className="bg-gray-800 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 inline-block text-center"
          >
            Servicios
          </a>

        </div>
      </div>
    </header>
  );
};

export default Hero;