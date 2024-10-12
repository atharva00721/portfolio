import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="text-white max-w-[80%] mx-auto mt-5 md:my-20">
      <h2 className="max-w-7xl pl-4 mb-5 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        About Me
      </h2>
      <hr className="mb-5" />
      <BentoGrid className="max-w-full mx-auto grid-cols-2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            // icon={item.icon}
            className={i === 1 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const TechStack = () => (
  <div className="max-lg:w-100 bg-bg-[#1c1c1e]/0.5 p-3 rounded-xl shadow-2xl md:w-auto">
    <h1 className="flex gap-2 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
      <IconSignature className="h-6 w-6 text-neutral-500" />
      My Skills
    </h1>
    <p className="pt-3 md:pt-5 pb-2 font-normal text-sm md:text-base">
      - Backend
      <p className="py-3">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=nodejs,py,flask," />
        </a>
      </p>
      - Frontend
      <p className="py-3">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=ts,js,react,nextjs,tailwind,vite,materialui&perline=4" />
        </a>
      </p>
      - Tools
      <p className="py-2">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=git,github,vscode,notion" />
        </a>
      </p>
    </p>
  </div>
);
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const ImgMe = () => (
  <Image
    src="/images/me.jpg"
    alt="Atharva Raj Singh Thakur"
    width={400}
    height={400}
    className="rounded-xl"
  />
);

const items = [
  {
    title: "",
    description: (
      <div>
        <h2 className="flex gap-2 font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
          <IconClipboardCopy className="h-6 w-6 text-neutral-500 bg-[1c1c1e]" />
          My Background
        </h2>
        <p className=" font-normal text-sm md:text-base">
          I am currently a student at CDGI. Throughout my journey, Ive had the
          privilege of participating in various projects, including emerging
          victorious in both the Citro Hackathon and the Hackhive Hackathon.
          These experiences have honed my skills and fueled my passion for
          leveraging technology to make a meaningful impact.
        </p>
        <div className="flex flex-row gap-5 items-start mt-5">
          <div className="  py-2 text-black font-bold rounded-xl block text-xs">
            <a
              className="bg-white px-4 py-2 rounded-lg"
              href="https://github.com/atharva00721"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="py-2 text-black font-bold rounded-xl block text-xs">
            <a
              className="bg-white px-4 py-2 rounded-lg"
              href="https://www.linkedin.com/in/atharvarajthakur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className="py-2 text-black font-bold rounded-xl block text-xs">
            <a
              className="bg-white px-4 py-2 rounded-lg"
              href="https://www.instagram.com/dumbdumpssss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    ),
    header: <ImgMe />,
    className: "md:col-span-2",
  },
  {
    title: "",
    description: <TechStack />,
    header: (
      <div>
        <h2 className="flex gap-2 font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
          <IconFileBroken className="h-6 w-6 text-neutral-500" />
          Who am I?
        </h2>
        <p className="pb-5 font-normal text-sm md:text-base">
          Hello! Im Atharva Raj Singh Thakur, a passionate programmer based in
          Indore. With a keen eye for detail and a love for creativity, I
          constantly seek ways to push the boundaries of technology. Whether
          its solving complex problems or building innovative solutions, my
          goal is to create meaningful, lasting impacts. I believe in the power
          of technology to transform lives and make the world a better place.
          Always eager to learn, I strive to enhance my skills while
          contributing to projects that drive progress and inspire change.
        </p>
      </div>
    ),
    className: "md:col-span-2",
  },
  //   {
  //     title: "The Art of Design",
  //     description: "Discover the beauty of thoughtful and functional design.",
  //     header: <Skeleton />,
  //     className: "md:col-span-2",
  //     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  //   },
];
