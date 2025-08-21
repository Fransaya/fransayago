import { Sun, Moon } from "lucide-react";

type NavbarProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  theme: string;
  toggleTheme: () => void;
};

export default function Navbar({
  activeSection,
  scrollToSection,
  theme,
  toggleTheme,
}: NavbarProps) {
  const sections = [
    "inicio",
    "sobre-mi",
    "proyectos",
    "habilidades",
    "contacto",
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 z-40 border-b border-gray-200 dark:border-gray-800 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-2xl font-bold text-blue-500 dark:text-blue-400">
            FS
          </span>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-colors ${
                  activeSection === section
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                }`}
              >
                {section === "sobre-mi"
                  ? "Sobre Mí"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
