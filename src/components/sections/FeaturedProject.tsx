import { ExternalLink } from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Omnia - Plataforma de IA",
      description:
        "Plataforma centralizada de agentes y automatizaciones de IA. Desarrollada con Next.js, TypeScript, Node.js, Express, PostgreSQL y MongoDB, integrando ChatGPT API.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "IA"],
      link: "https://omnia-ar.com/",
      gradient: "from-purple-600 to-blue-600",
      impact: "40% mejora en eficiencia",
    },
    {
      title: "ValuSport E-commerce",
      description:
        "Catálogo online completo para tienda de indumentaria. Optimizado con Next.js, Supabase y Tailwind CSS para máximo rendimiento.",
      tech: ["Next.js", "Supabase", "Tailwind", "E-commerce"],
      link: "https://valusport.vercel.app",
      gradient: "from-green-600 to-teal-600",
      impact: "UX mejorada +60%",
    },
    {
      title: "Landing Diseñadora Gráfica",
      description:
        "Landing page responsive con Next.js 15, API Routes para emails y diseño adaptativo que potencia la visibilidad profesional.",
      tech: ["Next.js 15", "API Routes", "Responsive"],
      link: "https://edisenos.vercel.app",
      gradient: "from-pink-600 to-rose-600",
      impact: "Conversión +45%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          ></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-green-400 text-sm font-medium">
                {project.impact}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-sm">Ver proyecto</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
