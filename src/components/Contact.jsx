import React from 'react';

const Contact = () => {
  const whatsappNumber = "543400443605";
  const email = "renzomena6@gmail.com";
  const message = encodeURIComponent("Hola GenSite, vi tu web y me gustaría automatizar mi negocio.");

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
          ¿Listo para escalar tu negocio?
        </h2>
        <p className="text-slate-600 mb-12 text-lg">
          Elegí la vía que prefieras y empecemos a trabajar en tu próxima web 
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tarjeta WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-3xl bg-green-50 border-2 border-green-100 hover:border-green-500 transition-all group"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition">💬</span>
            <h3 className="font-bold text-xl text-green-900">WhatsApp</h3>
            <p className="text-green-700 text-sm mt-2">Respuesta inmediata</p>
          </a>

          {/* Tarjeta Email */}
          <a 
            href={`mailto:${email}`}
            className="flex flex-col items-center p-8 rounded-3xl bg-blue-50 border-2 border-blue-100 hover:border-blue-500 transition-all group"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition">✉️</span>
            <h3 className="font-bold text-xl text-blue-900">Email</h3>
            <p className="text-blue-700 text-sm mt-2">{email}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;