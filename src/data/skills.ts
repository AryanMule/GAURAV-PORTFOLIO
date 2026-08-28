export interface SkillItem {
  name: string;
  category: string;
  proficiency?: string;
  description: string;
  iconName?: string;
  isHighlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "UI / UX & Client Layer",
    description: "Building responsive, modern, and accessible user interfaces with clean state management.",
    skills: [
      { name: "React.js", category: "Frontend", proficiency: "Advanced", description: "Reusable functional components, hooks, custom state architectures", isHighlight: true },
      { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced", description: "Design systems, utility-first styling, responsive fluid layouts", isHighlight: true },
      { name: "JavaScript (ES6+)", category: "Frontend", proficiency: "Advanced", description: "Async/await, closures, modular architecture, DOM manipulation", isHighlight: true },
      { name: "HTML5", category: "Frontend", proficiency: "Expert", description: "Semantic markup, accessibility, modern standards" },
      { name: "CSS3", category: "Frontend", proficiency: "Expert", description: "Flexbox, Grid, keyframe animations, glassmorphism" },
      { name: "Responsive Web Design", category: "Frontend", proficiency: "Expert", description: "Mobile-first layouts, cross-browser compatibility", isHighlight: true },
    ]
  },
  {
    id: "backend-database",
    title: "Backend & Databases",
    badge: "Server & Persistence Layer",
    description: "Developing secure RESTful endpoints, relational & NoSQL schemas, and authorization engines.",
    skills: [
      { name: "Node.js", category: "Backend", proficiency: "Advanced", description: "Event-driven runtime, asynchronous server architectures", isHighlight: true },
      { name: "Express.js", category: "Backend", proficiency: "Advanced", description: "REST API routing, middleware pipelines, error handling", isHighlight: true },
      { name: "MongoDB", category: "Database", proficiency: "Advanced", description: "NoSQL document modeling, indexing, aggregation pipelines", isHighlight: true },
      { name: "MySQL", category: "Database", proficiency: "Advanced", description: "Relational database schema design, ACID transactions, complex queries", isHighlight: true },
      { name: "SQL", category: "Database", proficiency: "Certified Intermediate", description: "HackerRank verified query optimization, complex joins, indexing", isHighlight: true },
      { name: "REST APIs", category: "Backend", proficiency: "Advanced", description: "Standardized HTTP endpoints, payload optimization, status conventions" },
    ]
  },
  {
    id: "languages-concepts",
    title: "Languages & Core Concepts",
    badge: "CS Foundations",
    description: "Solid theoretical and algorithmic fundamentals with object-oriented paradigms.",
    skills: [
      { name: "Java", category: "Languages", proficiency: "Strong", description: "Object-oriented programming, data structures, robust typed patterns", isHighlight: true },
      { name: "JavaScript (ES6+)", category: "Languages", proficiency: "Advanced", description: "Modern ES6+ syntax, Promises, event loop, functional patterns", isHighlight: true },
      { name: "Object-Oriented Programming (OOP)", category: "Concepts", proficiency: "Core", description: "Inheritance, encapsulation, polymorphism, modular abstraction", isHighlight: true },
      { name: "Database Design", category: "Concepts", proficiency: "Core", description: "Normalization, entity-relationship diagrams, performance indexing" },
    ]
  },
  {
    id: "tools-ai",
    title: "Tools, AI & DevOps",
    badge: "Workflow & Ecosystem",
    description: "Version control, modern cloud deployment workflows, and AI integration.",
    skills: [
      { name: "Git", category: "Tools", proficiency: "Proficient", description: "Branching workflows, version tracking, merge management" },
      { name: "GitHub", category: "Tools", proficiency: "Proficient", description: "Repository hosting, collaborative reviews, CI/CD integrations", isHighlight: true },
      { name: "Vercel", category: "Platforms", proficiency: "Proficient", description: "Continuous deployment, serverless hosting, edge network setups", isHighlight: true },
      { name: "Linux", category: "Platforms", proficiency: "Working Knowledge", description: "Shell scripting, environment setup, process management" },
      { name: "VS Code", category: "Tools", proficiency: "Advanced", description: "Configured developer environment, debugging, extensions" },
      { name: "Prompt Engineering", category: "AI", proficiency: "Applied", description: "Leveraging LLM prompt structures for enhanced development workflows", isHighlight: true },
    ]
  }
];

export const allSkillsList = [
  "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript (ES6+)", 
  "Java", "Tailwind CSS", "REST APIs", "SQL", "Database Design", "OOP", 
  "Vercel", "Git & GitHub", "Prompt Engineering", "Responsive Web Design", "Linux", "VS Code"
];
