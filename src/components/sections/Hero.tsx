import { ChevronDown } from "lucide-react";

import Typewriter from "../ui/Typewriter";

import "styled-jsx/css";

import { Zap } from "lucide-react";
// Tipos corregidos
type HeroProps = {
  scrollToSection: (section: string) => void;
  activeSection: string;
};

// Componente Hero CORREGIDO con animaciones
const Hero = ({ scrollToSection, activeSection }: HeroProps) => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10">
        {/* Badge animado */}
        <div
          className="mb-8 animate-fade-in-up opacity-0"
          style={{ animation: "fadeInUp 1s ease-out 0.2s forwards" }}
        >
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-300 rounded-full text-sm border border-blue-500/50 mb-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shadow-lg">
            <span className="animate-wave inline-block mr-2">👋</span>
            ¡Hola! Soy desarrollador
          </span>

          {/* Nombre con animación espectacular */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-slide-in-left">
              Francisco
            </span>{" "}
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slide-in-right bg-[length:200%] animate-gradient-x">
              Sayago
            </span>
          </h1>
        </div>

        {/* Typewriter con animación */}
        <div
          className="mb-12 opacity-0"
          style={{ animation: "fadeInUp 1s ease-out 0.6s forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light mb-6 min-h-[1.5em]">
            <Typewriter />
          </h2>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transform translate-y-4 opacity-0"
            style={{ animation: "fadeInUp 1s ease-out 1s forwards" }}
          >
            Especialista en desarrollo backend con +2 años creando soluciones
            escalables. Combino Node.js, IA y arquitecturas modernas para
            transformar ideas en realidad digital.
          </p>
        </div>

        {/* Botones con animaciones increíbles */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 opacity-0"
          style={{ animation: "fadeInUp 1s ease-out 1.4s forwards" }}
        >
          <button
            onClick={() => scrollToSection("contacto")}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-blue-500/50 hover:rotate-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Trabajemos Juntos
              <Zap
                className="group-hover:animate-bounce group-hover:text-yellow-300 transition-colors duration-300"
                size={20}
              />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 animate-pulse"></div>
          </button>

          <button
            onClick={() => scrollToSection("proyectos")}
            className="group relative border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 hover:-rotate-1 hover:shadow-lg hover:shadow-blue-500/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="relative">Ver Proyectos</span>
          </button>
        </div>

        {/* Flecha con animación */}
        <div
          className="animate-bounce opacity-0"
          style={{
            animation:
              "fadeIn 1s ease-out 1.8s forwards, bounce 2s infinite 2s",
          }}
        >
          <ChevronDown
            onClick={() => scrollToSection("sobre-mi")}
            className="text-gray-400 mx-auto cursor-pointer hover:text-white transition-all duration-300 transform hover:scale-125 hover:animate-pulse"
            size={32}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out 0.4s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.8s both;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
