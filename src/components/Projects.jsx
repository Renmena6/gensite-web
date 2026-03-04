import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Agente de IA Inmobiliario",
      category: "Automatización",
      description: "Sistema que califica leads y agenda visitas por WhatsApp 24/7.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", // Cambié la imagen por algo más IA
      tags: ["OpenAI", "Python", "Webhooks"]
    },
    {
      title: "E-commerce con Predicción",
      category: "Desarrollo Web",
      description: "Tienda online que sugiere productos basados en el comportamiento del usuario.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      tags: ["React", "Node.js", "ML"]
    },
    {
      title: "Dashboard de Operaciones",
      category: "Software a Medida",
      description: "Panel de control centralizado para la gestión de stocks industriales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      tags: ["Tailwind", "Analytics", "Firebase"]
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 Montserrat mb-4">
            Proyectos que <span className="text-blue-600">Impactan</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para escalar tu negocio.
          </p>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              /* CAMBIO A CARDS OSCURAS: bg-slate-900 y efectos de transparencia */
              className="group bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Imagen del Proyecto */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              {/* Contenido en modo oscuro */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-500 transition-colors Montserrat">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Etiquetas con estilo Dark */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 font-black text-white text-sm group-hover:gap-4 transition-all">
                  VER DETALLES <span className="text-blue-500 text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;