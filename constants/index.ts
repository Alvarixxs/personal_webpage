/* nav section */

export const navLinks = [
  {
    label: "PROJECTS",
    route: "/projects",
  },
  {
    label: "SKILLS",
    route: "/skills",
  },
  {
    label: "AWARDS",
    route: "/awards",
  },
  {
    label: "CONTACT",
    route: "/contact",
  },
];

/* Hero section */

export const HeroName = "I'M ÁLVARO DE SANTOS";

export const HeroTitle =
  "SOFTWARE DEVELOPER, TECH ENTHUSIAST, MAJOR IN CS AND MATH.";

export const HeroDesc =
  "I am an ambitious and passionate student at the Autonomous University of Madrid. With a solid academic foundation and a diverse portfolio of self-driven projects, I am eager to apply my skills and knowledge to real-world challenges and innovative solutions in the tech industry.";

export const HeroHobbies =
  "I enjoy sports ⚽ (running, gym, hiking), tech related youtube content 💻 and hackathons 🚀";

/* projects section */

export const ProjectsTitle = "MY PORTFOLIO PROJECTS.";

export const ProjectsSubtitle = "PROJECTS";

export const ProjectsItems = [
  {
    title: "IMAGINIFY",
    description:
      "Web app that simulates a stock photo database for users. Users can log in to the application and perform transformations to images leveraging the power of AI. Users can also upload, delete and update photos.",
    github: "https://github.com/Alvarixxs/nextjs-imaginify",
    website: "https://nextjs-imaginify-omega.vercel.app",
    year: "2024",
    skills: ["Fullstack", "Next.js", "TypeScript"],
    imageSrc: "/images/imaginify.png",
  },
  {
    title: "RATE REPOSITORY APP",
    description:
      "Mobile application which shows ratings for several demo github repositories. Users can sign up and log in. They can navigate to specific repository pages, and comment publicly. They can also modify their existing reviews.",
    github: "https://github.com/Alvarixxs/Rate-repository-app",
    year: "2024",
    skills: ["Frontend", "React Native", "GraphQL"],
    imageSrc: "/images/rate-repository-app.png",
  },
];

export const ProjectsMoreItems = [
  {
    title: "IMAGINIFY",
    description:
      "Web app that simulates a stock photo database for users. Users can log in to the application and perform transformations to images leveraging the power of AI. Users can also upload, delete and update photos.",
    github: "https://github.com/Alvarixxs/nextjs-imaginify",
    website: "https://nextjs-imaginify-omega.vercel.app",
    year: "2024",
    skills: ["Fullstack", "Next.js", "TypeScript"],
    imageSrc: "/images/imaginify.png",
  },
  {
    title: "RATE REPOSITORY APP",
    description:
      "Mobile application which shows ratings for several demo github repositories. Users can sign up and log in. They can navigate to specific repository pages, and comment publicly. They can also modify their existing reviews.",
    github: "https://github.com/Alvarixxs/Rate-repository-app",
    year: "2024",
    skills: ["Frontend", "React Native", "GraphQL"],
    imageSrc: "/images/rate-repository-app.png",
  },
  {
    title: "PERSONAL WEBPAGE",
    description:
      "Welcome to my personal webpage! This project is a modern, responsive portfolio site designed to showcase my skills, projects, and professional background. It is built using Nextjs, Typescript, and TailwindCSS, emphasizing a clean and intuitive user experience.",
    github: "https://github.com/Alvarixxs/personal_webpage",
    website: "https://personal-webpage-lovat-ten.vercel.app/",
    year: "2024",
    skills: ["Frontend", "Next.js", "Tailwind CSS"],
    imageSrc: "/images/personal_webpage.png",
  },
  {
    title: "STRAW LANDING PAGE",
    description:
      "This repository contains the source code for a modern and responsive landing page built using Next.js, Tailwind CSS, and hosted on Vercel. The project demonstrates the power of combining these technologies to create a fast, scalable, and visually appealing web experience.",
    github: "https://github.com/Alvarixxs/nextjs-straw",
    website: "https://nextjs-straw.vercel.app/",
    year: "2024",
    skills: ["Frontend", "Next.js", "Tailwind CSS"],
    imageSrc: "/images/straw.png",
  },
  {
    title: "FURNIRO SERVER",
    description:
      "This repository contains the backend code for the Furniro e-commerce furniture application. The server is built using Node.js, and it follows best practices for modern backend development. It is connected to a Supabase instance, utilizing a relational SQL database and the Sequelize ORM for managing data.",
    github: "https://github.com/Alvarixxs/furniro-server",
    year: "2024",
    skills: ["Backend", "Node.js", "SQL"],
    imageSrc: "/images/furniro-server.png",
  },
  {
    title: "CV APPLICATION",
    description:
      "This repository contains the source code for the Odin CV Application, a project developed as part of The Odin Project curriculum. This application serves as an introduction to building interactive web applications using React.",
    github: "https://github.com/Alvarixxs/odin_cv_application",
    website: "https://odin-cv-application-psi.vercel.app/",
    year: "2024",
    skills: ["Frontend", "React.js", "CSS"],
    imageSrc: "/images/cv-app.png",
  },
  {
    title: "DEVFLOW",
    description: "Modern stack overflow copy. Currently in development.",
    github: "https://github.com/Alvarixxs/nextjs-devflow",
    website: "",
    year: "2024",
    skills: ["Fullstack", "Next.js", "Typescript"],
    imageSrc: "/images/coming_soon.png",
  },
];

