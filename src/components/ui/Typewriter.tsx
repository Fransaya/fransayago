import { useState, useEffect } from "react";

// Componente Typewriter mejorado
const Typewriter = () => {
  const texts = [
    "Full Stack Developer",
    "Backend Specialist",
    "API Architect",
    "Cloud Enthusiast",
    "IA Integration",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <span className="relative">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
