import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Contact = () => {
  const whatsappNumber = "543400443605";
  const email = "renzomena6@gmail.com";
  const message = encodeURIComponent("Hola GenSite, vi tu web y me gustaría automatizar mi negocio.");

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Título con impacto pero sin ocupar media pantalla */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 Montserrat mb-4">
            ¿Impulsamos tu <span className="text-blue-600">negocio?</span>
          </h2>
          <p className="text-slate-500 font-medium">Elegí el canal que prefieras y hablemos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Tarjeta WhatsApp - Estilo Dark pero refinado */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-slate-900 p-8 rounded-4xl flex items-center justify-between border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl overflow-hidden"
          >
            {/* Efecto de luz muy sutil en el fondo al hacer hover */}
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="text-4xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white Montserrat uppercase tracking-tight">WhatsApp</h3>
                <p className="text-slate-400 text-sm">Respuesta rápida</p>
              </div>
            </div>
            
            <HiOutlineArrowRight className="text-2xl text-slate-600 group-hover:text-blue-500 group-hover:translate-x-2 transition-all relative z-10" />
          </a>

          {/* Tarjeta Email - Estilo Dark pero refinado */}
          <a 
            href={`mailto:${email}`}
            className="group relative bg-slate-900 p-8 rounded-4xl flex items-center justify-between border border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-6 relative z-10">
              <div className="text-4xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white Montserrat uppercase tracking-tight">Email</h3>
                <p className="text-slate-400 text-sm">renzomena6@gmail.com</p>
              </div>
            </div>

            <HiOutlineArrowRight className="text-2xl text-slate-600 group-hover:text-blue-500 group-hover:translate-x-2 transition-all relative z-10" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;