import { useState } from 'react';
import "./menu.css"

export default function Menu() {
  // Hook de estado para controlar si el menú está visible o no al hacer clic
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  // Función para alternar la visibilidad del menú al hacer clic
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para manejar clics en los elementos del menú
  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return (
    <div className="group">
      {/* Contenedor del menú principal */}
      <div
        onClick={toggleMenu}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer hover:border-b transition-all duration-300"
      >
        <span className="text-[20px] text-white flex items-start justify-center">
          Menu
        </span>
      </div>

      {/* Menú desplegable */}
      {(isMenuOpen || (
        <div className="group-hover:block hidden">
          <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 bg-black z-50 text-white w-56 text-center transition-all duration-300 ease-in-out">
            <li
              className={`menu-item p-2 hover:bg-gray-700 cursor-pointer relative ${
                clickedItem === "about" ? "text-sm" : "text-base"
              }`}
              onClick={() => handleItemClick("about")}
            >
              &lt;AboutMe/&gt;
            </li>
            <li
              className={`menu-item p-2 hover:bg-gray-700 cursor-pointer relative ${
                clickedItem === "work" ? "text-sm" : "text-base"
              }`}
              onClick={() => handleItemClick("work")}
            >
              &lt;Work/&gt;
            </li>
            <li
              className={`menu-item p-2 hover:bg-gray-700 cursor-pointer relative ${
                clickedItem === "contact" ? "text-sm" : "text-base"
              }`}
              onClick={() => handleItemClick("contact")}
            >
              &lt;Contact/&gt;
            </li>
          </ul>
        </div>
      )) || (
        <ul className="absolute left-1/2 transform -translate-x-1/2 mt-8 bg-black z-50 text-white w-56 text-center transition-all duration-300 ease-in-out">
          <li
            className={`menu-item p-2 hover:bg-gray-700 cursor-pointer relative ${
              clickedItem === "about" ? "text-sm" : "text-base"
            }`}
            onClick={() => handleItemClick("about")}
          >
            &lt;AboutMe/&gt;
          </li>
          <li
            className={`menu-item p-2 hover:bg-gray-700 cursor-pointer relative ${
              clickedItem === "work" ? "text-sm" : "text-base"
            }`}
            onClick={() => handleItemClick("work")}
          >
            &lt;Work/&gt;
          </li>
          <li
            className={`menu-item p-2 hover:bg-gray-700 cursor-pointer relative ${
              clickedItem === "contact" ? "text-sm" : "text-base"
            }`}
            onClick={() => handleItemClick("contact")}
          >
            &lt;Contact/&gt;
          </li>
        </ul>
      )}
    </div>
  );
}
