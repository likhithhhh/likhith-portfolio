// =========================================================================
// LIKHITH CHAPPATI – PORTFOLIO DATA CONFIGURATION
// Single Source of Truth for Resume Information, Projects, Skills & Credentials
// =========================================================================

export const PERSONAL_INFO = {
  name: "Likhith Chappati",
  shortName: "Likhith",
  initials: "LC",
  title: "Full Stack Developer",
  specialization: "MERN Stack | React.js | Node.js | Backend Engineering",
  headline: "Building Digital Experiences That Make an Impact.",
  subheadline:
    "I'm a Full Stack Developer passionate about creating modern web applications, scalable backend systems and meaningful digital experiences.",
  about: {
    intro:
      "I'm a Computer Science graduate from Rajiv Gandhi University of Knowledge Technologies, passionate about building modern web applications and solving real-world problems through technology.",
    expertise:
      "My experience spans full stack development, backend engineering, RESTful APIs, database optimization and enterprise workflow systems.",
    experienceSummary:
      "I've worked on projects involving secure authentication, role-based access control, application performance optimization and enterprise integrations.",
    philosophy:
      "I enjoy transforming ideas into functional digital products while continuously exploring new technologies and improving my software engineering skills."
  },
  education: {
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    degree: "B.Tech – Computer Science and Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 8.7 / 10.0",
    highlights: [
      "Consistent academic performance across foundational and advanced CS coursework",
      "Specialized in Systems Architecture, Distributed Data & Algorithm Design",
      "Active participant in technical symposiums and competitive coding"
    ]
  },
  contact: {
    email: "likhithchappati2026@gmail.com",
    phone: "+91-8099814784",
    location: "Andhra Pradesh, India",
    status: "Open to Full-Time & Engineering Roles"
  },
  social: {
    github: "https://github.com/likhithhhh",
    linkedin: "https://linkedin.com/in/likhith-chappati"
  },
  resumePath: "/Likhith_Chappati_Resume.pdf"
};

export const ACHIEVEMENTS = [
  {
    value: 8.7,
    suffix: "/10",
    label: "B.Tech CGPA",
    sublabel: "Academic Excellence",
    description: "Consistent top-tier academic record in Computer Science and Engineering at RGUKT."
  },
  {
    value: 100,
    suffix: "+",
    label: "LeetCode Solved",
    sublabel: "Problem Solving",
    description: "Algorithmic mastery in Data Structures, Dynamic Programming, and Graph Theory."
  },
  {
    value: 3,
    suffix: "",
    label: "Technical Internships",
    sublabel: "Industry Experience",
    description: "Proven real-world delivery across ServiceNow enterprise systems, MERN full stack, and industrial software."
  },
  {
    value: 40,
    suffix: "%",
    label: "Search Optimization",
    sublabel: "Database Performance",
    description: "Boosted flight query throughput through targeted compound indexing and pipeline optimization."
  }
];

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "databases", label: "Databases" },
  { id: "enterprise", label: "Enterprise & Workflow" },
  { id: "tools", label: "Tools" },
  { id: "fundamentals", label: "CS Fundamentals" }
];

