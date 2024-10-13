import { AboutMe } from "@/components/Aboutme";

import { AuroraBackgroundDemo } from "@/components/Homeaurora";
import { Projects } from "@/components/Projects";
import Navbar from "@/components/ui/Navbar";
import { Card } from "@/components/ui/test";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <AuroraBackgroundDemo />
        <AboutMe />
        <Projects />
        {/* <Card /> */}
      </div>
    </>
  );
}
