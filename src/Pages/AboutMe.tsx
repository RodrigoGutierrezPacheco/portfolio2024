import { useEffect, useState } from "react";

interface AboutMeProps {
  shouldAnimate: boolean;
}

export default function AboutMe({ shouldAnimate }: AboutMeProps) {
  const [iniciar, setIniciar] = useState(false);

  useEffect(() => {
    if (shouldAnimate) {
      setIniciar(true);
    } else {
      setIniciar(false); // Detenemos la animación si se desactiva
    }
  }, [shouldAnimate]);

  return (
    <>
      <span className="svg text-[30px] flex text-white font-semibold absolute z-100 justify-center w-full h-full mt-[110px] tracking-widest">
        &lt;AboutMe /&gt;
      </span>
      <div className="w-screen min-h-[100vh] flex items-center justify-center relative">
        <div className="flex flex-col mt-14  w-screen items-center text-white gap-2">
          <span
            className={`${
              iniciar ? "typewriter" : ""
            } text-[25px] tracking-wider`}
          >
            Hi, my name is Rodrigo.
          </span>
          <div className="flex flex-col mr-2 mt-4 h-full">
            <span>&lt;AboutMe&gt;</span>
            <div className="border-l-2 border-[#363636] pl-4 w-[300px] mt-2 mb-2 ml-5 tracking-wide">
              <span className="blinking-cursor">
                Hello! I'm a front-end developer based in Mexico, passionate
                about creating captivating and functional web experiences. My
                focus is on combining technical skills with creative design to
                bring digital projects to life. I'm constantly seeking ways to
                improve and learn new technologies to stay updated in an
                ever-evolving field.
              </span>
            </div>
            <span>&lt;/AboutMe&gt;</span>
          </div>
        </div>
        {/* Esquinas superiores */}
        <div className="absolute top-0 left-0 w-[35vw] sm:w-40 h-32 p-3 rounded-tl-2xl border-l-[1rem] border-t-[1rem] border-green-900">
          <span className="">
            <img className="w-7" src="/gmail.png" />
          </span>
        </div>
        <div className="absolute top-0 right-0 w-[35vw] sm:w-40 h-32 flex items-start justify-end p-3 rounded-tr-2xl border-r-[1rem] border-t-[1rem] border-green-900">
          <img className="w-7" src="/linkedin.png" />
        </div>
        {/* Esquinas inferiores */}
        <div className="flex items-end p-3 justify-start absolute bottom-0 left-0 w-[35vw] sm:w-40 h-32 rounded-bl-2xl border-l-[1rem] border-b-[1rem] border-green-900">
          <img className="w-7" src="/github.png" />
        </div>
        <div className="absolute bottom-0 right-0 w-[35vw] sm:w-40 h-32 rounded-br-2xl border-r-[1rem] border-b-[1rem] border-green-900 flex items-end justify-end p-3">
          <img className="w-7" src="/avatar.png" />
        </div>
      </div>
    </>
  );
}
