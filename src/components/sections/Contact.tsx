import { Mail, Github, Linkedin, ChevronUp } from "lucide-react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section
        id="contacto"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-medium text-gray-800 dark:text-gray-200 mb-12 opacity-0 animate-fade-in-up">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Disponible para proyectos y colaboraciones.
          </p>
          <div className="space-y-4 mb-8">
            <p className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400 text-base">
              <Mail className="text-blue-500 dark:text-blue-400" size={24} />
              fransayago04@gmail.com
            </p>
            <p className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400 text-base">
              📱 +54 353 406-0236
            </p>
            <p className="flex items-center justify-center gap-3 text-gray-600 dark:text-gray-400 text-base">
              📍 Villa María, Argentina
            </p>
          </div>
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://linkedin.com/in/francisco-sayago-503777260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/Fransaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <Github size={32} />
            </a>
          </div>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:fransayago04@gmail.com?subject=Colaboración")
            }
            className="bg-blue-500 text-white px-8 py-3 rounded-sm hover:bg-blue-600 transition-colors duration-200 text-base"
          >
            Enviar Mensaje
          </button>
          <div className="mt-12">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <ChevronUp size={32} />
              Volver arriba
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
