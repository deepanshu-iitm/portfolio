import {
  backend,
  creator,
  web,
  javascript,
  reactjs,
  mongodb,
  git,
  flask,
  postgreSQL,
  docker,
  python,
  fastapi,
  pytorch,
  gym,
  voxlingo,
  projecttracker,
  medical,
  codearchaeologist,
  ailegal,
  autoresearcher,
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
    title: "Artificial Intelligence",
    icon: creator,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Backend Engineering",
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
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
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "The Code Archaeologist",
    description:
      "AI-powered multi-language codebase analysis system using tree-sitter for AST parsing across 7+ programming languages. Features Neo4j knowledge graphs, GraphRAG query engine with Google Gemini for natural language to Cypher translation, and FastAPI web interface.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Neo4j",
        color: "yellow-text-gradient",
      },
      {
        name: "GraphRAG",
        color: "pink-text-gradient",
      },
    ],
    image: codearchaeologist,
    source_code_link: "https://github.com/deepanshu-iitm/code-archaeologist",
  },
  {
    name: "AI Legal Review Agent",
    description:
      "AI-driven legal document assistant for analyzing contracts and compliance documents. Implements RAG pipeline with ChromaDB and SentenceTransformers, integrated with Google Gemini API for automated extraction of key legal terms and clauses.",
    tags: [
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "yellow-text-gradient",
      },
      {
        name: "RAG",
        color: "pink-text-gradient",
      },
    ],
    image: ailegal,
    source_code_link: "https://github.com/deepanshu-iitm/ai-legal-review-agent",
  },
  {
    name: "AutoResearcher Platform",
    description:
      "AI-powered research automation platform with scalable FastAPI backend for concurrent data collection and processing. Features RAG-ready pipeline with ChromaDB, multi-source ingestion from arXiv, Semantic Scholar, and Wikipedia, and automated report generation.",
    tags: [
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "yellow-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: autoresearcher,
    source_code_link: "https://github.com/deepanshu-iitm/AutoResearcher",
  },
  {
    name: "MedEase",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "yellow-text-gradient",
      },
    ],
    image: medical,
    source_code_link: "https://github.com/deepanshu-iitm/med-ease",
  },
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