export const SKILLS = [
  // Programming Languages
  {
    name: "JavaScript",
    category: "languages",
    level: "Advanced",
    icon: "Code2",
    tag: "Core",
    description: "Modern asynchronous workflows, closures, promises, event loop & DOM engines."
  },
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    icon: "Coffee",
    tag: "Systems",
    description: "Object-oriented software development, concurrency, collections framework & JVM internals."
  },
  {
    name: "Python",
    category: "languages",
    level: "Proficient",
    icon: "Terminal",
    tag: "Data/Scripting",
    description: "Automated scripting, data manipulation, algorithm design & backend scripting."
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    icon: "Atom",
    tag: "Core Frontend",
    description: "Functional components, custom hooks, state management, virtual DOM optimization."
  },
  {
    name: "HTML5",
    category: "frontend",
    level: "Advanced",
    icon: "FileCode",
    tag: "Web Standards",
    description: "Semantic layouts, accessibility (WCAG), modern HTML5 APIs & storage."
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "Advanced",
    icon: "Palette",
    tag: "Styling",
    description: "Flexbox, CSS Grid, custom properties, keyframe animations & responsive fluid layouts."
  },
  {
    name: "Bootstrap",
    category: "frontend",
    level: "Proficient",
    icon: "LayoutGrid",
    tag: "UI Kit",
    description: "Rapid responsive layout scaffolding, utility-first patterns, responsive grids."
  },
  // {
  //   name: "Responsive Web Design",
  //   category: "frontend",
  //   level: "Advanced",
  //   icon: "Smartphone",
  //   tag: "UX",
  //   description: "Mobile-first architectures, touch targets, multi-screen fluid breakpoints."
  // },

  // Backend & APIs
  {
    name: "Node.js",
    category: "backend",
    level: "Advanced",
    icon: "Server",
    tag: "Runtime",
    description: "Non-blocking event-driven backend services, streams, buffer management & microservices."
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Advanced",
    icon: "Cpu",
    tag: "Framework",
    description: "REST API routing, robust error middleware, payload parsing & pipeline composition."
  },
  {
    name: "REST APIs",
    category: "backend",
    level: "Advanced",
    icon: "Network",
    tag: "Architecture",
    description: "Resource-oriented API endpoints, idempotency, HTTP status standards & versioning."
  },
  // {
  //   name: "JWT Authentication",
  //   category: "backend",
  //   level: "Advanced",
  //   icon: "ShieldCheck",
  //   tag: "Security",
  //   description: "Stateless bearer token issuance, refresh token rotation, payload encryption & signing."
  // },
  // {
  //   name: "Role-Based Access Control",
  //   category: "backend",
  //   level: "Advanced",
  //   icon: "Lock",
  //   tag: "Security",
  //   description: "Granular permissions, middleware route guards, multi-role access isolation (Admin/Agent/User)."
  // },
  // {
  //   name: "Middleware Architecture",
  //   category: "backend",
  //   level: "Advanced",
  //   icon: "Layers",
  //   tag: "Infrastructure",
  //   description: "Centralized logging, rate limiting, request validation interceptors & auth guards."
  // },
  // {
  //   name: "CRUD Operations",
  //   category: "backend",
  //   level: "Advanced",
  //   icon: "Database",
  //   tag: "Data Flow",
  //   description: "Atomic transactional operations, batch updates, soft deletes & data consistency."
  // },
  // {
  //   name: "API Integration",
  //   category: "backend",
  //   level: "Advanced",
  //   icon: "Share2",
  //   tag: "Integration",
  //   description: "Third-party webhook ingestion, OAuth2 flows, enterprise system connectors."
  // },
  {
    name: "Error Handling & Validation",
    category: "backend",
    level: "Advanced",
    icon: "AlertCircle",
    tag: "Reliability",
    description: "Input sanitation, schema validation (Joi/Zod), unified JSON error envelopes."
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    level: "Advanced",
    icon: "Boxes",
    tag: "NoSQL",
    description: "Document models, aggregation pipelines, schema design with Mongoose."
  },
  {
    name: "SQL",
    category: "databases",
    level: "Proficient",
    icon: "Database",
    tag: "Relational",
    description: "Relational schema modeling, multi-table joins, subqueries, ACID constraints."
  },
  // {
  //   name: "Database Indexing",
  //   category: "databases",
  //   level: "Advanced",
  //   icon: "Zap",
  //   tag: "Optimization",
  //   description: "Compound indexes, partial indexes, index coverage, query planner analysis (explain())."
  // },
  // {
  //   name: "Query Optimization",
  //   category: "databases",
  //   level: "Advanced",
  //   icon: "TrendingUp",
  //   tag: "Performance",
  //   description: "Query execution time minimization, memory leak prevention, connection pooling."
  // },

  // Enterprise & Workflow
  {
    name: "ServiceNow",
    category: "enterprise",
    level: "Proficient",
    icon: "Briefcase",
    tag: "Enterprise",
    description: "Telecom order management, enterprise IT service management, incident & change tracking."
  },
  // {
  //   name: "Flow Designer",
  //   category: "enterprise",
  //   level: "Proficient",
  //   icon: "Workflow",
  //   tag: "Automation",
  //   description: "Codeless and low-code automated workflow orchestration, triggers & error subflows."
  // },
  // {
  //   name: "Decision Builder",
  //   category: "enterprise",
  //   level: "Proficient",
  //   icon: "GitBranch",
  //   tag: "Rules Engine",
  //   description: "Complex business rule mapping, decision tables & multi-variable condition trees."
  // },
  // {
  //   name: "Business Rules",
  //   category: "enterprise",
  //   level: "Proficient",
  //   icon: "FileCheck",
  //   tag: "Logic",
  //   description: "Server-side scripts executed on record insert, update, or delete in ServiceNow."
  // },
  {
    name: "Workflow Automation",
    category: "enterprise",
    level: "Proficient",
    icon: "Bot",
    tag: "Efficiency",
    description: "Automated provisioning, notification chains, SLA monitoring and audit logging."
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    icon: "GitPullRequest",
    tag: "VCS",
    description: "Feature branch workflows, pull requests, rebase strategies & collaborative version control."
  },
  // {
  //   name: "Postman",
  //   category: "tools",
  //   level: "Advanced",
  //   icon: "Send",
  //   tag: "Testing",
  //   description: "API testing collections, environment variables, mock servers & automated pre-request scripts."
  // },
  // {
  //   name: "VS Code",
  //   category: "tools",
  //   level: "Advanced",
  //   icon: "Code",
  //   tag: "IDE",
  //   description: "Modern developer tooling, debugger configuration, snippets & workspace profiles."
  // },
  {
    name: "N8N Automation",
    category: "tools",
    level: "Proficient",
    icon: "Activity",
    tag: "Automation",
    description: "Self-hosted workflow automations connecting webhooks, databases and alert channels."
  },
  // {
  //   name: "GitHub Copilot & Cursor",
  //   category: "tools",
  //   level: "Advanced",
  //   icon: "Sparkles",
  //   tag: "AI Dev",
  //   description: "AI-assisted pair-programming, prompt engineering, refactoring & automated unit test scaffolding."
  // },

  // CS Fundamentals
  {
    name: "Data Structures & Algorithms",
    category: "fundamentals",
    level: "Advanced",
    icon: "Binary",
    tag: "CS Core",
    description: "Trees, Graphs, Dynamic Programming, Heap, Sorting, Big-O Complexity Analysis."
  },
  {
    name: "Object-Oriented Programming",
    category: "fundamentals",
    level: "Advanced",
    icon: "Box",
    tag: "CS Core",
    description: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID design principles."
  },
  {
    name: "DBMS",
    category: "fundamentals",
    level: "Advanced",
    icon: "HardDrive",
    tag: "CS Core",
    description: "Normalization (1NF–BCNF), Transaction management, ACID properties, Concurrency."
  },
  {
    name: "Operating Systems",
    category: "fundamentals",
    level: "Proficient",
    icon: "Terminal",
    tag: "CS Core",
    description: "Processes, Threads, CPU scheduling, Memory virtualization, Deadlock resolution."
  },
  {
    name: "Computer Networks",
    category: "fundamentals",
    level: "Proficient",
    icon: "Globe",
    tag: "CS Core",
    description: "OSI & TCP/IP models, HTTP/HTTPS, DNS resolution, TCP handshake, WebSockets."
  },
  {
    name: "Software Development Lifecycle",
    category: "fundamentals",
    level: "Advanced",
    icon: "RefreshCw",
    tag: "Engineering",
    description: "Agile methodologies, sprint cycles, requirement elicitation, CI/CD, QA testing."
  }
];

