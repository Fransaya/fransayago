import { useState, useEffect } from "react";
import { Code, Database, Cloud, Mail, Github, Linkedin } from "lucide-react";

import Hero from "./components/sections/Hero";

import FeaturedProjects from "./components/sections/FeaturedProject";

import LoadingScreen from "./components/ui/LoadingScreen";

import AnimatedStats from "./components/ui/AnimatedStats";

import TechStack from "./components/sections/TechStack";

// Componente principal
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(sectionId);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <div
        className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Partículas de fondo animadas */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Navegación */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl z-40 border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FS
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {[
                    "inicio",
                    "sobre-mi",
                    "proyectos",
                    "habilidades",
                    "contacto",
                  ].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        activeSection === section
                          ? "text-white bg-blue-600"
                          : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      {section === "sobre-mi"
                        ? "Sobre Mí"
                        : section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <div className="pt-16">
          {/* Sección Hero */}
          <Hero scrollToSection={scrollToSection} />

          {/* Sección Sobre Mí */}
          <section
            id="sobre-mi"
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30 mb-4">
                  👨‍💻 Conoce mi historia
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Sobre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Mí
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="space-y-6 text-gray-300">
                      <div className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-3xl">🎓</span>
                        <div>
                          <h3 className="text-white font-semibold mb-2">
                            Formación Académica
                          </h3>
                          <p>
                            Estudiante de 3er año de Analista de Sistemas en
                            Instituto Superior Leibnitz. Finalizando en 2026 con
                            sólidos fundamentos teóricos y prácticos.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-100">
                        <span className="text-3xl">💻</span>
                        <div>
                          <h3 className="text-white font-semibold mb-2">
                            Experiencia Técnica
                          </h3>
                          <p>
                            +2 años desarrollando aplicaciones escalables con
                            Node.js, Express, React, Next.js, TypeScript,
                            PostgreSQL y MongoDB. APIs que mejoraron rendimiento
                            hasta 40%.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-200">
                        <span className="text-3xl">🤖</span>
                        <div>
                          <h3 className="text-white font-semibold mb-2">
                            Especialización en IA
                          </h3>
                          <p>
                            Certificado en desarrollo backend (UTN) y
                            fundamentos de IA (Oracle). Integro ChatGPT y
                            herramientas de IA para optimizar procesos
                            empresariales.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group-hover:translate-x-2 transition-transform duration-300 delay-300">
                        <span className="text-3xl">🚀</span>
                        <div>
                          <h3 className="text-white font-semibold mb-2">
                            CEO & Founder
                          </h3>
                          <p>
                            Fundador de SayaSoft & Omnia. Liderando proyectos
                            full-cycle con arquitecturas SOLID, Docker, y
                            colaborando con stakeholders para crear soluciones
                            reales.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="relative w-80 h-80 mx-auto">
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
                        <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center text-6xl">
                          <img
                            src="/perfil-portfolio_2.jpg"
                            alt="Francisco Sayago"
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                      "Transformando ideas en soluciones digitales escalables"
                    </h3>
                    <p className="text-gray-300 text-lg">
                      Apasionado por crear código limpio, arquitecturas sólidas
                      y experiencias de usuario excepcionales.
                    </p>
                  </div>

                  <AnimatedStats />
                </div>
              </div>
            </div>
          </section>

          {/* Sección Proyectos */}
          <section
            id="proyectos"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30 mb-4">
                  🚀 Portfolio destacado
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Proyectos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Destacados
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Soluciones reales que impactan en la eficiencia y experiencia
                  del usuario
                </p>
              </div>

              <FeaturedProjects />
            </div>
          </section>

          {/* Sección Habilidades */}
          <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-orange-600/20 text-orange-300 rounded-full text-sm border border-orange-600/30 mb-4">
                  ⚡ Stack tecnológico
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Habilidades{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Técnicas
                  </span>
                </h2>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <TechStack />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Code className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Backend Expert
                  </h3>
                  <p className="text-gray-300">
                    APIs RESTful escalables con Node.js y Express
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Database className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Database Design
                  </h3>
                  <p className="text-gray-300">
                    PostgreSQL, MongoDB y optimización de consultas
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-800/40 rounded-2xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group">
                  <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Cloud className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    DevOps & Cloud
                  </h3>
                  <p className="text-gray-300">
                    Docker, AWS basics y CI/CD para despliegues
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección Contacto */}
          <section
            id="contacto"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-16">
                <span className="inline-block px-4 py-2 bg-pink-600/20 text-pink-300 rounded-full text-sm border border-pink-600/30 mb-4">
                  📧 ¡Hablemos!
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  ¿Listo para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
                    colaborar?
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Transformemos tu idea en una solución digital escalable. Estoy
                  disponible para proyectos freelance y colaboraciones.
                </p>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      Información de Contacto
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-center gap-3">
                        <Mail className="text-blue-400" size={20} />
                        fransayago04@gmail.com
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-blue-400">📱</span>
                        +54 353 406-0236
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-blue-400">📍</span>
                        Villa María, Córdoba, Argentina
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      Redes Sociales
                    </h3>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a
                        href="https://linkedin.com/in/francisco-sayago-503777260"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors hover:scale-110 transform duration-300"
                      >
                        <Linkedin className="text-white" size={24} />
                      </a>
                      <a
                        href="https://github.com/Fransaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full transition-colors hover:scale-110 transform duration-300"
                      >
                        <Github className="text-white" size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <button
                    onClick={() =>
                      (window.location.href =
                        "mailto:fransayago04@gmail.com?subject=Propuesta de Colaboración")
                    }
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gray-400">
                © 2024 Francisco Sayago. Desarrollado con ❤️ y mucho ☕
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
