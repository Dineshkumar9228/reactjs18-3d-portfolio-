import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  threejs,
} from "../assets";

// 🌐 Navigation Links
export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// 💼 Services / Roles
const services: TService[] = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: figma,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

// 🧠 Technologies
const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git & GitHub",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

// 🧩 Experiences
const experiences: TExperience[] = [

   {
    title: "Java Intern",
    companyName: "Wavtech Solutions",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developed basic CRUD operations using Java and MySQL.",
      "Assisted in building small-scale desktop applications and backend logic.",
      "Improved understanding of object-oriented programming concepts.",
      "Worked with mentors to understand software development lifecycle (SDLC).",
    ],
  },
  {
    title: "UI/UX Design Intern",
    companyName: "Greensoft Group Technologies",
    icon: figma,
    iconBg: "#383E56",
    date: "May 2025 – June 2025",
    points: [
      "Designed responsive user interfaces using Figma and Adobe XD.",
      "Worked on real-time client projects, focusing on UX research, wireframing, and prototyping.",
      "Collaborated with the development team to ensure design-to-code accuracy.",
      "Learned modern web design trends and applied user-centered design principles.",
    ],
  },
 
  {
    title: "Freelance Full Stack Developer",
    companyName: "Self-employed",
    icon: web,
    iconBg: "#383E56",
    date: "2025 – Present",
    points: [
      "Designed and developed modern responsive websites using React and Tailwind CSS.",
      "Created dynamic 3D portfolio experiences using Three.js and Framer Motion.",
      "Built small-scale web apps with clean UI and smooth interactions.",
      "Collaborated with clients to translate ideas into interactive digital experiences.",
    ],
  },
];

// 🏅 Certifications Section (Replaces Testimonials)
const certifications = [
  {
    title: "AWS Cloud Certification",
    issuer: "GUVI",
    year: "2025",
    description:
      "Completed AWS Cloud certification from GUVI and learned about EC2, S3, Route 53, and IAM services.",
  },
  {
    title: "Mastering Figma Basics in UI Design",
    issuer: "GUVI",
    year: "2024",
    description:
      "Gained expertise in wireframing, prototyping, and user interface design fundamentals using Figma.",
  },
  {
    title: "Diploma in Computer Applications",
    issuer: "Apollo Computer Education",
    year: "2019",
    description:
      "Covered computer fundamentals, MS Office, and programming basics through a diploma program.",
  },
];

// 🚀 Projects
const projects: TProject[] = [
  {
    name: "College ERP UI Design",
    description:
      "A complete UI/UX design for college ERP using Figma, including dashboards, student management, and analytics screens.",
    tags: [
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "uiux",
        color: "blue-text-gradient",
      },
      {
        name: "designsystem",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink:
      "https://www.figma.com/proto/hPL6kjm0JgDAxfGyJ2dKaY/erp?node-id=1-4&p=f&t=gA9GC3urSDBj90rD-1",
  },
  {
    name: "3D Portfolio Website",
    description:
      "Developed a 3D interactive portfolio using React, Three.js, and Tailwind CSS to showcase my projects and skills with smooth animations and modern design.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://reactjs18-3d-portfolio-j4kc.vercel.app/#certificationss",
  },
];

export { services, technologies, experiences, certifications, projects };
