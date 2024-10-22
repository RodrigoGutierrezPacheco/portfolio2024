export default function HardSkills() {
  return (
    <>
      <span className="svg text-[30px] flex text-white font-semibold absolute z-100 justify-center w-full h-full mt-[110px] tracking-widest">
        &lt;HardSkills /&gt;
      </span>
      <div className="w-screen min-h-[100vh] flex items-center justify-center relative">
        <div className="flex flex-col mt-14  w-screen items-center text-white gap-2">
          <span className="typewriter-hardSkills text-[25px] tracking-wider">
            Tools I craft my code with:
          </span>
          <div className="flex flex-col mr-2 mt-4 h-full gap-2">
            <span>&lt;HardSkills&gt;</span>
            <div>
              <div className="border-l-2 border-[#363636] pl-4 w-[300px] mt-2 mb-2 ml-5 tracking-wide">
                <div className="flex flex-col gap-4 h-full max-h-[300px] overflow-hidden pt-1 overflow-y-scroll">
                  {/* Frontend */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-2 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      FRONTEND DEVELOPER
                    </span>
                  </div>
                  {/* HTML CSS */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      HTML
                    </span>
                    <span className="border-white border-2 px-5 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      CSS
                    </span>
                  </div>
                  {/* Tailwind */}
                  <div className="flex gap-3" >
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      TAILWIND CSS
                    </span>
                  </div>
                  {/* React next */}
                  <div className="flex gap-2">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      REACT
                    </span>
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      NEXT
                    </span>
                  </div>
                  {/* Javascript */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      JAVASCRIPT
                    </span>
                  </div>
                  {/* Responsive design */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      RESPONSIVE DESIGN
                    </span>
                  </div>
                  {/* GRAPHQL */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      GRAPHQL
                    </span>
                  </div>
                  {/* React native */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      REACT NATIVE
                    </span>
                  </div>
                  {/* Bootstrap */}
                  <div className="flex gap-3">
                    <span className="border-white border-2 px-4 rounded-full w-fit tracking-widest hover:bg-white hover:text-black hover:font-semibold delay-100 duration-200 cursor-pointer">
                      BOOTSTRAP
                    </span>
                  </div>
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
