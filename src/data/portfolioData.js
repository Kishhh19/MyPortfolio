/**
 * PORTFOLIO DATA CONFIGURATION
 * Single source of truth for Mark Laurence M. Santos's BSIT Portfolio.
 * Synchronized with the Official Executive Curriculum Vitae.
 */

export const personalInfo = {
  name: "Mark Laurence M. Santos",
  shortName: "Mark",
  role: "BSIT Student | Web Developer",
  course: "Bachelor of Science in Information Technology (BSIT)",
  yearLevel: "4th Year",
  careerGoal: "Web Developer",
  headline: "Building Modern, Scalable Web Solutions and Intelligent Systems.",
  heroSubtext: "A 4th-year BSIT student at Angeles University Foundation with strong academic and practical foundations in full-stack web application development, database architecture, and systems engineering. Developer of Autotrace: An Automated License Plate Recognition system, and currently engineering an AI chatbot.",
  aboutText: [
    "Dedicated, analytical, and solutions-oriented 4th-Year BSIT Student at Angeles University Foundation with strong academic and practical foundations in full-stack web application development, database architecture, and systems engineering.",
    "Demonstrates a disciplined problem-solving approach, keen attention to detail, and a commitment to continuous learning. Seeking to leverage technical capabilities, clean coding standards, and information technology coursework in an entry-level IT or Software Engineering role.",
    "My senior capstone project, 'Autotrace: An Automated License Plate Recognition System', highlights my experience in connecting frontend web interfaces with computer vision and database backends. I am also currently developing an interactive web chatbot."
  ],
  status: "Open for Internships & Web Developer Roles",
  location: "Angeles City, Pampanga, Philippines",
  university: "Angeles University Foundation",
  email: "marklaurencesantos558@gmail.com",
  phone: "09283287141",
  github: "https://github.com/marklaurence-santos",
  linkedin: "https://www.linkedin.com/in/mark-laurence-s-032713294/",
  resumePath: "./resume.html",
  resumePdfPath: "/resume/Mark-Laurence-M-Santos-Resume.pdf",
};

