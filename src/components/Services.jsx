import React from 'react';

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Nuestros <span className="text-blue-500">Servicios</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Desarrollo Full Stack y sistemas de Inteligencia Artificial diseñados para escalar industrias y negocios modernos.
          </p>
        </div>

        {/* --- BLOQUE 01: FULL STACK (Bordes Sutiles Slate) --- */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em]">01. Desarrollo Full Stack</h3>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card Web 1 */}
            <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Sistemas a Medida</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aplicaciones robustas con gestión de datos y lógica compleja para optimizar procesos internos.
              </p>
            </div>

            {/* Card Web 2 */}
            <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Dashboards Industriales</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Paneles de control Full Stack para visualizar métricas críticas y rendimiento en tiempo real.
              </p>
            </div>

            {/* Card Web 3 */}
            <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Webs de Alto Rendimiento</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Interfaces ultra-rápidas enfocadas en la experiencia de usuario y conversión de clientes.
              </p>
            </div>
          </div>
        </div>

        {/* --- BLOQUE 02: IA (Bordes Azules y Brillo Sutil) --- */}
        <div id="ia-solutions">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-bold text-blue-500 uppercase tracking-[0.2em]">02. Inteligencia Artificial</h3>
            <div className="h-px flex-1 bg-blue-900/30"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card IA 1 */}
            <div className="relative group p-10 rounded-3xl bg-slate-900 border border-blue-900/30 hover:border-blue-500 transition-all duration-500 overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="text-4xl">🤖</div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Agentes de Atención 24/7</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    IA personalizada que gestiona consultas, ventas y agendamientos conectándose directo a tu base de datos.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-blue-900/20 text-blue-400 text-[10px] rounded-full border border-blue-800/30 font-mono">LlamaIndex</span>
                    <span className="px-3 py-1 bg-blue-900/20 text-blue-400 text-[10px] rounded-full border border-blue-800/30 font-mono">OpenAI</span>
                  </div>
                </div>
              </div>
              {/* Brillo de fondo sutil */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition"></div>
            </div>

            {/* Card IA 2 */}
            <div className="relative group p-10 rounded-3xl bg-slate-900 border border-blue-900/30 hover:border-blue-500 transition-all duration-500 overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="text-4xl">⚙️</div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">Automatización Inteligente</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Flujos de trabajo que analizan documentos y ejecutan tareas repetitivas sin intervención humana.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-blue-900/20 text-blue-400 text-[10px] rounded-full border border-blue-800/30 font-mono">Make/n8n</span>
                    <span className="px-3 py-1 bg-blue-900/20 text-blue-400 text-[10px] rounded-full border border-blue-800/30 font-mono">Python</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;