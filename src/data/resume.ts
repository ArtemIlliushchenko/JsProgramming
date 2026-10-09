export type Link = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  codename: string;
  role: string;
  description: string;
  frontend: string[];
  backend: string[];
  stack: string[];
  links: Link[];
};

export const profile = {
  name: 'Artem Illiushchenko',
  role: 'Fullstack Developer',
  location: 'Kyiv, Ukraine',
  summary:
    'Junior Fullstack Developer with hands-on experience in building scalable, responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js. Proficient in designing RESTful APIs, managing secure user authentication, and developing dynamic user interfaces. Experienced in Agile team environments, effectively collaborating via Git/GitHub, and delivering maintainable, production-ready code. Focused on continuous technical growth and building robust end-to-end solutions.',
};

export const contacts = {
  phone: { label: '+380 99 482 2210', href: 'tel:+380994822210' },
  email: { label: 'artemillushchenko30@gmail.com', href: 'mailto:artemillushchenko30@gmail.com' },
  github: { label: 'github.com/ArtemIlliushchenko', href: 'https://github.com/ArtemIlliushchenko' },
  linkedin: { label: 'linkedin.com/in/artemilliushchenko', href: 'https://www.linkedin.com/in/artemilliushchenko/' },
  telegram: { label: 't.me/Slatesk', href: 'https://t.me/Slatesk' },
};

export const projects: Project[] = [
  {
    id: 'leleka',
    title: 'Pregnancy Tracker App',
    codename: 'Leleka',
    role: 'Fullstack Developer · Team Project',
    description:
      'An interactive web application designed to support pregnant women by providing dynamic week-by-week fetal development tracking, personalized daily health tips, and a built-in task reminder system.',
    frontend: [
      'Developed a dynamic, multipage user interface using Next.js (App Router) and TypeScript.',
      'Implemented a flexible page-container architecture for the Journey Module, keeping route parameters ([weekNumber]) in sync with the "Baby Development" and "Mom\'s Body" data tabs.',
      'Integrated Axios for efficient client-side HTTP requests, optimized loading states, and robust error handling.',
      'Built scoped, adaptive layouts using CSS Modules, maintaining visual consistency with Figma mockups across all screen resolutions.',
      'Optimized Largest Contentful Paint (LCP) by leveraging the native Next.js <Image /> component.',
    ],
    backend: [
      'Architected a scalable RESTful API with Node.js and Express.js in a clean, layered architecture (Routes, Controllers, Services).',
      'Designed MongoDB / Mongoose schemas to manage content for 40 gestational weeks.',
      'Implemented a stable algorithm tied to the user\'s dueDate that computes the current pregnancy week and serves a unique "daily tip" per 24-hour cycle instead of volatile randomization.',
      'Created private endpoints protected by custom authentication middleware alongside public endpoints with project limits (e.g. a 39-week counter for guests).',
      'Integrated strict input validation and data sanitization directly at the routing level.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Next.js', 'React', 'TypeScript', 'Axios', 'CSS Modules', 'Agile/Scrum'],
    links: [
      { label: 'Live demo', href: 'https://pregnancy-tracker-frontend.vercel.app' },
      { label: 'Frontend repo', href: 'https://github.com/Oksana-Zalivan/pregnancy-tracker-frontend' },
      { label: 'Backend repo', href: 'https://github.com/Oksana-Zalivan/pregnancy-tracker-backend' },
    ],
  },
  {
    id: 'retail',
    title: 'Rental Car App',
    codename: 'Retail',
    role: 'Fullstack Developer',
    description:
      'A full-stack web application for a car rental company featuring a dynamic vehicle catalog, robust server-side filtering, and a seamless booking experience.',
    frontend: [
      'Developed a dynamic, multipage user interface with Next.js 15 (App Router), React and TypeScript.',
      'Implemented infinite "Load More" pagination with TanStack Query\'s useInfiniteQuery for chunked data fetching.',
      'Integrated Axios for reliable HTTP requests for the catalog and form submissions.',
      'Built dynamic routing for vehicle pages (/catalog/[carId]) with detailed specs, features and a rental form.',
      'Added React Hot Toast for real-time success notifications on booking completion.',
      'Designed scoped, pixel-perfect layouts with CSS Modules, including a Hero section with CTA, matching Figma mockups.',
    ],
    backend: [
      'Architected custom RESTful API endpoints with Node.js and Express.js for the catalog, car details and rental form submissions.',
      'Implemented server-side filtering by brand, exact rental price and mileage range (from/to) simultaneously.',
      'Configured MongoDB / Mongoose queries for efficient pagination synchronized with active frontend filters.',
      'Integrated strict input validation for the rental form endpoint to guarantee data integrity.',
    ],
    stack: ['TypeScript', 'Next.js 15', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'TanStack Query', 'Axios', 'CSS Modules', 'React Hot Toast', 'Vercel', 'Figma'],
    links: [
      { label: 'Live demo', href: 'https://retail-hazel-omega.vercel.app' },
      { label: 'Repository', href: 'https://github.com/ArtemIlliushchenko/Retail/tree/main/retail' },
    ],
  },
];

export const hardSkills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { group: 'Frontend', items: ['React', 'Next.js (App Router)', 'HTML5', 'CSS3', 'CSS Modules', 'TanStack Query', 'Responsive Design'] },
  { group: 'Backend', items: ['Node.js', 'Express.js'] },
  { group: 'Databases & ORM', items: ['MongoDB', 'Mongoose'] },
  { group: 'Auth & Security', items: ['JWT', 'Cookies', 'bcrypt'] },
  { group: 'Validation & Middleware', items: ['Joi', 'Celebrate'] },
  { group: 'Tools', items: ['REST API', 'Git', 'GitHub', 'Pino', 'Postman', 'Environment Variables'] },
];

export const softSkills = ['Critical Thinking', 'Teamwork', 'Time Management', 'Leadership', 'Effective Communication'];

export const education = [
  { period: '2025 – 2026', place: 'IT School GoIT', program: 'Fullstack Developer' },
  { period: '2023 – 2027', place: 'National University "Kyiv Aviation Institute"', program: 'Software Engineering' },
];

export const languages = [
  { name: 'Ukrainian', level: 'Fluent', value: 100 },
  { name: 'English', level: 'Upper-Intermediate', value: 72 },
];