export const quickInfoCards = [
  {
    id: 1,
    label: "University",
    value: "AUF",
    subtext: "Angeles University Foundation",
    icon: "GraduationCap",
    accent: "teal",
  },
  {
    id: 2,
    label: "Core Role",
    value: "Web Developer",
    subtext: "BSIT 4th Year Senior",
    icon: "Code2",
    accent: "blue",
  },
  {
    id: 3,
    label: "Capstone Project",
    value: "Autotrace ALPR",
    subtext: "Automated Recognition",
    icon: "FolderGit2",
    accent: "purple",
  },
  {
    id: 4,
    label: "Current Build",
    value: "AI Chatbot",
    subtext: "Active Development",
    icon: "Rocket",
    accent: "emerald",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    description: "Core programming languages, backend scripting, and database querying.",
    skills: [
      { name: "PHP", level: "Core Proficient", description: "Backend Logic, Server Scripting, OOP" },
      { name: "JavaScript (ES6+)", level: "Core Proficient", description: "DOM Manipulation, Async/Await, Modular Code" },
      { name: "Python", level: "Core Academic", description: "Computer Vision, Automation, OCR Scripts" },
      { name: "Java", level: "Core Academic", description: "Object-Oriented Programming, Data Structures" },
      { name: "C#", level: "Core Academic", description: "Application Development, Desktop Systems" },
      { name: "SQL", level: "Core Proficient", description: "Relational Queries, Joins, Schema Design" },
    ]
  },
  {
    category: "Web Technologies & Frameworks",
    description: "Modern frontend frameworks, responsive UI styling, and full-stack architectures.",
    skills: [
      { name: "HTML5", level: "Proficient", description: "Semantic Markup, Accessibility, Standards" },
      { name: "CSS3", level: "Proficient", description: "Custom Responsive Styling, Flexbox, Grid" },
      { name: "Bootstrap 5", level: "Proficient", description: "Rapid UI Wireframing, Grid Systems" },
      { name: "Tailwind CSS", level: "Proficient", description: "Utility-First Styling, Modern Dark Mode" },
      { name: "React.js", level: "Proficient", description: "Component State, Hooks, SPA Architecture" },
      { name: "Node.js", level: "Intermediate", description: "Server Runtime, REST APIs, Package Management" },
      { name: "Laravel (MVC)", level: "Intermediate", description: "PHP Framework, Routing, Blade, ORM" },
      { name: "RESTful APIs", level: "Proficient", description: "Endpoint Integration, JSON Data Serialization" },
    ]
  },
  {
    category: "Databases & Tools",
    description: "Relational database engines, version control, and development environments.",
    skills: [
      { name: "MySQL", level: "Proficient", description: "Relational Database Design, CRUD, Indexing" },
      { name: "MariaDB", level: "Proficient", description: "Database Management, Transactional Security" },
      { name: "PostgreSQL", level: "Intermediate", description: "Object-Relational Data Modeling" },
      { name: "Git / GitHub", level: "Proficient", description: "Version Control, Branching, Repositories" },
      { name: "XAMPP / Apache", level: "Proficient", description: "Local Web Server & PHP Environment" },
      { name: "Postman", level: "Proficient", description: "API Testing, Request Validation, Debugging" },
      { name: "VS Code", level: "Proficient", description: "Primary IDE, Extensions, CLI Tooling" },
    ]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "Comprehensive grounding in foundational cybersecurity concepts, digital defense mechanisms, threat landscapes, and network vulnerability identification.",
    icon: "ShieldVirus",
    accent: "blue"
  },
  {
    id: 2,
    title: "Cybersecurity Essentials",
    description: "In-depth training on essential security controls, risk management, cryptographic principles, defense-in-depth strategies, and incident response.",
    icon: "UserShield",
    accent: "teal"
  },
  {
    id: 3,
    title: "Cyber Hygiene Training",
    description: "Practical training on proactive threat mitigation, credential security, data privacy protection, phishing defense, and secure online infrastructure practices.",
    icon: "ShieldCheck",
    accent: "emerald"
  },
  {
    id: 4,
    title: "AWS Cloud Computing",
    description: "Foundational training in Amazon Web Services (AWS) cloud architecture, core compute and storage solutions, cloud virtualization, and deployment fundamentals.",
    icon: "Cloud",
    accent: "amber"
  }
];

export const hobbiesData = [
  {
    title: "Reading Books",
    description: "Engaging with technology publications, software design patterns, systems architecture principles, and personal development books.",
    icon: "BookOpen"
  },
  {
    title: "Watching Documentaries",
    description: "Exploring deep-dives on technological breakthroughs, engineering marvels, computer science history, and investigative analyses.",
    icon: "Film"
  }
];

