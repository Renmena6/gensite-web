import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grilla Bento: Estructura de bloques moderna */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Bloque Principal: El "Core" de la empresa */}
          <div className="md:col-span-8 bg-slate-50 rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-center border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-500">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-6 Montserrat">
              Sobre Nosotros
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 Montserrat leading-[1.1] mb-8 tracking-tighter">
              Tecnología diseñada para generar <br />
              <span className="text-blue-600">resultados</span>.
            </h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
              Somos un equipo enfocado en el desarrollo web, software y soluciones digitales para empresas que buscan 
              <strong> optimizar sus procesos y profesionalizar su gestión</strong>.
            </p>
          </div>

          {/* Bloque Lateral: Visión de Ingeniería (Color corregido: Oscuro pero con matiz azul) */}
          <div className="md:col-span-4 bg-[#0f172a] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center text-slate-100 relative overflow-hidden border border-slate-800 shadow-2xl">
            
            {/* Detalle de luz sutil en la esquina (reemplaza la línea azul sólida) */}
            <div className="absolute top-0 right-0 h-24 w-24 bg-blue-500/10 blur-[50px]"></div>
            
            <h4 className="font-bold text-blue-400 mb-4 Montserrat uppercase tracking-widest text-xs">
              Visión de Ingeniería
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Combinamos formación en ingeniería y visión empresarial para diseñar herramientas prácticas 
              y adaptadas, tanto para un comercio local como para una planta industrial.
            </p>
          </div>

          {/* Fila Inferior: Los 3 Pilares */}
          <div className="md:col-span-4 border border-slate-100 rounded-3xl p-8 hover:bg-slate-50 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-8 h-1 bg-blue-600 mb-4 group-hover:w-12 transition-all"></div>
            <h4 className="font-black text-slate-900 mb-3 text-sm Montserrat uppercase tracking-tight">
              Más que desarrollo web
            </h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Analizamos procesos e identificamos oportunidades para simplificar tareas y automatizar operaciones.
            </p>
          </div>

          <div className="md:col-span-4 border border-slate-100 rounded-3xl p-8 hover:bg-slate-50 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-8 h-1 bg-blue-600 mb-4 group-hover:w-12 transition-all"></div>
            <h4 className="font-black text-slate-900 mb-3 text-sm Montserrat uppercase tracking-tight">
              Cercanía y Crecimiento
            </h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Trabajamos codo a codo con el cliente, construyendo soluciones escalables que acompañan su evolución.
            </p>
          </div>

          <div className="md:col-span-4 border border-slate-100 rounded-3xl p-8 hover:bg-slate-50 hover:border-blue-200 transition-all duration-300 group">
            <div className="w-8 h-1 bg-blue-600 mb-4 group-hover:w-12 transition-all"></div>
            <h4 className="font-black text-slate-900 mb-3 text-sm Montserrat uppercase tracking-tight">
              Resultados Medibles
            </h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              Creemos en la tecnología que genera resultados reales y mejora la toma de decisiones.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;