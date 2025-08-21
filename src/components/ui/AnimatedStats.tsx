import { useEffect } from "react";
import { useState } from "react";

// Componente de estadísticas animadas
const AnimatedStats = () => {
  const [stats, setStats] = useState([
    { label: "Años de Experiencia", value: 0, target: 2, suffix: "+" },
    { label: "Proyectos Completados", value: 0, target: 15, suffix: "+" },
    { label: "Tecnologías Dominadas", value: 0, target: 12, suffix: "" },
    { label: "Satisfacción Cliente", value: 0, target: 98, suffix: "%" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: stat.value < stat.target ? stat.value + 1 : stat.target,
        }))
      );
    }, 100);

    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group hover:scale-110 transition-transform duration-300"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-shadow">
            <span className="text-2xl font-bold text-white">
              {stat.value}
              {stat.suffix}
            </span>
          </div>
          <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedStats;
