"use client";


import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TypeAnimation } from "react-type-animation";


export function AuroraBackgroundDemo() {
  return (
    <div className="overflow-hidden" id="home">
      <BackgroundGradientAnimation>
        <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-1xl text-center">
          <p className="drop-shadow-2xl text-gradient-to-b from-white/80 to-white/20 text-8xl sm:text-7xl md:text-9xl">
            
            <div>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Hello!",
                  1000,
                  "Namaste!",
                  1000,
                  "Hola!",
                  1000,
                ]}
                speed={10}
                style={{ fontSize: "5rem" }}
                repeat={Infinity}
              />
            </div>
            {/* <p className="uppercase text-3xl mt-5">I am just another coder(but better)</p> */}
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