export const projectsData = [
  {
    id: "autotrace-alpr-system",
    title: "Autotrace: Automated License Plate Recognition (ALPR)",
    category: "Capstone & System Development",
    shortDescription: "A smart computer vision and web-integrated system that automatically detects, extracts, and verifies vehicle license plates for automated gate access and traffic monitoring.",
    problem: "Manual vehicle logging at campus gates and commercial establishments is slow, prone to human error, causes severe traffic congestion, and lacks reliable timestamped audit trails.",
    objective: "To design and engineer an automated license plate recognition (ALPR) system that detects vehicles in real-time, extracts alphanumeric plate characters with high OCR accuracy, and performs instantaneous database verification for access clearance.",
    solution: "Developed 'Autotrace'—combining real-time camera video stream processing, bounding-box plate localization, Optical Character Recognition (OCR), relational SQL logging, and a responsive web monitoring dashboard for security operators.",
    features: [
      "Real-time video feed stream integration with sub-second plate localization",
      "Optical Character Recognition (OCR) character segmentation and extraction",
      "Instant database verification (Registered Vehicle, Visitor, Flagged/Blacklisted)",
      "Automated entry/exit timestamp logging with snapshot image archiving",
      "Security operator dashboard with live telemetry and manual override controls",
      "Searchable vehicle audit trail with date-range, plate number, and status filtering"
    ],
    technologies: ["PHP", "JavaScript", "Python / OCR", "Tailwind CSS", "React.js", "MySQL / SQL", "RESTful APIs"],
    developmentProcess: [
      { stage: "Planning", detail: "Conducted site requirement analysis on vehicle speeds, camera angles, lighting conditions, and access control workflows at Angeles University Foundation." },
      { stage: "UI/UX Design", detail: "Designed a high-visibility, dark-mode operator console with real-time detection bounding overlays and instant badge alerts." },
      { stage: "Development", detail: "Constructed the end-to-end pipeline connecting camera video frames, plate detection algorithms, OCR text extraction, and frontend UI." },
      { stage: "Database Integration", detail: "Designed a normalized SQL schema (Vehicles, Owners, AccessLogs, Blacklist, CameraNodes) with indexing on plate strings." },
      { stage: "Testing", detail: "Performed extensive accuracy evaluations under varying ambient light, angles, and plate conditions." },
      { stage: "Deployment", detail: "Configured local edge processing and static web dashboard monitoring interface." }
    ],
    image: "/images/projects/autotrace.svg",
    gallery: [
      { url: "/images/projects/autotrace.svg", caption: "Autotrace Live Camera OCR Stream & Vehicle Access Telemetry" },
    ],
    challenges: "Achieving high character recognition accuracy under challenging real-world conditions such as motion blur, skewed camera angles, and varying lighting.",
    outcome: "Successfully demonstrated real-time automated vehicle logging, drastically reducing checkpoint queue times while creating an immutable timestamped log of all vehicle traffic.",
    github: "https://github.com/marklaurence-santos/autotrace-alpr-system",
    demo: "",
    featured: true,
  }
];

export const educationData = {
  degree: "Bachelor of Science in Information Technology (BSIT)",
  yearLevel: "4th Year (Senior Standing)",
  institution: "Angeles University Foundation",
  location: "Angeles City, Pampanga, Philippines",
  period: "2023 – Present",
  highlights: [
    "Specializing in Web Development, Database Management, and Systems Analysis at Angeles University Foundation",
    "Lead Developer for Senior Capstone Project: Autotrace (Automated License Plate Recognition)",
    "Currently engineering an interactive AI Chatbot web project",
    "Active participant in departmental programming laboratories and software exhibitions"
  ],
  coursework: [
    "Database Management Systems",
    "Web Systems & Technologies",
    "Object-Oriented Programming (OOP)",
    "Systems Analysis & Design",
    "Information Assurance & Security",
    "Software Engineering",
    "Mobile Application Development",
    "Computer Networks"
  ],
  academicProjects: [
    {
      title: "Autotrace: Automated License Plate Recognition (ALPR)",
      role: "Lead Web & System Developer",
      description: "Engineered the license plate OCR extraction pipeline, SQL verification database, and web telemetry interface for automated vehicle access control."
    },
    {
      title: "AI Interactive Web Chatbot",
      role: "Web Developer (In Active Development)",
      description: "Designing a responsive conversational web interface with natural language prompt processing and modern UI components."
    }
  ],
  activities: [
    "Angeles University Foundation IT Department Academic Activities",
    "Junior Philippine Computer Society (JPCS) - Student Member",
    "IT Department Code Guild & Peer Learning Sessions",
    "University Tech Summit & Cybersecurity Workshop Attendee"
  ],
  achievements: [
    "Introduction to Cybersecurity (Certified Training)",
    "Cybersecurity Essentials (Certified Training)",
    "Cyber Hygiene Training",
    "AWS Cloud Computing Training"
  ]
};

