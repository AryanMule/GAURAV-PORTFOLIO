export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  description: string;
  bullets: string[];
  techStack: string[];
  features: {
    title: string;
    description: string;
  }[];
  architectureHighlights: {
    layer: string;
    details: string;
  }[];
  githubUrl: string;
  liveDemoUrl: string;
  deploymentPlatform: string;
  gradientTheme: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-mern",
    title: "E-Commerce Web Application",
    subtitle: "High-Performance Full-Stack Shopping & Order Management Ecosystem",
    category: "Full Stack / MERN Stack",
    badge: "MERN Stack • Vercel Deployed",
    description:
      "A complete end-to-end e-commerce platform built with the MERN stack featuring dynamic product browsing, responsive cart synchronization, seamless checkout workflows, order state tracking, and performance-optimized database queries.",
    bullets: [
      "Developed a full-stack e-commerce application using the MERN stack, implementing product browsing, shopping cart, checkout, and order management functionality.",
      "Implemented user authentication and optimized database queries and frontend performance to improve application responsiveness.",
      "Deployed the application on Vercel and developed a responsive interface for consistent functionality across devices."
    ],
    features: [
      {
        title: "Product Browsing & State Sync",
        description: "Dynamic product listings with reactive filtering, instant search, and real-time shopping cart state management."
      },
      {
        title: "Secure Checkout & Order Lifecycle",
        description: "Full checkout pipeline with multi-step validation and persistent order history tracking."
      },
      {
        title: "Query & Performance Optimization",
        description: "Indexed MongoDB schema queries and fine-tuned React client rendering for minimal load times."
      },
      {
        title: "Production Deployment on Vercel",
        description: "Continuous deployment with responsive layouts tailored for mobile, tablet, and ultra-wide displays."
      }
    ],
    architectureHighlights: [
      { layer: "Frontend Client", details: "React.js, Tailwind CSS, Responsive Viewport Grid, Context State" },
      { layer: "Backend Server", details: "Node.js, Express.js REST API with modular controllers and routers" },
      { layer: "Database", details: "MongoDB with optimized schema modeling for products, users, and orders" },
      { layer: "Authentication", details: "Encrypted session/token based user authentication flow" }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "Vercel"],
    githubUrl: "https://github.com/GauravPatil45",
    liveDemoUrl: "https://github.com/GauravPatil45",
    deploymentPlatform: "Vercel",
    gradientTheme: "from-blue-600/20 via-indigo-600/10 to-transparent"
  },
  {
    id: "doctor-appointment-system",
    title: "Online Doctor Appointment Booking System",
    subtitle: "Role-Based Medical Scheduling Engine with JWT & Conflict-Free Queues",
    category: "Full Stack / MERN Stack",
    badge: "MERN Stack • RBAC • JWT Auth",
    description:
      "A comprehensive medical appointment platform built to orchestrate distinct workflows across Patients, Doctors, and Administrators with granular Role-Based Access Control (RBAC) and automated conflict-free slot scheduling.",
    bullets: [
      "Developed a role-based appointment booking platform supporting Patient, Doctor, and Admin workflows.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC) to provide secure, role-specific access.",
      "Built appointment scheduling workflows supporting conflict-free booking, rescheduling, and cancellation."
    ],
    features: [
      {
        title: "Triple Role Architecture (Patient, Doctor, Admin)",
        description: "Tailored dashboards with custom permissions and contextual operational capabilities."
      },
      {
        title: "JWT Authentication & Secure RBAC",
        description: "Stateless JSON Web Token authentication combined with granular middleware authorization."
      },
      {
        title: "Conflict-Free Appointment Engine",
        description: "Intelligent slot scheduling algorithms preventing double-booking, with full rescheduling and cancellation lifecycle."
      },
      {
        title: "Responsive Management Console",
        description: "Clean UI for doctors to manage slots and patients to track consultation status effortlessly."
      }
    ],
    architectureHighlights: [
      { layer: "Frontend Layer", details: "React.js with role-based routing guards and dynamic calendar grids" },
      { layer: "Security & Auth", details: "JWT (JSON Web Tokens) with cryptographically verified RBAC middleware" },
      { layer: "Scheduling Engine", details: "Conflict-resolution algorithm handling overlapping booking requests" },
      { layer: "Data Layer", details: "MongoDB schemas for doctors, patient records, slot matrices, and appointments" }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "REST APIs"],
    githubUrl: "https://github.com/GauravPatil45",
    liveDemoUrl: "https://github.com/GauravPatil45",
    deploymentPlatform: "Vercel / Cloud",
    gradientTheme: "from-emerald-600/20 via-teal-600/10 to-transparent"
  },
  {
    id: "hotel-booking-platform",
    title: "Hotel Booking Web Platform",
    subtitle: "Full-Featured Hospitality Reservation Engine with Cloudinary Image Asset Pipeline",
    category: "Full Stack / MERN Stack",
    badge: "MERN Stack • Cloudinary • CRUD",
    description:
      "An interactive full-stack hospitality reservation platform offering dynamic multi-parameter hotel discovery, price filtering, authentic user ratings & reviews, comprehensive CRUD operations, and Cloudinary image management.",
    bullets: [
      "Developed a full-stack hotel booking platform using the MERN stack, featuring hotel search, price filtering, reviews, and ratings.",
      "Implemented user authentication and CRUD operations for managing hotels and reviews.",
      "Integrated Cloudinary for image uploads and management within the application."
    ],
    features: [
      {
        title: "Dynamic Hotel Discovery & Price Filtering",
        description: "Real-time query filters based on pricing, amenities, locations, and guest rating tiers."
      },
      {
        title: "Complete CRUD Management",
        description: "Comprehensive administration interfaces to create, update, delete, and inspect hotel listings and verified reviews."
      },
      {
        title: "Cloudinary Asset Integration",
        description: "Direct media pipeline handling multi-image uploads, cloud storage optimization, and responsive delivery."
      },
      {
        title: "Review & Rating Aggregation",
        description: "User feedback mechanism computing aggregate ratings and displaying authentic traveler reviews."
      }
    ],
    architectureHighlights: [
      { layer: "Media Pipeline", details: "Cloudinary CDN integration with automatic image transformation and caching" },
      { layer: "Client Interface", details: "React.js with multi-parameter filter state and dynamic image galleries" },
      { layer: "API & Backend", details: "Express.js REST controllers handling CRUD operations and rating calculations" },
      { layer: "Persistence", details: "MongoDB storing hotel schemas, nested review documents, and user entities" }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/GauravPatil45",
    liveDemoUrl: "https://github.com/GauravPatil45",
    deploymentPlatform: "Vercel / Cloud",
    gradientTheme: "from-cyan-600/20 via-blue-600/10 to-transparent"
  }
];
