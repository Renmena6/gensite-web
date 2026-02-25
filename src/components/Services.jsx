import React from 'react';

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Nuestros Servicios</h2>
        <div className="h-1 w-20 bg-blue-600"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 group relative overflow-hidden bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
          <div className="relative z-10">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">Core Business</span>
            <h3 className="text-3xl font-bold mt-2 mb-4">Desarrollo Web Profesional</h3>
            <p className="text-slate-400 max-w-md mb-8">
              Creamos sitios ultra-rápidos usando React y Tailwind CSS. Diseños únicos, 100% responsive y optimizados para SEO.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm font-medium">
              <li className="flex items-center gap-2">✅ Landing Pages</li>
              <li className="flex items-center gap-2">✅ E-commerce</li>
              <li className="flex items-center gap-2">✅ Dashboards</li>
              <li className="flex items-center gap-2">✅ Mantenimiento</li>
            </ul>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition duration-500"></div>
        </div>

        <div className="bg-white border-2 border-slate-100 rounded-3xl p-10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl">🤖</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Potencia con IA</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Llevamos tu web al siguiente nivel integrando agentes inteligentes que automatizan tus ventas y soporte técnico.
            </p>
          </div>
          <a href="#ia-solutions" className="mt-8 text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
  Saber más <span>→</span>
</a>
        </div>
      </div>
    </section>
  );
};

export default Services;