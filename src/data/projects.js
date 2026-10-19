export const projectsData = [
  {
    id: "1",
    slug: "fit-log",
    title: "Fit Log",
    shortDescription:
      "A workout and fitness web application designed to help users explore workouts and organize their fitness routine.",
    description:
      "Fit Log is a fitness-focused web project featuring a workout library and workout planning experience. It demonstrates my ability to build structured interfaces and work with modern web technologies.",
    category: "Fitness Web App",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://fit-log-nine-psi.vercel.app/",
    githubUrl: "",
    image: "/images/projects/fit-log.png",
    featured: true,
    status: "Live",
    highlights: [
      "Workout-focused user interface",
      "Workout library and planning experience",
      "Responsive web layout",
    ],
    purpose:
      "Staying consistent with workouts often becomes frustrating when exercise routines are scattered across disparate notes and complicated apps. Fit Log was developed to provide a focused, clutter-free space where gym-goers and fitness enthusiasts can browse structured workout libraries and organize their routines efficiently.",
    features: [
      {
        title: "Workout Library",
        description: "Comprehensive exercise catalog with targeted muscle group categorization and detailed instructions.",
      },
      {
        title: "Daily Workout Planner",
        description: "Interactive scheduling tools allowing users to organize targeted workouts by day and split.",
      },
      {
        title: "Mobile-First Design",
        description: "Optimized for fast, one-handed smartphone use directly on the gym floor.",
      },
      {
        title: "REST API Integration",
        description: "Connected to structured endpoints to dynamically fetch and display updated fitness information.",
      },
    ],
    challenges: [
      "Structuring exercise routine data efficiently for intuitive client-side browsing and category filtering.",
      "Designing responsive card grids that remain legible and touch-friendly on small mobile viewports during workout sessions.",
      "Handling asynchronous REST API responses cleanly with graceful loading and fallback states.",
    ],
    learnings: [
      "Implementing reusable component architecture with Next.js App Router and Tailwind CSS.",
      "Creating seamless user interactions for filtering and navigating workout categories without page reloads.",
      "Optimizing web performance and cumulative layout shifts for media-rich fitness cards.",
    ],
  },
  {
    id: "2",
    slug: "fresh-mart",
    title: "Fresh Mart",
    shortDescription:
      "A fresh grocery shopping website focused on presenting products through a clean shopping interface.",
    description:
      "Fresh Mart is a grocery-related web project built to present products in an organized and user-friendly interface. The project can be showcased as an example of my frontend development and responsive UI work.",
    category: "E-commerce",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl: "https://siam-web-dev.github.io/fresh_mart/",
    githubUrl: "https://github.com/siam-web-dev/fresh_mart",
    image: "/images/projects/fresh-mart.png",
    featured: true,
    status: "Live",
    highlights: [
      "Grocery shopping interface",
      "Product presentation",
      "Responsive design",
    ],
    purpose:
      "Online grocery and retail shopping requires instant clarity, visual appeal, and predictable navigation. Fresh Mart was crafted to demonstrate strong foundational web fundamentals — building a fast, accessible, and delightful storefront from the ground up using semantic HTML5, modern CSS layouts, and vanilla JavaScript.",
    features: [
      {
        title: "Curated Storefront",
        description: "Clean product grid presenting farm-fresh items, prices, and unit descriptions with high visual appeal.",
      },
      {
        title: "Responsive Grid System",
        description: "Handcrafted CSS Grid and Flexbox layouts adapting gracefully from phones to ultra-wide displays.",
      },
      {
        title: "Interactive Filtering",
        description: "Vanilla JavaScript-driven item discovery and category switching with snappy response times.",
      },
      {
        title: "Accessible Markup",
        description: "Structured semantic HTML elements with keyboard-friendly tab order and descriptive alt attributes.",
      },
    ],
    challenges: [
      "Crafting custom responsive layouts using pure CSS flexbox and grid without utility frameworks or CSS libraries.",
      "Implementing dynamic client-side filtering and item discovery using vanilla JavaScript DOM manipulation.",
      "Ensuring consistent cross-browser typography and card alignment across varied screen resolutions.",
    ],
    learnings: [
      "Solidified foundational DOM scripting and event-driven JavaScript programming.",
      "Strengthened semantic HTML5 accessibility and mobile-first CSS architecture.",
      "Deploying and managing static web applications via GitHub Pages with automated branches.",
    ],
  },
  {
    id: "3",
    slug: "devstack",
    title: "DevStack",
    shortDescription:
      "A developer-focused web project showcasing technology-related content in a structured interface.",
    description:
      "DevStack is a web project in my development portfolio. Use this page to present its actual purpose, key features, implementation decisions, and the technical skills demonstrated by the project.",
    category: "Web Application",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://dev-stack-ashy-one.vercel.app/",
    githubUrl: "",
    image: "/images/projects/devstack.png",
    featured: true,
    status: "Live",
    highlights: [
      "Technology-focused interface",
      "Component-based UI structure",
      "Project presentation",
    ],
    purpose:
      "As developer ecosystems expand, developers spend countless hours bookmarking and sifting through documentation across fragmented sources. DevStack was built as a dedicated developer directory and stack organizer, providing a high-contrast dark dashboard that surfaces essential tech stacks, tools, and specifications in one place.",
    features: [
      {
        title: "Developer Dark UI",
        description: "Carefully calibrated dark theme with cyan and violet accents tailored for code-centric workflows.",
      },
      {
        title: "Modular Component Architecture",
        description: "Engineered with composable React components, separation of concerns, and clean props drilling.",
      },
      {
        title: "Interactive Tech Explorer",
        description: "Real-time client filtering by technology stack, tooling type, and developer preference.",
      },
      {
        title: "Performance & Micro-Interactions",
        description: "Subtle hover transitions, bordered cards, and glowing indicators without layout thrashing.",
      },
    ],
    challenges: [
      "Designing a cohesive dark aesthetic tailored specifically for developer-facing tools without visual fatigue.",
      "Breaking down complex views into modular, reusable React functional components with clean state boundaries.",
      "Managing UI state effectively across interactive tabs and technology filters.",
    ],
    learnings: [
      "Advanced utility-first styling patterns using modern Tailwind CSS and custom tokens.",
      "Component composition and props management in React single-page applications.",
      "Polishing user experience with smooth hover transitions, card glows, and micro-interactions.",
    ],
  },
];

export function getAllProjects() {
  return projectsData;
}

export function getFeaturedProjects() {
  return projectsData.filter((p) => p.featured);
}

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export function getAdjacentProjects(currentSlug) {
  const index = projectsData.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projectsData[index - 1] : null;
  const next = index < projectsData.length - 1 ? projectsData[index + 1] : null;
  return { prev, next };
}
