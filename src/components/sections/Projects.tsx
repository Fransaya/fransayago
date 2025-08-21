import FeaturedProjects from "./FeaturedProject";
import TechStack from "./TechStack";

import { Code, Database, Cloud } from "lucide-react";

const Projects = () => {
  return (
    <>
      {/* Proyectos */}
      <section
        id="proyectos"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-200 text-center mb-12 opacity-0 animate-fade-in-up">
            Proyectos
          </h2>
          <FeaturedProjects />
        </div>
      </section>

      {/* Habilidades mejorada */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-200 text-center mb-12 opacity-0 animate-fade-in-up">
            Habilidades
          </h2>
          <TechStack />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Code,
                title: "Backend",
                desc: "APIs con Node.js y Express",
              },
              {
                icon: Database,
                title: "Databases",
                desc: "PostgreSQL, MongoDB",
              },
              { icon: Cloud, title: "DevOps", desc: "Docker, AWS, CI/CD" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon
                  className="text-blue-500 dark:text-blue-400 mx-auto mb-4"
                  size={36}
                />
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