export const experienceData = [
  {
    id: 1,
    category: "Capstone Development",
    title: "Lead Developer — Autotrace ALPR Capstone Project",
    organization: "Angeles University Foundation • BSIT Senior Capstone",
    period: "4th Year (Ongoing)",
    description: "Leading the development of Autotrace: An Automated License Plate Recognition system. Designed the system architecture, OCR character processing integration, relational SQL database, and operator web monitoring interface.",
    tags: ["Web Development", "Computer Vision / OCR", "SQL Database", "System Architecture", "React.js", "PHP"]
  },
  {
    id: 2,
    category: "Active Web & AI Development",
    title: "Web Developer — AI Chatbot Project",
    organization: "Personal & Academic Development",
    period: "Currently in Development",
    description: "Currently working on making an intelligent, interactive web chatbot. Developing responsive conversational UI components, state management for message streams, API integration, and natural language prompt handling.",
    tags: ["Web Development", "AI Chatbot", "JavaScript", "React.js", "UI/UX", "RESTful APIs"]
  }
];

export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    tagline: "Responsive Websites & Web Applications",
    icon: "Globe",
    description: "Building fast, mobile-friendly, and modern static or dynamic websites with clean HTML5, modern CSS/Tailwind, JavaScript/React, and PHP/Laravel.",
    capabilities: [
      "Responsive layout for mobile, tablet, and desktop",
      "Cross-browser compatibility & clean semantic markup",
      "Fast page load optimization & static asset handling",
      "Accessible navigation & interactive UI elements"
    ]
  },
  {
    id: 2,
    title: "Frontend & UI Implementation",
    tagline: "Modern Interface Execution",
    icon: "Layout",
    description: "Transforming design mockups into pixel-perfect, accessible, and interactive web user interfaces with Tailwind CSS, Bootstrap 5, and React.",
    capabilities: [
      "Tailwind CSS & Bootstrap 5 component creation",
      "Dark mode support & cohesive color palettes",
      "Accessible interactive states & focus indicators",
      "Micro-animations with reduced motion support"
    ]
  },
  {
    id: 3,
    title: "Database Integration",
    tagline: "Relational Modeling & Query Design",
    icon: "Database",
    description: "Designing normalized MySQL, MariaDB, and PostgreSQL schemas, writing efficient queries, and integrating structured data with application logic.",
    capabilities: [
      "Entity-Relationship Diagramming (ERD) & Schema Normalization",
      "CRUD operations & parameterized SQL queries",
      "Data integrity constraints & relationship mapping",
      "Performance query structuring & indexing concepts"
    ]
  },
  {
    id: 4,
    title: "Web Systems & APIs",
    tagline: "Client-Side & API Connectivity",
    icon: "Layers",
    description: "Connecting user-facing interfaces with RESTful APIs, asynchronous data handling, Postman-tested endpoints, and secure form processing.",
    capabilities: [
      "RESTful API consumption & asynchronous state management",
      "Interactive chatbots & real-time system dashboards",
      "Client-side routing & Single Page Applications (SPA)",
      "Form validation, error boundaries, and state feedback"
    ]
  },
  {
    id: 5,
    title: "System Development",
    tagline: "Practical Software Solutions",
    icon: "Cpu",
    description: "Translating business and academic requirements into structured software specifications, workflows, and functional prototypes.",
    capabilities: [
      "Software Development Life Cycle (SDLC) execution",
      "Requirement analysis, use cases, and flowcharts",
      "Modular code architecture for maintainability",
      "Documentation & user guide preparation"
    ]
  }
];

export const contactConfig = {
  headline: "Let's Build Something Useful.",
  subtext: "I am actively seeking internship opportunities, junior web developer roles, and freelance projects. Feel free to reach out through my direct contact channels below.",
  formspreeEndpoint: "", 
  email: "marklaurencesantos558@gmail.com",
  phone: "09283287141",
  address: "Angeles City, Pampanga, Philippines",
  university: "Angeles University Foundation",
  github: "https://github.com/marklaurence-santos",
  linkedin: "https://www.linkedin.com/in/mark-laurence-s-032713294/",
  location: "Angeles City, Pampanga, Philippines",
  responseTime: "Usually responds within 24 hours"
};