export const PROJECTS = [
  {
    id: "educore-lms",
    featuredNumber: "01",
    title: "EduCore",
    subtitle: "Learning Management System",
    category: "Full Stack Platform",
    tagline: "Scalable Learning Ecosystem with Role-Based Progress & Modular APIs",
    description:
      "A full-featured learning management platform supporting course creation, student enrollment and role-based progress tracking. Built from scratch with an emphasis on rock-solid security, clear route separation, and modular scalability.",
    impactMetric: "Modular RESTful Architecture",
    highlights: [
      "JWT authentication & stateless session security",
      "Role-based access control (Admin, Instructor, Student)",
      "Modular RESTful API architecture built for scalability",
      "Course enrollment workflows & transactional state management",
      "Student progress tracking and lesson completion analytics",
      "Granular permission guards for protected learning materials"
    ],
    architecture: {
      frontend: "React.js, Responsive UI, State Management, Custom Hook Routers",
      backend: "Node.js, Express.js REST API with JWT Auth Middleware",
      database: "MongoDB with Mongoose Schemas & Relational Virtuals",
      security: "Bcrypt password hashing, RBAC token verification, Input validation"
    },
    contributions: [
      "Architected the entire RESTful API with clean controller-service-repository patterns.",
      "Engineered the enrollment pipeline ensuring concurrent students cannot trigger race conditions.",
      "Designed responsive UI dashboards tailored separately for students and course creators.",
      "Implemented JWT token-based session handling with automatic unauthorized route ejection."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "REST APIs"],
    links: {
      github: "https://github.com/likhithhhh/EduCore",
      live: "https://edu-core-teal.vercel.app/",
      hasLive: true,
      statusBadge: "Repository & Code Accessible"
    },
    mockupType: "lms"
  },
  {
    id: "wandernest",
    featuredNumber: "02",
    title: "WanderNest",
    subtitle: "Hotel Booking System",
    category: "Web Application",
    tagline: "High-Performance Hospitality Booking Engine with Seamless Discovery",
    description:
      "A responsive hotel booking application designed to simplify property discovery and booking workflows. Focuses on rapid property filtering, optimized static asset delivery across mobile devices, and secure session management.",
    impactMetric: "Enhanced Asset Delivery & Sub-second Search",
    highlights: [
      "Hotel listing management & dynamic property discovery",
      "Full-text search functionality with location & amenity filters",
      "Session-based authentication with secure cookie storage",
      "Streamlined end-to-end booking workflows and confirmations",
      "Secure access control preventing unauthorized booking modifications",
      "Cross-device optimized media asset delivery for instant rendering"
    ],
    architecture: {
      frontend: "React.js SPA with Responsive Fluid Grids & Mobile Touch UX",
      backend: "Node.js / Express.js Service Layer handling reservation states",
      database: "MongoDB with compound indexes on location, pricing, and availability",
      security: "Session validation, CORS whitelisting, HTTP-only authentication"
    },
    contributions: [
      "Constructed the multi-criteria search filter engine allowing real-time hotel discovery.",
      "Optimized responsive asset loading ensuring fluid performance across mobile and desktop.",
      "Designed the booking state machine preventing double-booking during concurrent checkouts.",
      "Implemented authenticated user dashboards for managing upcoming and past reservations."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Session Auth", "Responsive Design"],
    links: {
      github: "https://github.com/likhithhhh/HotelNest",
      live: "https://delta-major-project-1683.onrender.com/listings",
      hasLive: true,
      statusBadge: "Repository & Code Accessible"
    },
    mockupType: "hotel"
  },
  {
    id: "clientflow-crm",
    featuredNumber: "03",
    title: "ClientFlowCRM",
    subtitle: "CRM System",
    category: "Enterprise Software",
    tagline: "End-to-End Client Pipeline Management with Automated Follow-ups",
    description:
      "An end-to-end customer relationship management application for managing leads, client records and communication workflows. Engineered with indexed MongoDB collections to deliver lightning-fast CRUD operations at scale.",
    impactMetric: "Indexed Collections for Fast CRUD",
    highlights: [
      "Comprehensive lead management and stage-by-stage pipelines",
      "Centralized client record management with complete interaction histories",
      "Automated follow-up reminders and scheduled task tracking",
      "Secure transactional CRUD operations with optimistic locking",
      "MongoDB indexing and query optimization for instant dashboard metrics",
      "Role-isolated team workspaces for sales agents and managers"
    ],
    architecture: {
      frontend: "React.js with Interactive Pipeline Boards and Client Profile Cards",
      backend: "Express.js REST API with automated cron reminder hooks",
      database: "MongoDB with compound indexes on lead status and assigned agent",
      security: "Role-based authorization middleware, sanitized input queries"
    },
    contributions: [
      "Engineered automated reminder scheduler alerting reps on stale leads.",
      "Optimized MongoDB queries through compound indexing, slashing report generation lag.",
      "Built intuitive pipeline management interface enabling drag-and-drop lead stages.",
      "Structured comprehensive client activity audit logs for managerial oversight."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Query Optimization", "REST APIs"],
    links: {
      github: "https://github.com/likhithhhh/Clientsphere-CRM",
      live: "https://my-crm-app-lake.vercel.app/",
      hasLive: true,
      statusBadge: "Repository & Code Accessible"
    },
    mockupType: "crm"
  },
  {
    id: "flight-management",
    featuredNumber: "04",
    title: "Flight Management System",
    subtitle: "SmartBridge Internship Project",
    category: "Internship Capstone",
    tagline: "High-Throughput Airline Reservation Engine with 40% Query Boost",
    description:
      "A MERN-stack flight management application developed during my Full Stack Developer internship at SmartBridge Solutions. Handles high-concurrency seat discovery and booking across multiple passenger classes.",
    impactMetric: "40% Performance Boost & 500+ Daily Requests",
    highlights: [
      "Improved search performance by 40% using MongoDB compound indexing",
      "REST APIs handling 500+ daily requests reliably in live staging",
      "JWT authentication with strict password validation & token expiry",
      "Comprehensive input validation and centralized error handling envelopes",
      "Three-tier role-based access for Admin, Agent, and Passenger roles",
      "Zero unauthorized access vulnerabilities reported during security review"
    ],
    architecture: {
      frontend: "React.js with Dynamic Flight Search, Seat Grid, and E-Ticket Generator",
      backend: "Node.js & Express.js micro-architecture with custom middleware pipeline",
      database: "MongoDB with specialized indexes on route vectors (origin-destination-date)",
      security: "JWT Auth, Joi input schema validation, RBAC route gates"
    },
    contributions: [
      "Conducted database query benchmarking and implemented compound indexes on route searches, boosting search speed by 40%.",
      "Developed robust REST API endpoints serving 500+ daily reservation requests.",
      "Implemented strict 3-tier RBAC isolating Admin flight controls, Agent booking desks, and Passenger self-service.",
      "Integrated automated error logging and response middleware preventing server crashes on bad inputs."
    ],
    technologies: ["MERN Stack", "MongoDB Indexing", "JWT Auth", "RBAC", "RESTful APIs", "Express.js"],
    links: {
      github: "https://github.com/likhithhhh/Flight_Finder",
      live: "https://flight-finder-1.onrender.com/",
      hasLive: true,
      statusBadge: "Internship Capstone"
    },
    mockupType: "flight"
  },
  {
    id: "gatepass-management",
    featuredNumber: "05",
    title: "Gatepass Management System",
    subtitle: "RINL Steel Plant Project",
    category: "Industrial Enterprise",
    tagline: "Digitizing Enterprise Security Workflows for 1,000+ Industrial Personnel",
    description:
      "An enterprise gatepass management application designed to digitize manual paper-based workflows at Visakhapatnam Steel Plant (RINL). Modernized legacy security desk approvals into an instant digital record system.",
    impactMetric: "30% Processing Time Reduction for 1,000+ Staff",
    highlights: [
      "Digitized manual paper gatepass workflows for 1,000+ employees",
      "Centralized MongoDB records eliminating duplicate physical logs",
      "Reduced gatepass processing time by 30% through instant digital verification",
      "Multi-tier role-based access for Admin, Security Officers, and Employees",
      "Real-time pass verification terminal for gate security personnel",
      "Audit-compliant historical logging with time-stamped entry/exit records"
    ],
    architecture: {
      frontend: "React.js Enterprise Portal with High-Contrast Fast-Verification Desk",
      backend: "Node.js & Express.js with atomic status update endpoints",
      database: "MongoDB with indexed employee IDs and date-partitioned pass logs",
      security: "Departmental access control, physical security role validation"
    },
    contributions: [
      "Replaced manual multi-signature paper slips with a seamless digital approval hierarchy.",
      "Cut gate checkpoint wait times by 30% through indexed instant employee pass lookups.",
      "Built dedicated security guard terminal view for instant single-click validation.",
      "Ensured zero data corruption through atomic database status updates."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "Enterprise Workflows"],
    links: {
      github: "https://github.com/likhithhhh",
      live: "ADD_LIVE_WEBSITE_URL_HERE",
      hasLive: false,
      statusBadge: "RINL Industrial Deployment"
    },
    mockupType: "gatepass"
  }
];

export const EXPERIENCES = [
  {
    company: "CubeSimple Private Limited",
    role: "Intern – ServiceNow Analyst Trainee",
    duration: "May 2026 – August 2026",
    location: "Chennai – Onsite",
    badge: "Upcoming / Confirmed Internship",
    type: "Enterprise Workflow & Systems Integration",
    summary:
      "Selected for enterprise ServiceNow order lifecycle operations supporting telecom infrastructure and distributed enterprise systems.",
    highlights: [
      "Worked on Brightspeed Telecom Order Management, supporting the end-to-end lifecycle of Copper (DSL/POTS) service orders.",
      "Supported integrations with enterprise systems including O2 (Internet Provisioning), BRIM (Billing), NewStar (Number Portability), and C360 (Customer Management).",
      "Analyzed and resolved complex provisioning, billing, and workflow issues across distributed microservices.",
      "Utilized Decision Builder, Flow Designer, Business Rules, and automated audit tasks to streamline enterprise workflows."
    ],
    skills: ["ServiceNow", "Flow Designer", "Decision Builder", "Business Rules", "Enterprise Integration", "BRIM & O2"],
    companyLinkedIn: "https://www.linkedin.com/company/cubesimple/posts/"
  },
  {
    company: "SmartBridge Solutions Pvt Ltd",
    role: "Intern – Full Stack Developer",
    duration: "May 2025 – July 2025",
    location: "Hyderabad – Remote",
    badge: "Full Stack Internship",
    type: "MERN Stack Development & Optimization",
    summary:
      "Developed an end-to-end MERN Flight Management System with a strong focus on database performance, high throughput REST APIs, and strict security.",
    highlights: [
      "Engineered the full MERN-stack architecture for a scalable Flight Management System.",
      "Improved flight search performance by 40% through MongoDB compound indexing and query optimization.",
      "Deployed secure REST APIs handling 500+ daily requests with input validation and unified error handling.",
      "Integrated JWT authentication and enforced Role-Based Access Control (RBAC) across Admin, Agent, and Passenger roles, eliminating unauthorized access."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC", "Query Optimization"],
    companyLinkedIn: "https://www.linkedin.com/company/smartbridge-educational-services-pvt-ltd/home/"
  },
  {
    company: "Visakhapatnam Steel Plant (RINL)",
    role: "Intern – Web Developer",
    duration: "May 2025 – June 2025",
    location: "Visakhapatnam – Onsite",
    badge: "Industrial Web Engineering",
    type: "Enterprise Workflow Digitization",
    summary:
      "Digitized manual gatepass and security operations at one of India's premier public sector steel manufacturing facilities.",
    highlights: [
      "Engineered a digital Gatepass Management System replacing paper workflows for 1,000+ industrial employees.",
      "Reduced gatepass processing and checkpoint verification time by 30% through indexed MongoDB queries.",
      "Centralized security logs and access histories for transparent compliance auditing.",
      "Enforced Role-Based Access Control (RBAC) across Admin, Security Staff, and Plant Employees ensuring total data integrity."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "Industrial Digitization"],
    companyLinkedIn: "https://www.linkedin.com/company/visakhapatnam-steel-plant/home/"
  }
];

export const CERTIFICATIONS = [
  {
    title: "ServiceNow Development",
    issuer: "CubeSimple",
    year: "2026",
    category: "Enterprise Workflows",
    icon: "Workflow",
    description: "Enterprise workflow automation, Flow Designer, Decision Builder, and Business Rules.",
    certificateUrl: "https://drive.google.com/file/d/1KUJGd0hVxTdoq5yAq10nWT6W_6r47t--/view"
  },
  {
    title: "Industrial Training",
    issuer: "RINL Steel Plant",
    year: "2025",
    category: "Enterprise Systems",
    icon: "Building2",
    description: "Hands-on industrial web development, access control systems, and enterprise data integrity.",
    certificateUrl: "https://drive.google.com/file/d/1qvtg4HdFhlYAw0txK9hDgDke2w6hgrpn/view"
  },
  {
    title: "Full-Stack Web Development",
    issuer: "SmartBridge",
    year: "2025",
    category: "Full Stack",
    icon: "Layers",
    description: "Full lifecycle MERN stack engineering, REST API architecture, and performance optimization.",
    certificateUrl: "https://drive.google.com/file/d/11BkbRVPb9X3Fa27Vfk8rw2BplcJGumNw/view"
  },
  {
    title: "Object-Oriented Analysis & Design",
    issuer: "NPTEL",
    year: "2024",
    category: "Software Engineering",
    icon: "Box",
    description: "UML modeling, design patterns, architectural modularity, and object-oriented paradigms.",
    certificateUrl: "https://drive.google.com/file/d/1OJrCfQjgd01e3100j3ri2rbzJkQnsnEk/view"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "NPTEL",
    year: "2025",
    category: "Artificial Intelligence",
    icon: "Cpu",
    description: "Transformer foundations, attention mechanisms, fine-tuning techniques, and LLM applications.",
    certificateUrl: "https://drive.google.com/file/d/1aRIfpGSksZTYz18Lc8a4bCGAWNA-hfKl/view"
  },
  {
    title: "Generative AI in Action",
    issuer: "IBM",
    year: "2024",
    category: "AI & Innovation",
    icon: "Sparkles",
    description: "Enterprise applications of generative artificial intelligence and foundational model integration.",
    certificateUrl: "https://drive.google.com/file/d/1Kpx9MEVX_FxdmBwzuiG3O8oe9JH2wI3Y/view"
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Milestones", href: "#milestones" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
