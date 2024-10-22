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

  // Función para alternar entre AboutMe y HardSkills
  const toggleComponent = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <div className="w-screen overflow-hidden min-h-[100vh] flex bg-[#1E1E1E] relative lekton-regular">
      <span className="absolute text-white z-100 flex w-full h-full items-end justify-center text-[12px]">
        coderodrigo.dev
      </span>
      <Menu />
      
      {/* Muestra AboutMe o HardSkills basado en el estado */}
      {showAboutMe ? <AboutMe /> : <HardSkills />}
      
      {/* Botón para alternar entre AboutMe y HardSkills */}
      <button
        onClick={toggleComponent}
        className="absolute bottom-10 right-10 bg-white text-black px-4 py-2 rounded"
      >
        {showAboutMe ? "Ver Habilidades Técnicas" : "Ver Sobre Mí"}
      </button>
    </div>
  );
}
