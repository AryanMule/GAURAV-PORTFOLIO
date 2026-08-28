export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  skillsUsed: string[];
  impactBadges: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "TechOctanet Services Pvt. Ltd.",
    role: "Web Developer Intern",
    period: "Dec 2024 – Feb 2025",
    location: "India",
    type: "Industry Internship",
    summary:
      "Contributed to frontend and full-stack web application development, building production-grade user interfaces, shopping workflows, and modular React architectures.",
    highlights: [
      "Developed responsive and user-friendly web interfaces using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
      "Developed dynamic product listing and shopping cart features for an e-commerce web application.",
      "Built reusable React components and implemented efficient state management to create maintainable and interactive user interfaces."
    ],
    skillsUsed: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "State Management", "Component Architecture"],
    impactBadges: [
      "Dynamic E-Commerce Logic",
      "Reusable Component Library",
      "Modular State Management",
      "100% Cross-Device Responsiveness"
    ]
  }
];
