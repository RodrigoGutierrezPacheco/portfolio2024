import "./styles.css";
import { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu.tsx";
import AboutMe from "./AboutMe.tsx";
import HardSkills from "./HardSkills.tsx";

export default function Inicio() {
  const [showAboutMe, setShowAboutMe] = useState(true); // Estado para alternar entre los componentes

  useEffect(() => {
    // Función para ajustar la altura real del viewport
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Ajustar la altura al cargar la página y al cambiar el tamaño de la ventana
    window.addEventListener("resize", setVh);
    setVh();

    return () => window.removeEventListener("resize", setVh); // Cleanup
  }, []);

  useEffect(() => {
    // Variables para el inicio y final del toque
    let touchStartX = 0;
    let touchEndX = 0;

    // Función que captura el inicio del toque
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    // Función que captura el final del toque y determina la dirección del swipe
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture(); // Verifica la dirección del deslizamiento
    };

    // Función para manejar el deslizamiento
    const handleSwipeGesture = () => {
      if (touchStartX - touchEndX > 50) {
        // Deslizar a la izquierda
        setShowAboutMe(false); // Mostrar HardSkills
      } else if (touchEndX - touchStartX > 50) {
        // Deslizar a la derecha
        setShowAboutMe(true); // Mostrar AboutMe
      }
    };

    // Añadir los eventos de toque
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="w-screen overflow-hidden min-h-[100vh] flex bg-[#1E1E1E] relative lekton-regular">
      <span className="absolute text-white z-100 flex w-full h-full items-end justify-center text-[12px]">
        coderodrigo.dev
      </span>
      <Menu />

      {/* Muestra AboutMe o HardSkills basado en el estado */}
      {showAboutMe ? <AboutMe /> : <HardSkills />}
    </div>
  );
}
