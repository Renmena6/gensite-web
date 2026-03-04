import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo y Eslogan */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black tracking-tighter text-blue-600 Montserrat mb-6">
              GEN<span className="text-slate-900">SITE</span>
            </div>
            <p className="text-slate-500 text-base max-w-sm leading-relaxed">
              Elevando el estándar digital mediante desarrollo web de alto rendimiento y arquitectura de inteligencia artificial.
            </p>
          </div>

          {/* Servicios - Actualizado */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Servicios</h4>
            <ul className="text-slate-500 text-sm space-y-4 font-medium">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Desarrollo Web Premium</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Agentes de IA & Automatización</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">E-commerce Escalable</li>
            </ul>
          </div>

          {/* Empresa & Legal */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">Explorar</h4>
            <ul className="text-slate-500 text-sm space-y-4 font-medium">
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Proyectos</li>
              <li className="hover:text-blue-600 transition-colors cursor-pointer">Sobre Nosotros</li>
              {/* Link de Políticas solicitado */}
              <li className="hover:text-blue-600 transition-colors cursor-pointer text-slate-400 italic">
                Políticas de Privacidad
              </li>
            </ul>
          </div>

        </div>

        {/* Línea final y Copyright */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            © 2026 GenSite Web & AI Labs • Santa Fe, Argentina
          </p>
          <div className="flex gap-6">
            {/* Espacio para redes sociales si las tuvieses en el futuro */}
            <span className="text-[10px] font-black text-blue-600 tracking-tighter uppercase">Future Ready Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;