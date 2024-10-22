import "./styles.css";
import { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu.tsx";
import AboutMe from "./AboutMe.tsx";
import HardSkills from "./HardSkills.tsx";
import HardSkills1 from "./HardSkills1.tsx"; // Importamos el nuevo componente

export default function Inicio() {
  const [currentView, setCurrentView] = useState(0); // 0 = AboutMe, 1 = HardSkills, 2 = HardSkills1
  const [isAnimating, setIsAnimating] = useState(false); // Estado para manejar la animación
  const [shouldAnimate, setShouldAnimate] = useState(true); // Controla si se inicializa la animación

  useEffect(() => {
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
      if (isAnimating) return;
      if (touchStartX - touchEndX > 50) {
        // Deslizar a la izquierda (ir a la siguiente vista)
        triggerAnimation("next");
      } else if (touchEndX - touchStartX > 50) {
        // Deslizar a la derecha (ir a la vista anterior)
        triggerAnimation("prev");
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isAnimating]);

  const triggerAnimation = (direction: "next" | "prev") => {
    setIsAnimating(true);
    setShouldAnimate(false); // Detenemos la animación antes de cambiar

    setTimeout(() => {
      // Cambiar la vista según la dirección del swipe
      setCurrentView((prevView) => {
        if (direction === "next") {
          return (prevView + 1) % 3; // Hay tres vistas (0, 1, 2)
        } else {
          return (prevView - 1 + 3) % 3; // Ciclar hacia atrás si se va a la izquierda
        }
      });
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
        <div className={`view ${currentView === 0 ? 'show' : 'hide'}`}>
          <AboutMe shouldAnimate={shouldAnimate} />
        </div>
        <div className={`view ${currentView === 1 ? 'show' : 'hide'}`}>
          <HardSkills shouldAnimate={shouldAnimate} />
        </div>
        <div className={`view ${currentView === 2 ? 'show' : 'hide'}`}>
          <HardSkills1 shouldAnimate={shouldAnimate} />
        </div>
      </div>
    </div>
  );
}
