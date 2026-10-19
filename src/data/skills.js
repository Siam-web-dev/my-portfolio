export const skillsData = {
  categories: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      description:
        "Building responsive, accessible, and performant user interfaces with modern component architectures and design systems.",
      skills: [
        {
          name: "React",
          description: "Functional components, custom hooks, context, state management, and ecosystem tools.",
          status: "Proficient",
          badge: "Core Framework",
        },
        {
          name: "Next.js",
          description: "App Router, Server Components, client/server boundaries, metadata, and dynamic routing.",
          status: "Proficient",
          badge: "Primary Framework",
        },
        {
          name: "JavaScript (ES6+)",
          description: "Modern asynchronous JS, promises, DOM manipulation, closures, and modular code.",
          status: "Proficient",
          badge: "Core Language",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first architecture, responsive layouts, design tokens, and custom theming.",
          status: "Proficient",
          badge: "Design System",
        },
        {
          name: "HTML5 & CSS3",
          description: "Semantic document structure, flexbox, grid, animations, and accessible web standards.",
          status: "Proficient",
          badge: "Foundation",
        },
        {
          name: "TypeScript",
          description: "Type safety, interfaces, generics, and statically-typed React component props.",
          status: "Familiar",
          badge: "Typed JS",
        },
      ],
    },
    {
      id: "tools",
      title: "Tools & Development Workflow",
      description:
        "Version control, collaborative code management, and API consumption powering modern web workflows.",
      skills: [
        {
          name: "Git",
          description: "Version tracking, branching strategies, merge conflict resolution, and commit hygiene.",
          status: "Proficient",
          badge: "Version Control",
        },
        {
          name: "GitHub",
          description: "Remote repositories, code reviews, collaboration, and GitHub Pages deployments.",
          status: "Proficient",
          badge: "Collaboration",
        },
        {
          name: "REST APIs",
          description: "Data fetching, HTTP protocols, error handling, status codes, and JSON payload consumption.",
          status: "Proficient",
          badge: "Data Layer",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & Database (In Progress)",
      description:
        "Actively expanding full-stack capabilities to understand server-side architectures, API design, and databases.",
      skills: [
        {
          name: "Node.js",
          description: "Server-side JavaScript runtime, event loop fundamentals, and npm ecosystem.",
          status: "Learning",
          badge: "Runtime",
        },
        {
          name: "MongoDB",
          description: "NoSQL document storage, schemas, collections, and basic CRUD operations.",
          status: "Learning",
          badge: "Database",
        },
      ],
    },
  ],
  currentlyLearning: [
    {
      title: "Backend Services with Node.js",
      description:
        "Deepening understanding of asynchronous server-side execution, RESTful endpoint creation, and middleware.",
      progress: "In Progress",
    },
    {
      title: "Full-Stack Data Modeling with MongoDB",
      description:
        "Learning schema design, document querying, and integrating database persistence into Next.js applications.",
      progress: "In Progress",
    },
    {
      title: "Strict TypeScript Patterns",
      description:
        "Writing strictly typed React components, generics, and API contract interfaces.",
      progress: "Active Practice",
    },
  ],
  learningApproach: [
    {
      title: "Build to Understand",
      description:
        "I learn fastest by turning concepts into practical projects. Theory is validated only after writing actual code, debugging errors, and deploying functioning interfaces.",
    },
    {
      title: "Respect the Fundamentals",
      description:
        "Frameworks change rapidly, but foundational web technologies—semantic HTML, standard CSS, and vanilla JavaScript—remain timeless. Deep fundamentals make adopting new tools effortless.",
    },
    {
      title: "Continuous Honest Growth",
      description:
        "I value clarity over exaggerated claims. Knowing what I don't know yet provides a clear, motivated roadmap for daily technical improvement.",
    },
  ],
};
