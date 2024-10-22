import { useEffect, useState } from "react";

interface HardSkillsProps1 {
  shouldAnimate: boolean;
}

export default function HardSkills1({ shouldAnimate }: HardSkillsProps1) {
  const [iniciar, setIniciar] = useState(false);
  useEffect(() => {
    if (shouldAnimate) {
      setIniciar(true);
    } else {
      setIniciar(false); // Detenemos la animación si se desactiva
    }
  }, [shouldAnimate]);
  const [images, setImages] = useState<string[]>([
    "/react.png",
    "/nextjs.png",
    "/graphql.png",
    "/html.png",
    "/css.png",
    "/js.png",
    "/tailwind.png",
    "/css.png",
  ]);
  const [animate, setAnimate] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // Nuevo estado para manejar la pausa

  // Función para mezclar el array de imágenes
  const shuffleImages = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Cambiar la posición de las imágenes cada 3 segundos
  useEffect(() => {
    if (shouldAnimate && !isPaused) {
      const interval = setInterval(() => {
        setAnimate(true); // Activar la animación
        setTimeout(() => {
          setImages((prevImages) => shuffleImages(prevImages));
          setAnimate(false); // Detener la animación después del cambio
        }, 1000); // Duración de la animación
      }, 2500); // Cambia cada 4 segundos

      return () => clearInterval(interval); // Limpiar intervalo cuando se desmonte el componente
    }
  }, [shouldAnimate, isPaused]);

  // Manejar el click para pausar o reanudar la animación
  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev); // Alternar entre pausa y reanudación
  };

  return (
    <>
      <span className="svg text-[30px] flex text-white font-semibold absolute z-100 justify-center w-full h-full mt-[110px] tracking-widest">
        &lt;HardSkills /&gt;
      </span>
      <div className="w-screen min-h-[100vh] flex items-center justify-center relative">
        <div className="flex flex-col mt-14  w-screen items-center text-white gap-2">
          <span
            className={`${iniciar ? "typewriter-hardSkills" : ""} text-[25px]`}
          >
            Code. Build. Deploy. Repeat.
          </span>
          <div className="flex flex-col mr-2 mt-4 h-full gap-2">
            <span>&lt;HardSkills&gt;</span>
            <div>
              <div
                className="border-l-2 border-[#363636] pl-4 w-[300px] mt-2 mb-2 ml-5 tracking-wide min-h-[300px]"
                onClick={handlePauseToggle} // Detener o reanudar animación al hacer click
              >
                <div className="grid grid-cols-3 gap-3">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center transition-all duration-1000 ${
                        animate ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <img
                        className="w-[86px] transform transition-transform duration-1000"
                        src={image}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span>&lt;/HardSkills&gt;</span>
          </div>
        </div>

        {/* Esquinas superiores */}
        <div className="absolute top-0 left-0 w-[35vw] sm:w-40 h-32 p-3 rounded-tl-2xl border-l-[1rem] border-t-[1rem] border-green-900">
          <span className="">
            <img className="w-7" src="/nextjs.png" />
          </span>
        </div>
        <div className="absolute top-0 right-0 w-[35vw] sm:w-40 h-32 flex items-start justify-end p-3 rounded-tr-2xl border-r-[1rem] border-t-[1rem] border-green-900">
          <img className="w-7" src="/react.png" />
        </div>
        {/* Esquinas inferiores */}
        <div className="flex items-end p-3 justify-start absolute bottom-0 left-0 w-[35vw] sm:w-40 h-32 rounded-bl-2xl border-l-[1rem] border-b-[1rem] border-green-900">
          <img className="w-7" src="/js.png" />
        </div>
        <div className="absolute bottom-0 right-0 w-[35vw] sm:w-40 h-32 rounded-br-2xl border-r-[1rem] border-b-[1rem] border-green-900 flex items-end justify-end p-3">
          <img className="w-7" src="/html.png" />
        </div>
      </div>
    </>
  );
}
