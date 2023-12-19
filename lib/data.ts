import adventImg from "@/public/advent.png";
import ccaCommanderImg from "@/public/CCACommander.png";
import pippiImg from "@/public/pippi.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Advent",
    description:
      "I worked as a full-stack developer for this 2 members summer project. The app caters to event organizers to design their event landing page and registration form.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript", "Firebase", "Vercel"],
    imageUrl: adventImg,
  },
  {
    title: "CCACommander Ultra Promax Xtra 9000PLUS",
    description:
      "An application for CCA heads to manage members & events. I took charge of front-end development in a 5 members team.",
    tags: ["Java", "JavaFX", "Gradle", "JUnit", ],
    imageUrl: ccaCommanderImg,
  },
  {
    title: "Pippi",
    description:
      "A task management application for quick reminders and task updates. Customized with Pokémon theme.",
    tags: ["Java", "JavaFx", "Gradle", "JUnit"],
    imageUrl: pippiImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "TypeScript",  
  "HTML",
  "CSS",
  "Tailwind",
  "JavaFX",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Firebase",
  "PostgreSQL",
  "Redis",
] as const;