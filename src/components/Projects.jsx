import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Cava Arch | Real Estate",
      category: "Desarrollo Web",
      description: "Landing page de alta gama para estudio inmobiliario, enfocada en arquitectura moderna y experiencia de usuario fluida.",
      image: "/img/cava-arch.png",
      tags: ["React", "Tailwind", "Framer Motion"],
      link: "https://cava-arch.vercel.app/"
    },
    {
      title: "Agente de IA Inmobiliario",
      category: "Automatización",
      description: "Sistema inteligente de calificación de leads y agendamiento automático vía WhatsApp para brokers.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
      tags: ["OpenAI", "Python", "Webhooks"],
      link: "#"
    },
    {
      title: "E-commerce con Predicción",
      category: "IA Aplicada",
      description: "Tienda online con motor de recomendaciones basado en comportamiento de compra en tiempo real.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      tags: ["Next.js", "Node.js", "ML"],
      link: "#"
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
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Soluciones tecnológicas diseñadas para escalar tu negocio al siguiente nivel.
          </p>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
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

              {/* Contenido */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-500 transition-colors Montserrat uppercase tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón con Link Real */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-black text-white text-sm group-hover:gap-4 transition-all w-fit"
                >
                  VER PROYECTO <span className="text-blue-500 text-lg">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;