import React from 'react';

const Hero = () => {
  return (
    <header id='inicio' className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
          AGENCIA DE IA & WEB
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1]">
          Automatiza tu éxito con <br />
          <span className="text-blue-600">Webs Inteligentes</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10">
          Diseñamos experiencias digitales que no solo se ven bien, sino que piensan. Integramos agentes de IA para escalar tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all hover:-translate-y-1">
            Empezar ahora
          </button>
          <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 transition-all">
            Ver demos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;