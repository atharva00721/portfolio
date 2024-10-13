import { AboutMe } from "@/components/Aboutme";
import { AchievementsAndCertifications } from "@/components/Achievements";
import { Hero } from "@/components/Homeaurora";
import { Projects } from "@/components/Projects";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[#171717]">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <AchievementsAndCertifications />
      </div>
    </>
  );
}
