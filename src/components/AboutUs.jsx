import React from 'react';

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Columna Izquierda: Títulos y Texto Principal */}
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
              Sobre Nosotros
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Tecnología diseñada para generar <span className="text-blue-600">resultados</span>.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Somos un equipo enfocado en el desarrollo de soluciones digitales para empresas que buscan 
              <strong> optimizar sus procesos y profesionalizar su gestión</strong>.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Combinamos formación en ingeniería y visión empresarial para diseñar herramientas prácticas 
              y adaptadas, tanto para un comercio local como para una planta industrial.
            </p>
          </div>

          {/* Columna Derecha: Tarjetas de Enfoque (Resume el texto largo) */}
          <div className="md:w-1/2 grid gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Más que desarrollo web</h4>
              <p className="text-slate-600 text-sm">
                Analizamos procesos e identificamos oportunidades para simplificar tareas y automatizar operaciones.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Cercanía y Crecimiento</h4>
              <p className="text-slate-600 text-sm">
                Trabajamos codo a codo con el cliente, construyendo soluciones escalables que acompañan su evolución.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Visión de Ingeniería</h4>
              <p className="text-slate-600 text-sm">
                Creemos en la tecnología que genera resultados medibles y mejora la toma de decisiones.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;