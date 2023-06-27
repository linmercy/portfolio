import {
  mobile,
  backend,
  bmt,
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
  meta,
  heroics,
  travel,
  sumz,
  threejs,
  freelancer, 
  creator,
  jsc,
  beyond,
  amadi,
  kijedi,
  builds
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web App Developer",
  //   icon: web,
  // },
  // {
  //   title: "React Developer",
  //   icon: mobile,
  // },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Computer Scientist",
    icon: creator,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Front-end Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Feb 2023 - To Date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Volunteer Web Developer",
    company_name: "Beyond My Tribe",
    icon: bmt,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web applications using Vanilla Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Computer Science Attachee",
    company_name: "Engineer Law Courts",
    icon: jsc,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Troubleshooting issues with network connectivity, printers and related technology.",
      " Performed software updates and routine PC maintenance, printers and copy machines.",
      "Registering new cases from the ODPP office on the case tracking system.",
      "Processing invoices for cash bail and bonds payments on the case tracking system."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mercylin proved me wrong.",
    name: "Lawrence Amadi",
    designation: "Executive Director",
    company: "Beyond My Tribe",
    image: amadi,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mercylin does.",
    name: "Wesley Kijedi",
    designation: "Founder",
    company: "Violet Technologies",
    image: kijedi,
  },
  {
    testimonial:
      "After Mercylin optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "BMT Website",
    description:
      "A comprehensive and fully responssive Web Application for the BMT company.",

    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "orange-text-gradient",
      },
    ],
    image: beyond,
    source_code_link: "https://github.com/BeyondMyTribe/BMT.git",
    deployment_link: "https://beyondmytribe.org",
  },
  {
    name: "Heroics",
    description:
      "Web application that enables users to search for their favorite comics arists, view their personal details, and connections.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: heroics,
    source_code_link: "https://github.com/linmercy/Heroics.git",
    deployment_link: "https://linmercy.github.io/Heroics/",
  },
  {
    name: "Travel",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/linmercy/travel.git",
    deployment_link: "https://linmercy.github.io/travel/",
  },
  {
    name: "Sumz",
    description:
      "An open source article summerizer that transforms long articles ino clear concise summaries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      }
    ],
    image: sumz,
    source_code_link: "https://github.com/linmercy/travel.git",
    deployment_link: "https://linmercy.github.io/travel/",
  },
  {
    name: "Builds",
    description:
      "A construction website landing page built in react",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      }
    ],
    image: builds,
    source_code_link: "https://github.com/linmercy/construction-website.git",
    deployment_link: "https://https://construction-website-tau.vercel.app/",
  },
  // {
  //   name: "Games",
  //   description:
  //     "A construction website landing page built in react",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: travel,
  //   source_code_link: "https://github.com/linmercy/construction-website.git",
  //   deployment_link: "https://https://construction-website-tau.vercel.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };