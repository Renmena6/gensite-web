import React from 'react';
import { HiOutlineCode, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineVideoCamera } from 'react-icons/hi';

const Services = () => {
  const serviceList = [
    { 
      icon: <HiOutlineCode />, 
      title: "Desarrollo Web", 
      desc: "Desarrollamos plataformas Fullstack. Diseño moderno y escalable enfocado en la conversión y velocidad extrema." 
    },
    { 
      icon: <HiOutlineLightningBolt />, 
      title: "IA & Automatización", 
      desc: "Flujos inteligentes con n8n para conectar tus apps (WhatsApp, CRM, Gmail) y agentes autónomos que trabajan 24/7 por vos." 
    },
    { 
      icon: <HiOutlineChartBar />, 
      title: "Business Intelligence", 
      desc: "Transformamos tus datos en Dashboards dinámicos. Visualización de KPIs en tiempo real para decisiones basadas en evidencia." 
    },
    { 
      icon: <HiOutlineVideoCamera />, 
      title: "Factoría de Contenido", 
      desc: "Producción audiovisual y presentaciones de alto impacto con IA. Avatares, locuciones y activos digitales de nivel premium." 
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-24 bg-[#0a0f1a] relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000')",
      }}
    >
      
      {/* CAPA DE OPACIDAD */}
      <div className="absolute inset-0 bg-[#0a0f1a]/90 z-0"></div>

      {/* Separador superior (Wave) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 120 0 0C166.6 0 333.3 0 500 0C666.7 0 833.3 0 1000 0C1166.7 0 1333.3 0 1500 0V120Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 mt-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white Montserrat tracking-tight mb-4 uppercase">
            Soluciones <span className="text-blue-500 italic">Inteligentes</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 font-medium max-w-xl mx-auto">
            Impulsamos la eficiencia operativa de tu empresa mediante tecnología de vanguardia.
          </p>
        </div>

        {/* Grilla ajustada a 2 columnas en tablet y desktop para que los 4 queden simétricos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/5 rounded-4xl p-8 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-500 group shadow-2xl flex flex-col h-full"
            >
              <div className="text-5xl text-blue-500 mb-6 transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 Montserrat uppercase tracking-tighter leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium text-sm grow">
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