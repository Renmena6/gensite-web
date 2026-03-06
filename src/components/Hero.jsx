import React from 'react';

const Hero = () => {
  return (
    <header id="inicio" className="relative py-40 md:py-56 px-6 overflow-hidden bg-slate-950">
      
      {/* Fondo: Imagen Original Nítida pero Re-coloreada */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/img/banner2.jpeg')" }}
      >
        {/* CAPA 1: Quitamos el morado y forzamos el azul de la marca */}
        {/* Usamos 'mix-blend-multiply' para que la imagen se funda con el azul oscuro */}
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10"></div>

        {/* CAPA 2: Oscurecemos para que el texto resalte (Sin desenfoque) */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90 z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-30">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-1 rounded-full mb-8">
          <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Agencia de Software & Desarrollo Web
          </span>
        </div>

        {/* Título: Ahora con un sombreado sutil interno para despegarlo del fondo nítido */}
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.95] Montserrat tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          Automatiza tu éxito con <br />
          <span className="text-blue-500">Webs Inteligentes</span>
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-12 font-medium leading-relaxed drop-shadow-md">
          Diseñamos experiencias digitales que piensan. 
          Integramos agentes de IA para escalar tu negocio.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="#contacto"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40"
          >
            Empezar ahora
          </a>

          <a
            href="#servicios"
            className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;