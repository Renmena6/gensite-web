import React from 'react';
import { HiOutlineCode, HiOutlineCog, HiOutlineSparkles } from 'react-icons/hi';

const Services = () => {
  return (
    <section 
      id="servicios" 
      className="py-24 bg-[#0a0f1a] relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ 
        /* Imagen de Redes Neuronales / IA (Más moderna que circuitos) */
        backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000')",
      }}
    >
      
      {/* CAPA DE OPACIDAD: Aquí podés ajustar el 0.85 (85%) */}
      {/* Si tu hermana la ve muy oscura, bajalo a 0.75. Si la ve muy cargada, subilo a 0.90 */}
      <div className="absolute inset-0 bg-[#0a0f1a]/85 z-0"></div>

      {/* Separador superior sutil (Wave) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120 0 0C166.6 0 333.3 0 500 0C666.7 0 833.3 0 1000 0C1166.7 0 1333.3 0 1500 0V120Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 mt-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white Montserrat tracking-tight mb-4">
            Nuestros <span className="text-blue-500 italic">Servicios</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {[
            { 
              icon: <HiOutlineCode />, 
              title: "Desarrollo Web", 
              desc: "Sistemas escalables y plataformas de alto rendimiento diseñadas para convertir visitas en clientes reales." 
            },
            { 
              icon: <HiOutlineSparkles />, 
              title: "Inteligencia Artificial", 
              desc: "Implementación de modelos avanzados y agentes autónomos para optimizar la toma de decisiones." 
            },
            { 
              icon: <HiOutlineCog />, 
              title: "Automatización", 
              desc: "Conexión inteligente de flujos de trabajo para que tu empresa opere 24/7 sin errores manuales." 
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/3 rounded-[2.5rem] p-10 border border-white/10 hover:border-blue-500/40 hover:bg-white/8 transition-all duration-500 group shadow-2xl"
            >
              <div className="text-6xl text-blue-500 mb-8 transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 Montserrat">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;