import React from 'react';

const IASolutions = () => {
  return (
    <section id="ia-solutions" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Soluciones con Inteligencia Artificial</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No solo instalamos herramientas, creamos sistemas que aprenden y ejecutan tareas por vos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Característica 1 */}
          <div className="flex gap-6 p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition">
            <div className="text-4xl">💬</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Agentes de Atención 24/7</h4>
              <p className="text-slate-400 text-sm">Chatbots avanzados que no solo responden, sino que cierran ventas y agendan citas en tu calendario.</p>
            </div>
          </div>

          {/* Característica 2 */}
          <div className="flex gap-6 p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition">
            <div className="text-4xl">📊</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Análisis de Datos Proactivo</h4>
              <p className="text-slate-400 text-sm">Sistemas que analizan el comportamiento de tus usuarios y te dicen qué producto vender más.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IASolutions;