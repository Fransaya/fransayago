import {
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiAngular,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiOpenai,
} from "react-icons/si";

// Componente de habilidades técnicas con animaciones
const TechStack = () => {
  const technologies = [
    {
      name: "Node.js",
      level: 95,
      color: "from-green-400 to-green-600",
      icon: <SiNodedotjs />,
    },
    {
      name: "React/Next.js",
      level: 85,
      color: "from-blue-400 to-blue-600",
      icon: (
        <>
          <SiReact /> <SiNextdotjs />
        </>
      ),
    },
    {
      name: "Express.js",
      level: 92,
      color: "from-yellow-500 to-yellow-700",
      icon: <SiExpress />,
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "from-teal-400 to-teal-600",
      icon: <SiTailwindcss />,
    },
    {
      name: "Angular",
      level: 90,
      color: "from-red-500 to-red-700",
      icon: <SiAngular />,
    },
    {
      name: "TypeScript",
      level: 85,
      color: "from-blue-500 to-blue-700",
      icon: <SiTypescript />,
    },
    {
      name: "PostgreSQL",
      level: 88,
      color: "from-blue-600 to-indigo-600",
      icon: <SiPostgresql />,
    },
    {
      name: "MongoDB",
      level: 82,
      color: "from-green-500 to-green-700",
      icon: <SiMongodb />,
    },
    {
      name: "Docker",
      level: 80,
      color: "from-blue-400 to-cyan-500",
      icon: <SiDocker />,
    },
    {
      name: "AWS",
      level: 60,
      color: "from-orange-400 to-orange-600",
      icon: <SiAmazon />,
    },
    {
      name: "AI Integration",
      level: 85,
      color: "from-purple-400 to-purple-600",
      icon: <SiOpenai />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {technologies.map((tech, index) => (
        <div key={index} className="group">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-2 text-white font-medium">
              <span className="text-xl">{tech.icon}</span>
              {tech.name}
            </span>
            <span className="text-blue-300 text-sm">{tech.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
              style={{ width: `${tech.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