/* skills section */

export const SkillsTitle = "MY DIGITAL TOOLBOX.";

export const SkillsSubtitle = "SKILLS & LANGUAGES";

export const SkillsItems =
  "Web Development, Web Design, Front-End Development, Back-End Development, Full-Stack Development";

/* awards section */

export const LanguagesItems = [
  {
    label: "Javascript",
    imageSrc: "/icons/javascript-original.svg",
    route: "https://www.javascript.com/",
  },
  {
    label: "TypeScript",
    imageSrc: "/icons/typescript-original.svg",
    route: "https://www.typescriptlang.org/",
  },
  {
    label: "Python",
    imageSrc: "/icons/python-original.svg",
    route: "https://www.python.org/",
  },
  {
    label: "Java",
    imageSrc: "/icons/java-original.svg",
    route: "https://www.java.com/en/",
  },
  {
    label: "SQL",
    imageSrc: "/icons/sql-original.svg",
    route: "https://www.sql.org/",
  },
  {
    label: "C",
    imageSrc: "/icons/c-original.svg",
    route: "",
  },
];

export const FrameworkItems = [
  {
    label: "Git",
    imageSrc: "/icons/git-original.svg",
    route: "https://git-scm.com/",
  },
  {
    label: "React js",
    imageSrc: "/icons/react-original.svg",
    route: "https://reactjs.org/",
  },
  {
    label: "Node js",
    imageSrc: "/icons/nodejs-original.svg",
    route: "https://nodejs.org/",
  },
  {
    label: "Next js",
    imageSrc: "/icons/nextjs-original.svg",
    route: "https://nextjs.org/",
  },
  {
    label: "HTML",
    imageSrc: "/icons/html5-original.svg",
    route: "",
  },
  {
    label: "Tailwind",
    imageSrc: "/icons/tailwindcss-original.svg",
    route: "https://tailwindcss.com/",
  },
  {
    label: "MongoDB",
    imageSrc: "/icons/mongodb-original.svg",
    route: "https://www.mongodb.com/",
  },
  {
    label: "PostgreSQL",
    imageSrc: "/icons/postgresql-original.svg",
    route: "https://postgreSQL.com/",
  },
];

export const LangItems = [
  {
    language: "English",
    proficiency: "Native or bilingual proficiency",
    route: "/assets/languages/IELTS-ERTF.pdf",
  },
  {
    language: "French",
    proficiency: "Limited working proficiency",
    route: "",
  },
  {
    language: "Spanish",
    proficiency: "Native or bilingual proficiency",
    route: "/assets/languages/spanishIGCSE.pdf",
  },
];

export const AwardsTitle = "RECOGNITIONS.";

export const AwardsSubtitle = "HONORS & AWARDS";

export const AwardsItems = [
  {
    year: 2023,
    text: "Comunidad de Madrid",
    award: "Excellence Scholarship",
    route: "/assets/awards/ExcellenceScholarship2022-23.pdf",
  },
  {
    year: 2022,
    text: "Comunidad de Madrid",
    award: "Excellence Scholarship",
    route: "/assets/awards/ExcellenceScholarship2021-22.pdf",
  },
  {
    year: 2021,
    text: "Comunidad de Madrid",
    award: "Honor's Scholarship",
    route: "/assets/awards/HonorsScholarship2021.pdf",
  },
];

export const ResumeRoute = "/assets/files/Resume-AlvarodeSantos.pdf";

/* contact section */

export const ContactTitle = "GET IN TOUCH.";

export const ContactSubtitle = "CONTACT";

export const ContactDesc =
  "I would be happy to further discuss my experiences with you, simply shoot me an email or message me on LinkedIn!";

export const Email = "alvarodesants@gmail.com";

export const PhoneNumber = "(+34) 656 413 858";

export const ContactItems = [
  {
    label: "X",
    imageSrc: "/icons/x.svg",
    route: "https://x.com/alvarodesants",
  },
  {
    label: "Linkedin",
    imageSrc: "/icons/linkedin.svg",
    route:
      "https://www.linkedin.com/in/álvaro-de-santos-de-la-pedraja-101391308",
  },
  {
    label: "Github",
    imageSrc: "/icons/github.svg",
    route: "https://github.com/Alvarixxs",
  },
];

export const Location = "Ottawa, Canada";
