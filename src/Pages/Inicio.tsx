import "./styles.css";
import { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu.tsx";
import AboutMe from "./AboutMe.tsx";
import HardSkills from "./HardSkills.tsx";

export default function Inicio() {
  const [showAboutMe, setShowAboutMe] = useState(true); // Estado para alternar entre los componentes
  const [isAnimating, setIsAnimating] = useState(false); // Estado para manejar la animación
  const [shouldAnimate, setShouldAnimate] = useState(true); // Controla si se inicializa la animación

  useEffect(() => {
    // Función para ajustar la altura real del viewport
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setVh);
    setVh();

    return () => window.removeEventListener("resize", setVh); // Cleanup
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
      if (isAnimating) return; // Evitar animación múltiple
      if (touchStartX - touchEndX > 50) {
        // Deslizar a la izquierda (mostrar HardSkills)
        triggerAnimation(false);
      } else if (touchEndX - touchStartX > 50) {
        // Deslizar a la derecha (mostrar AboutMe)
        triggerAnimation(true);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isAnimating]);

  const triggerAnimation = (showAbout: boolean) => {
    setIsAnimating(true);
    setShouldAnimate(false); // Detenemos la animación antes de cambiar
    setTimeout(() => {
      setShowAboutMe(showAbout);
      setShouldAnimate(true); // Reiniciamos la animación después del cambio
      setIsAnimating(false);
    }, 300); // Tiempo de la animación
  };

  return (
    <div className="w-screen overflow-hidden min-h-[100vh] flex bg-[#1E1E1E] relative lekton-regular">
      <span className="absolute text-white z-100 flex w-full h-full items-end justify-center text-[12px]">
        coderodrigo.dev
      </span>
      <Menu />

      {/* Contenedor con animación */}
      <div className={`transition-container ${isAnimating ? 'animating' : ''}`}>
        <div className={`view ${showAboutMe ? 'show' : 'hide'}`}>
          <AboutMe shouldAnimate={shouldAnimate} />
        </div>
        <div className={`view ${!showAboutMe ? 'show' : 'hide'}`}>
          <HardSkills shouldAnimate={shouldAnimate} />
        </div>
      </div>
    </div>
  );
}
