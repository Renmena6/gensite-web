import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="text-xl font-black tracking-tighter text-blue-600 mb-4">
              GEN<span className="text-slate-900">SITE</span>
            </div>
            <p className="text-slate-500 text-sm">
              Transformando negocios con webs de alto rendimiento y soluciones de IA personalizadas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Servicios</h4>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>Diseño Web</li>
              <li>E-commerce</li>
              <li>Agentes de IA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="text-slate-600 text-sm space-y-2">
              <li>Sobre Nosotros</li>
              <li>Proyectos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">OK</button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-xs">
          © 2026 GenSite Web & AI Labs.
        </div>
      </div>
    </footer>
  );
};

export default Footer;