export interface Project {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  number: string;
  isReversed: boolean;
}

export const projects: Project[] = [
  {
    title: "Resumify AI",
    subtitle: "Full Stack Web Application",
    description: "Resumify AI is a web application that uses AI to generate a resume for the user.",
    imageSrc: "/resumify-ai.png",
    number: "01",
    isReversed: false,
  },
  {
    title: "Resumify AI",
    subtitle: "Full Stack Web Application",
    description: "Resumify AI is a web application that uses AI to generate a resume for the user.",
    imageSrc: "/resumify-ai.png",
    number: "02",
    isReversed: true,
  },
  {
    title: "Resumify AI",
    subtitle: "Full Stack Web Application",
    description: "Resumify AI is a web application that uses AI to generate a resume for the user.",
    imageSrc: "/resumify-ai.png",
    number: "03",
    isReversed: false,
  },
  {
    title: "Resumify AI",
    subtitle: "Full Stack Web Application",
    description: "Resumify AI is a web application that uses AI to generate a resume for the user.",
    imageSrc: "/resumify-ai.png",
    number: "04",
    isReversed: true,
  },
];
