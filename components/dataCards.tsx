import { IconSignature } from "@tabler/icons-react";
import Image from "next/image";

export interface CardData {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
  category: string;
}

export const cards: CardData[] = [
  {
    description: "A Video Calling Web App",
    title: "Ather Connect",
    src: "/images/AetherConnect.jpg",
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
              </p>
            </span>
          </span>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Features
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time video processing for anomaly detection</li>
            <li>
              Automated alerts for authorities in case of violence or crime
              detection
            </li>
            <li>
              Supports multiple types of events like accidents, fights, and
              vandalism
            </li>
            <li>Scans CCTV footage continuously for potential threats</li>
          </ul>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Future Goals
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Make the system cloud-friendly for scalability</li>
            <li>
              Enable remote access to the system through cloud integration
            </li>
            <li>
              Provide real-time processing on the cloud to handle large-scale
              surveillance systems
            </li>
            <li>Optimize for lower latency in live video analysis</li>
          </ul>
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
  {
    description: "AI Movie Recommendation System",
    title: "Aether Cinema",
    src: "/images/AetherCinema.jpg",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/AI-Movie-Recommender",
    content: () => (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            AI Movie Recommender
          </span>
          , an AI-powered system that provides personalized movie
          recommendations based on user preferences. The app integrates a
          machine learning model with a modern web interface, offering an
          engaging experience for users to discover new films 🍿.
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            <IconSignature className="h-6 w-6 text-neutral-500" />
            TechStack For the Project
          </h5>
          <span className="pt-3 md:pt-5 pb-2 font-normal text-sm md:text-base">
            - AI/ML Frameworks
            <span className="py-3 ">
              <p className="space-y-2">
                <img src="https://skillicons.dev/icons?i=python" alt="Python" />
                <span className="code-block ">Python, NumPy, Pandas</span>
              </p>
            </span>
            - Web Framework & User Interface
            <span className="py-3">
              <p className="space-y-3">
                <img src="https://skillicons.dev/icons?i=react" alt="React" />
                <span className="code-block">ReactJS</span>
              </p>
            </span>
            - Backend & APIs
            <span className="py-2">
              <p className="space-y-2">
                <img src="https://skillicons.dev/icons?i=flask" alt="Flask" />
              </p>
            </span>
          </span>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Features
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Personalized movie recommendations based on user preferences
            </li>
            <li>Interactive UI built with ReactJS for a seamless experience</li>
            <li>Real-time data processing with Flask backend</li>
            <li>
              Machine learning-powered recommendation system using Python,
              NumPy, and Pandas
            </li>
          </ul>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Future Goals
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Enhance the recommendation engine with collaborative filtering and
              deep learning models
            </li>
            <li>
              Optimize for larger datasets to improve recommendation accuracy
            </li>
            <li>
              Deploy the system on cloud infrastructure for better scalability
              and performance
            </li>
          </ul>
        </div>
      </div>
    ),
    category: "AI/ML",
  },
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
    description: "AI-powered personalized learning management system",
    title: "Aether LMS",
    src: "/images/aehterlogo.jpg",
    ctaText: "GitHub",
    ctaLink: "https://github.com/atharva00721/AetherLMS",
    content: () => (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Aether LMS
          </span>
          , a next-generation learning management system leveraging AI to
          provide personalized learning paths for users. It combines advanced
          AI/ML models with a modern and responsive interface for a seamless
          educational experience 🎓.
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            <IconSignature className="h-6 w-6 text-neutral-500" />
            TechStack For the Project
          </h5>
          <span className="pt-3 md:pt-5 pb-2 font-normal text-sm md:text-base">
            - Web Framework & User Interface
            <span className="py-3">
              <p className="space-y-3">
                <img
                  src="https://skillicons.dev/icons?i=nextjs,tailwind"
                  alt="Next.js & Tailwind"
                />
                <span className="code-block">Next.js, TailwindCSS</span>
              </p>
            </span>
            - Database
            <span className="py-2">
              <p className="space-y-2">
                <img
                  src="https://skillicons.dev/icons?i=postgresql"
                  alt="PostgreSQL"
                />
                <span className="code-block">NeonDB (PostgreSQL)</span>
              </p>
            </span>
          </span>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Features
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>learning recommendations</li>
            <li>Interactive and responsive UI for seamless navigation</li>
            <li>Real-time progress tracking and analytics</li>
            <li>Secure and scalable database for managing user data</li>
          </ul>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Future Goals
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Incorporate gamification for enhanced engagement</li>
            <li>Expand AI models for adaptive assessments</li>
            <li>Deploy on a cloud infrastructure for global accessibility</li>
          </ul>
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Landing page
          </h5>
          <Image
            priority
            width={1000}
            height={1000}
            src={"/images/LMS_Landingpage.jpeg"}
            alt={"LMS_Landingpage"}
            className="w-full mt-5 rounded-xl object-cover"
          />
          <h5 className="flex gap-2 pt-5 text-white font-bold underline-offset-4 tracking-wider text-lg md:text-xl">
            Club UI
          </h5>
          <Image
            priority
            width={1000}
            height={1000}
            src={"/images/AetherLMS_UI.png"}
            alt={"AetherLMS_UI"}
            className="w-full mt-5 rounded-xl object-cover"
          />
        </div>
      </div>
    ),
    category: "Web Developoment",
  },
];
