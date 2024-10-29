import { cn } from "@/lib/utils";
import {
  IconAward,
  IconCertificate,
  IconMedal,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";

export function AchievementsAndCertifications() {
  const achievements = [
    {
      title: "1st Place - WebGranth 2024",
      description:
        "Secured 1st place in WebGranth 2024, showcasing exceptional web development skills.",
      icon: <IconTrophy />,
      link: "",
    },
    {
      title: "1st Place - Hackhive",
      description:
        "Won the Hackhive competition with innovative solutions in software development.",
      icon: <IconTrophy />,
      link: "",
    },
    {
      title: "5th Place - Kriyeta 2.0",
      description:
        "Achieved 5th place in the Kriyeta hackathon for creative problem-solving.",
      icon: <IconMedal />,
      link: "",
    },
    {
      title: "3rd Place - HackVIST",
      description: "Ranked 3rd in HackVIST for an impressive project.",
      icon: <IconAward />,
      link: "",
    },
    {
      title: "Organized a National-Level Hackathon",
      description:
        "Organized a national-level hackathon with over 250 participants from across India.",
      icon: <IconUsers />,
      link: "",
    },
    {
      title: "Responsive Web Design Certification",
      description: "Certified by freeCodeCamp in Responsive Web Design.",
      icon: <IconCertificate />,
      link: "https://freecodecamp.org/certification/Atharva2121/responsive-web-design",
    },
    {
      title: "HackerRank Problem Solving Certification",
      description: "Certified in Problem Solving on HackerRank.",
      icon: <IconCertificate />,
      link: "https://www.hackerrank.com/certificates/d9c3ef555e88",
    },
  ];

  return (
    <div className="text-white max-w-[80%] mx-auto mt-5 md:my-20" id="achievements" >
      <h2 className="mb-5 mx-auto text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Achievements/
        <br />
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {achievements.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  link,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
