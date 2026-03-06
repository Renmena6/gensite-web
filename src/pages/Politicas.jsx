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
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">1. Alcance del Servicio [cite: 2]</h2>
            <p>Gensite brinda servicios de: [cite: 3]</p>
            <ul className="list-none space-y-2 pl-6 mt-4">
              <li>• Desarrollo de sitios web (Frontend y Backend) [cite: 4]</li>
              <li>• Implementación de automatizaciones [cite: 5]</li>
              <li>• Integración de herramientas digitales y asistentes de IA [cite: 6]</li>
            </ul>
            <p className="mt-4">El alcance específico de cada proyecto será definido por escrito en una propuesta comercial aceptada por el Cliente. [cite: 7]</p>
            <p>No se incluyen servicios de marketing digital, posicionamiento SEO avanzado, hosting, dominio ni mantenimiento continuo, salvo contratación expresa. [cite: 8]</p>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">2. Modalidad de Trabajo [cite: 9]</h2>
            <p>El proyecto inicia con la aceptación formal de la propuesta y el pago del anticipo acordado. [cite: 10]</p>
            <p>Los plazos de entrega comienzan a correr una vez que el Cliente haya entregado toda la información necesaria (textos, imágenes, accesos, datos técnicos). [cite: 11]</p>
            <p>Retrasos en la entrega de materiales pausarán los tiempos de ejecución. [cite: 12]</p>
          </section>

          <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">3. Pagos [cite: 13]</h2>
            <ul className="list-none space-y-3">
              <li>• Se requiere un anticipo del 30% para iniciar el proyecto. [cite: 14]</li>
              <li>• El saldo restante deberá abonarse antes de la entrega final. [cite: 15]</li>
              <li>• En caso de cancelación por parte del Cliente una vez iniciado el proyecto, el anticipo no será reembolsable. [cite: 16]</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">4. Propiedad Intelectual [cite: 17]</h2>
            <p>Una vez abonado el total del proyecto, el Cliente adquiere la titularidad del sitio web desarrollado. [cite: 18]</p>
            <p>Gensite conserva el derecho de reutilizar estructuras base, metodologías y conocimientos técnicos utilizados en el desarrollo, sin afectar el uso pleno del producto por parte del Cliente. [cite: 19]</p>
          </section>

          <section>
            <h2 className="font-black text-blue-600 text-xl mb-4 uppercase tracking-tighter">5. Herramientas de IA y Automatización [cite: 20]</h2>
            <p>Las soluciones de IA implementadas funcionan mediante modelos probabilísticos y herramientas de terceros. [cite: 21]</p>
            <p>Gensite no se responsabiliza por decisiones comerciales tomadas exclusivamente en base a respuestas generadas por herramientas de inteligencia artificial. [cite: 22]</p>
            <p>El Cliente es responsable de verificar la información antes de utilizarla en decisiones críticas. [cite: 23]</p>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">6. Mantenimiento y Actualizaciones [cite: 24]</h2>
            <p>Salvo contratación de un plan de mantenimiento mensual, Gensite no se responsabiliza por fallos derivados de: [cite: 25]</p>
            <ul className="list-none space-y-2 pl-6 mt-4 mb-4">
              <li>• Cambios en APIs externas [cite: 26]</li>
              <li>• Actualizaciones de plataformas de terceros [cite: 27]</li>
              <li>• Modificaciones realizadas por terceros [cite: 28]</li>
            </ul>
            <p>Se incluye un período de garantía técnica de 15 días posteriores a la entrega final para corregir errores de funcionamiento propios del desarrollo. [cite: 29]</p>
          </section>

          <section>
            <h2 className="font-black text-slate-900 text-xl mb-4 uppercase tracking-tighter">7. Confidencialidad [cite: 30]</h2>
            <p>Gensite se compromete a no divulgar información sensible proporcionada por el Cliente durante el desarrollo del proyecto. [cite: 31]</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Politicas;