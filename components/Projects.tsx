"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconSignature } from "@tabler/icons-react";

export function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="text-white max-w-[80%] mx-auto mt-5 md:my-20" id="projects">
      <h2 className="max-w-7xl mx-auto text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ">
        Projects
      </h2>
      <hr className="mb-5" />

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 glassmorphism2 h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2.5 m-1 right-2 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-50"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl h-full md:h-[90%] md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-auto noscrollbarFirefox noscrollbarIE noscrollbarChrome"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="p-5"
              >
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-lg rounded-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.p className="text-white text-sm md:text-base font-medium font-sans text-left">
                      {active.category}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl md:text-5xl font-bold text-neutral-700 mt-4 dark:text-white mb-5"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-full bg-[#1c1c1e] rounded-xl mt-10 mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-center gap-0">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={500}
                  height={500}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
                {/* <motion.p
                  layoutId={`category-${card.category}-${id}`}
                  className="text-white text-sm md:text-base font-medium font-sans text-left"
                >
                  {card.category}
                </motion.p> */}
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "A Simple ToDo Web Application",
    title: "ToDo Web App",
    src: "/images/Todos.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/ToDo-App",
    content: () => (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Basic ToDo Web App
          </span>
          , a simple and user-friendly task management web application. Built
          with
          <span className="font-bold"> React.js</span> and styled using
          <span className="font-bold"> Tailwind CSS</span>, this ToDo app helps
          users to add, edit, and organize their daily tasks efficiently.
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            <IconSignature className="h-6 w-6 text-neutral-500" />
            TechStack For the Project
          </h5>
          <span className="pt-3 md:pt-5 pb-2 font-normal text-sm md:text-base">
            - Frontend Framework
            <span className="py-3 ">
              <p className="space-y-2">
                <img
                  src="https://skillicons.dev/icons?i=react,tailwind"
                  alt="Frontend"
                />
              </p>
            </span>
          </span>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Features
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Add new tasks</li>
            <li>Edit existing tasks</li>
            <li>Organize tasks by priority</li>
            <li>Delete tasks once completed</li>
          </ul>
          <Image
            priority
            width={1000}
            height={1000}
            src={"/images/Todos.png"}
            alt={"todoApp"}
            className="w-full mt-5 rounded-xl object-cover"
          />
        </div>
      </div>
    ),
    category: "Web Development",
  },
  {
    description: "A Video Calling Web App",
    title: "Ather Connect",
    src: "/images/Aetherconnect.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/AetherConnect",
    content: () => (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            AtherConnect
          </span>
          , a web-based video calling application built using
          <span className="font-bold"> Next.js</span>,
          <span className="font-bold"> Tailwind CSS</span>,
          <span className="font-bold"> Clerk</span>, and
          <span className="font-bold"> StreamAPI</span>. The platform allows
          users to schedule and record meetings, interact with emoji reactions,
          and chat with participants in real time, enhancing the video
          conferencing experience.
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            <IconSignature className="h-6 w-6 text-neutral-500" />
            TechStack For the Project
          </h5>
          <span className="pt-3 md:pt-5 space-y-2 pb-2 font-normal text-sm md:text-base">
            - Frontend Framework
            <span className="py-3 ">
              <p className="space-y-2">
                <img
                  src="https://skillicons.dev/icons?i=nextjs,tailwind"
                  alt="Frontend"
                />
              </p>
            </span>
            - Authentication
            <span className="py-3">
              <p className="code-block ">Clerk Auth</p>
            </span>
            - Video & Chat API
            <span className="py-2">
              <p className="code-block ">Stream API</p>
            </span>
          </span>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Features
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Schedule a meeting</li>
            <li>Record meetings for future reference</li>
            <li>React with emojis during meetings</li>
            <li>Chat with participants in real-time</li>
          </ul>
          <Image
            priority
            width={1000}
            height={1000}
            src={"/images/Aetherconnect.png"}
            alt={"atherconnect"}
            className="w-full mt-5 rounded-xl object-cover"
          />
        </div>
      </div>
    ),
    category: "Web Development",
  },
  {
    description: "AI-surveillance",
    title: "The Watcher",
    src: "/images/theWatcher.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/The-Watcher",
    content: () => (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The Watcher
          </span>
          , an AI-powered surveillance system that processes real-time CCTV
          footage to detect violence, crimes, or accidents. By identifying
          unusual events and alerting authorities, the project aims to enhance
          public safety.
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            <IconSignature className="h-6 w-6 text-neutral-500" />
            TechStack For the Project
          </h5>
          <span className="pt-3 md:pt-5 pb-2 font-normal text-sm md:text-base">
            - AI/ML Frameworks
            <span className="py-3 ">
              <p className="space-y-2">
                <img
                  src="https://skillicons.dev/icons?i=pytorch,tensorflow"
                  alt="Backend"
                />
                <span className="code-block ">CLIP Model (OpenAI)</span>
              </p>
            </span>
            - Video Processing
            <span className="py-3">
              <p className="space-y-3">
                <img
                  src="https://skillicons.dev/icons?i=opencv,py"
                  alt="Frontend"
                />
              </p>
            </span>
            - Web Framework & User Interface
            <span className="py-2">
              <p className="space-y-3">
                <img src="https://skillicons.dev/icons?i=react" alt="Backend" />
                <span className="code-block">Streamlit</span>
              </p>
            </span>
            - Backend & APIs
            <span className="py-2">
              <p className="space-y-2">
                <img
                  src="https://skillicons.dev/icons?i=flask,fastapi"
                  alt="Backend"
                />
                {/* <span className="code-block ">Streamlit</span> */}
              </p>
            </span>
          </span>
          <Image
            priority
            width={1000}
            height={1000}
            src={"/images/theWatcher.png"}
            alt={"thewatcher"}
            className="w-full mt-5 rounded-xl object-cover"
          />
        </div>
      </div>
    ),
    category: "AI/ML",
  },
];
