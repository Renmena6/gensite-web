import React from 'react';

const Politicas = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 Montserrat mb-10 uppercase tracking-tight border-b-4 border-blue-600 pb-4 inline-block">
          🔹 Política de Servicios
        </h1>
        
        <div className="space-y-12 text-slate-700 text-base leading-relaxed Montserrat">
          
          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">1. Alcance del Servicio</h2>
            <p>Gensite brinda servicios de:</p>
            <ul className="list-none space-y-2 pl-6 mt-4">
              <li>• Desarrollo de sitios web (Frontend y Backend)</li>
              <li>• Implementación de automatizaciones</li>
              <li>• Integración de herramientas digitales y asistentes de IA</li>
            </ul>
            <p className="mt-4">El alcance específico de cada proyecto será definido por escrito en una propuesta comercial aceptada por el Cliente.</p>
            <p>No se incluyen servicios de marketing digital, posicionamiento SEO avanzado, hosting, dominio ni mantenimiento continuo, salvo contratación expresa.</p>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">2. Modalidad de Trabajo</h2>
            <p>El proyecto inicia con la aceptación formal de la propuesta y el pago del anticipo acordado.</p>
            <p>Los plazos de entrega comienzan a correr una vez que el Cliente haya entregado toda la información necesaria (textos, imágenes, accesos, datos técnicos).</p>
            <p>Retrasos en la entrega de materiales pausarán los tiempos de ejecución.</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">3. Pagos</h2>
            <ul className="list-none space-y-3">
              <li>• Se requiere un anticipo del 30% para iniciar el proyecto.</li>
              <li>• El saldo restante deberá abonarse antes de la entrega final.</li>
              <li>• En caso de cancelación por parte del Cliente una vez iniciado el proyecto, el anticipo no será reembolsable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">4. Propiedad Intelectual</h2>
            <p>Una vez abonado el total del proyecto, el Cliente adquiere la titularidad del sitio web desarrollado.</p>
            <p>Gensite conserva el derecho de reutilizar estructuras base, metodologías y conocimientos técnicos utilizados en el desarrollo, sin afectar el uso pleno del producto por parte del Cliente.</p>
          </section>

          <section>
            <h2 className="font-black text-blue-600 text-xl mb-4 uppercase tracking-tighter">5. Herramientas de IA y Automatización</h2>
            <p>Las soluciones de IA implementadas funcionan mediante modelos probabilísticos y herramientas de terceros.</p>
            <p>Gensite no se responsabiliza por decisiones comerciales tomadas exclusivamente en base a respuestas generadas por herramientas de inteligencia artificial.</p>
            <p>El Cliente es responsable de verificar la información antes de utilizarla en decisiones críticas.</p>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">6. Mantenimiento y Actualizaciones</h2>
            <p>Salvo contratación de un plan de mantenimiento mensual, Gensite no se responsabiliza por fallos derivados de:</p>
            <ul className="list-none space-y-2 pl-6 mt-4 mb-4">
              <li>• Cambios en APIs externas</li>
              <li>• Actualizaciones de plataformas de terceros</li>
              <li>• Modificaciones realizadas por terceros</li>
            </ul>
            <p>Se incluye un período de garantía técnica de 15 días posteriores a la entrega final para corregir errores de funcionamiento propios del desarrollo.</p>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">7. Confidencialidad</h2>
            <p>Gensite se compromete a no divulgar información sensible proporcionada por el Cliente durante el desarrollo del proyecto.</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Politicas;