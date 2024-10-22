import { useEffect, useState } from "react";

interface AboutMeProps {
  shouldAnimate: boolean;
}

export default function Projects({ shouldAnimate }: AboutMeProps) {
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
        &lt;Projects /&gt;
      </span>
      <div className="w-screen min-h-[100vh] flex items-center justify-center relative">
        <div className="flex flex-col mt-14  w-screen items-center text-white gap-2">
          <span
            className={`${
              iniciar ? "typewriterCreations" : ""
            } text-[25px] tracking-wider`}
          >
            Code and Creations.
          </span>
          <div className="flex flex-col mr-2 mt-4 h-full">
            <span>&lt;Projects&gt;</span>
            <div className="border-l-2 border-[#363636] pl-4 w-[300px] mt-2 mb-2 ml-5 tracking-wide">
              {/* Projects */}
              <div className="flex flex-col gap-2">
                <span className="flex gap-3">
                  <img className="w-36" src="/blxcktraining.png" alt="" />
                  <div className="flex flex-col gap-3">
                    <span>-BlckTraining</span>
                    <div className="grid grid-cols-3 gap-2">
                      <img className="w-10" src="/react.png" alt="" />
                      <img className="w-10" src="/html.png" alt="" />
                      <img className="w-[32px]" src="/css.png" alt="" />
                      <img className="w-[32px]" src="/js.png" alt="" />
                      <img className="w-[32px]" src="/tailwind.png" alt="" />
                    </div>
                  </div>
                </span>
                <span>
                  BlxckTraining is a web app designed to assign workout routines
                  for home, gym, or any environment where you can train.
                </span>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      window.location.href = "https://blxcktraining.app/";
                    }}
                    className="mt-2 border-2 w-fit px-3 py-1 rounded-full hover:bg-black hover:text-white"
                  >
                    Go to site
                  </button>
                </div>
              </div>
            </div>
            <span>&lt;/Projects&gt;</span>
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