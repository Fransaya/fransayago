import AnimatedStats from "../ui/AnimatedStats";

const AboutMe = () => {
  return (
    <>
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-200 text-center mb-12 opacity-0 animate-fade-in-up">
            Sobre Mí
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                {
                  title: "Formación Académica",
                  desc: "Estudiante de 3er año de Analista de Sistemas en Instituto Superior Leibnitz. Finalizando en 2026.",
                },
                {
                  title: "Experiencia Técnica",
                  desc: "+2 años desarrollando con Node.js, Express, React, Next.js, TypeScript, PostgreSQL y MongoDB.",
                },
                {
                  title: "Especialización en IA",
                  desc: "Certificado en backend (UTN) y IA (Oracle). Integro ChatGPT para optimizar procesos.",
                },
                {
                  title: "CEO & Founder",
                  desc: "Fundador de SayaSoft & Omnia. Proyectos full-cycle con Docker y SOLID.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="text-center opacity-0 animate-fade-in-right"
              style={{ animationDelay: "600ms" }}
            >
              <img
                src="/perfil-portfolio_2.jpg"
                alt="Francisco Sayago"
                className="w-72 h-72 rounded-full mx-auto mb-6 object-cover transition-transform duration-300 hover:scale-105"
              />
              <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-8">
                "Transformando ideas en soluciones digitales"
              </p>
              <AnimatedStats />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
