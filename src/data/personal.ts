export interface SocialLink {
  name: string;
  url: string;
  label: string;
  handle: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  cgpa: string;
  details: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: string;
}

export interface LeadershipItem {
  organization: string;
  description: string;
}

export const personalData = {
  name: "Gaurav Patil",
  role: "Software Developer | Full Stack Engineer",
  tagline: "Architecting scalable MERN applications, robust database systems, and high-performance interactive web experiences.",
  email: "patilgaurav6814@gmail.com",
  location: "Pune, Maharashtra, India",
  status: "Available for Full-time Roles & Internships",
  summary:
    "Computer Science engineering graduate with hands-on full-stack web development experience through a Web Developer internship and multiple MERN stack projects. Skilled in JavaScript, MERN stack, OOP, SQL, relational and NoSQL databases, and REST APIs. Experienced in building database-driven applications, authentication and authorization systems, and responsive user interfaces, with strong problem-solving, teamwork, and leadership skills.",
  
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/GauravPatil45",
      handle: "/GauravPatil45",
      label: "View Repositories",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gaurav-patil",
      handle: "/gaurav-patil",
      label: "Connect on LinkedIn",
    },
  },

  quickStats: [
    { value: "7.42", label: "Engineering CGPA", detail: "Dr. D. Y. Patil Institute of Tech" },
    { value: "3+", label: "Full-Stack MERN Apps", detail: "End-to-end architectures built" },
    { value: "Dec '24 – Feb '25", label: "Industry Internship", detail: "TechOctanet Services Pvt. Ltd." },
    { value: "100%", label: "Responsive & Modular", detail: "React & Tailwind state engines" },
  ],

  education: {
    degree: "B.E (Computer Science)",
    field: "Computer Science and Engineering",
    institution: "Dr. D. Y. Patil Institute of Technology, Pimpri",
    cgpa: "7.42",
    period: "2022 - 2026",
    details: "Specializing in Computer Science Engineering, object-oriented software engineering, relational & NoSQL database management, data structures, algorithms, and distributed web architectures.",
    highlights: [
      "Consistent academic record with 7.42 CGPA",
      "Hands-on full-stack application development in MERN stack",
      "Active participation in technical and collegiate leadership initiatives"
    ]
  } as EducationItem,

  certifications: [
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      type: "Comprehensive MERN & Full Stack Engineering"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      type: "Advanced Querying, Joins & Database Manipulation"
    }
  ] as CertificationItem[],

  leadership: [
    {
      organization: "Yuva Maharashtra",
      description: "Contributed actively to event planning, student engagement initiatives, and collaborative technical community programs."
    }
  ] as LeadershipItem[],
};
