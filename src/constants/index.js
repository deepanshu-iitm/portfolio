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
    flask,
    postgreSQL,
    meta,
    starbucks,
    tesla,
    shopify,
    gym,
    voxlingo,
    threejs,
    projecttracker
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
    {
      title: "Frontend Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
        name: "Flask",
        icon: flask,
      },
      {
        name: "PostgreSQL",
        icon: postgreSQL,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
//   const experiences = [
//     {
//       title: "Full stack Developer",
//       company_name: "Meta",
//       icon: meta,
//       iconBg: "#E6DEDD",
//       date: "Jan 2023 - Present",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//   ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "Hello, This is a testimonial.",
//       name: "Random",
//       designation: "CFO",
//       company: "Acme Co",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//   ];
  
  const projects = [
    {
      name: "Gym App",
      description:
        "It is an interactive fitness web application that lets users generate personalized workout plans targeting specific muscles, and setting bold fitness goals",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/deepanshu-iitm/gym-app",
    },
    {
      name: "Vox Lingo",
      description:
        "A web based transcription & translation app designed to record, transcribe, and translate audio seamlessly, it uses web workers to run ML models in the browser",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
            name: "transformers",
            color: "yellow-text-gradient",
          },
      ],
      image: voxlingo,
      source_code_link: "https://github.com/deepanshu-iitm/vox-lingo",
    },
    {
        name: "Project Tracker",
        description:
        "A comprehensive web app simplifying project management for students and instructors, enabling progress tracking via GitHub and real-time AI-driven feedback.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
          {
              name: "flask",
              color: "yellow-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "blue-text-gradient",
              },
        ],
        image: projecttracker,
        source_code_link: "https://github.com/deepanshu-iitm/project-tracker",
      },
  ];
  
  export { services, technologies, projects };