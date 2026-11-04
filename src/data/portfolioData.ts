import avatarImg from '../assets/images/developer_avatar_hijab_1793442025906.jpg';
import projectAiAgentImg from '../assets/images/project_ai_agent_1793370046811.jpg';
import projectSaasImg from '../assets/images/project_saas_platform_1793370047598.jpg';
import projectTrackerImg from '../assets/images/project_delivery_tracker_1793370047750.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'All' | 'AI & LLM / Agents' | 'Full Stack / SaaS' | 'Real-Time & API' | 'Laravel';
  badge: string;
  description: string;
  longDescription: string;
  highlights: string[];
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  platform: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Rowshanara Akhter",
    shortName: "RA",
    role: "Full Stack Web Developer & AI Solutions Engineer",
    headline: "Building Production-Ready Web Apps, AI Agents & SaaS",
    location: "Dhaka, Bangladesh",
    email: "rowshanaraakhter9@gmail.com",
    phones: ["+880 1349817338", "+880 1779524129"],
    portfolio: "rowshanara.dev",
    github: "https://github.com/rowshanaraakhter",
    githubHandle: "rowshanaraakhter",
    linkedin: "https://linkedin.com/in/rowshanara-akhter-4a8042258",
    avatar: avatarImg,
    cvPdfPath: "/assets/aistudio/Rowshanara_Akhter_AI_Full_Stack_CV_Updated_84a30761.pdf",
    videoShowcasePath: "/assets/aistudio/easyfypro_showcase.mp4",
    bio: [
      "Hi 👋, I'm Rowshanara Akhter, a Full Stack Web Developer building modern web applications with React, Next.js, TypeScript, Node.js/Express, and Laravel (PHP).",
      "I bring hands-on experience integrating LLM APIs and developing chatbot and AI-powered features, including work with AI Agents and Retrieval-Augmented Generation (RAG) for approximately one year.",
      "Currently developing an AI chatbot product and a multi-tenant SaaS platform. Experienced in REST API development, database design and optimization, authentication, third-party payment integrations (Stripe, SSLCommerz), real-time features, and post-launch maintenance.",
      "With a background in Philosophy from National University, I approach software architecture with rigorous logical reasoning, clean abstractions, and obsessive attention to system invariants."
    ],
    stats: {
      clientRating: "5.0",
      ratingReviewsCount: "30+",
      projectsCompleted: "15+",
      hackathonStanding: "Top 50 / 900+ Teams",
      githubContributions2026: "2,210"
    },
    keyBullets: [
      "Production-Ready Full-Stack Applications",
      "AI Agents, RAG Pipelines & LLM Integration",
      "Multi-Tenant SaaS & Scalable Architecture",
      "REST APIs, Payment Gateways & Cloud Deployment"
    ]
  },

  experiences: [
    {
      id: "exp-1",
      title: "Full Stack Web Developer — Freelance / Remote",
      company: "Independent Client Engagements",
      location: "Dhaka, Bangladesh · Remote",
      period: "2024 — Present",
      type: "Remote / Contract",
      summary: "Build and maintain full-stack web applications using React, Next.js, TypeScript, Node.js/Express, and Laravel. Lead the architecture of an AI chatbot product and multi-tenant SaaS platform.",
      details: [
        "Architecting and developing an AI chatbot product using LLM APIs, AI Agent tooling, and Retrieval-Augmented Generation (RAG) pipelines.",
        "Building a multi-tenant SaaS platform where multiple organizations share one core application with isolated schemas and strict tenant-aware access control.",
        "Integrating LLM APIs (OpenAI, Claude) for automated job-matching, prompt templates, streaming responses, and intelligent recommendations.",
        "Designing and optimizing REST APIs, data models, authentication flows (JWT with HTTP-only cookies), and database queries with indexing.",
        "Troubleshooting complex production issues, identifying bottlenecks, reducing latency, and conducting cloud deployment and post-launch maintenance."
      ]
    },
    {
      id: "exp-2",
      title: "Frontend & Full-Stack Solutions Engineer",
      company: "Tech Collaborations",
      location: "Uttara, Dhaka · On-Site / Hybrid",
      period: "2023 — 2024",
      type: "Contract",
      summary: "Tasked with architecting and building modern, high-performance web applications, B2B travel and courier tracking workflows using Next.js and React.",
      details: [
        "Built full-stack e-commerce systems featuring Zustand cart management and dual payment flows (Stripe & SSLCommerz) with SHA-256 webhook signature verification.",
        "Optimized Mongoose aggregation pipelines and indexing to eliminate N+1 data access patterns, drastically improving API throughput.",
        "Engineered real-time courier telemetry with Socket.io, throttled delta updates (250ms), and auto-reconnecting heartbeat protocols."
      ]
    },
    {
      id: "exp-3",
      title: "Web Developer & Linux Systems Administrator",
      company: "Client Solutions & Remote PR",
      location: "Dhaka & Remote · Worldwide",
      period: "2022 — 2023",
      type: "Remote",
      summary: "Managed remote full-stack deployments, server administration, REST API integrations, and client-facing web applications with Linux VPS hosting.",
      details: [
        "Maintained VPS and Linux server operations with Nginx reverse proxying and automated SSL cert rotation.",
        "Implemented Laravel MVC architectures using Eloquent eager loading to eliminate query loops for job platforms.",
        "Created custom client portals, database backup routines, and responsive dashboards with Tailwind CSS."
      ]
    }
  ] as Experience[],

  skillCategories: [
    {
      category: "AI & LLM ENGINEERING",
      skills: [
        { name: "LLM API Integration (OpenAI, Claude)" },
        { name: "AI Chatbot Development" },
        { name: "AI Agents / Agentic AI" },
        { name: "RAG Pipelines & Vector Search" },
        { name: "Prompt Engineering" },
        { name: "AI Matching & Recommendations" }
      ]
    },
    {
      category: "FRONTEND STACK",
      skills: [
        { name: "React.js" },
        { name: "Next.js (App Router)" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "Tailwind CSS" },
        { name: "Zustand" },
        { name: "HTML5 / CSS3" },
        { name: "Responsive UI/UX" }
      ]
    },
    {
      category: "BACKEND & SAAS ARCHITECTURE",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Laravel (PHP)" },
        { name: "REST API Design" },
        { name: "Multi-Tenant SaaS" },
        { name: "Tenant-Aware Modeling" },
        { name: "JWT & Session Auth" },
        { name: "Middleware Architecture" }
      ]
    },
    {
      category: "DATABASES & DATA PIPELINES",
      skills: [
        { name: "MongoDB" },
        { name: "Mongoose" },
        { name: "MySQL" },
        { name: "Redis (Caching)" },
        { name: "Aggregation Pipelines" },
        { name: "Schema Indexing & Query Tuning" },
        { name: "Data Structures & Algorithms" }
      ]
    },
    {
      category: "SECURITY & PAYMENTS",
      skills: [
        { name: "Stripe Checkout & Webhooks" },
        { name: "SSLCommerz Gateway" },
        { name: "SHA-256 Webhook Verification" },
        { name: "HTTP-Only Secure Cookies" },
        { name: "Role-Based Access Control (RBAC)" }
      ]
    },
    {
      category: "TESTING & DEVOPS",
      skills: [
        { name: "Git / GitHub" },
        { name: "Docker" },
        { name: "VPS Deployment & Linux" },
        { name: "Postman API Testing" },
        { name: "Vercel" },
        { name: "CI/CD Pipelines" },
        { name: "Production Debugging" }
      ]
    }
  ],

  achievements: [
    {
      title: "Top 50 / 900+ Teams",
      issuer: "SOLVIO AI Hackathon 2025",
      description: "Ranked in the top 5% out of 900+ competitive teams worldwide for innovative AI engineering and agentic pipeline delivery.",
      type: "Hackathon Award"
    },
    {
      title: "Bachelor of Arts in Philosophy",
      issuer: "National University, Bangladesh",
      description: "Rigorous academic training in formal logic, epistemology, and ethical systems, informing clear architectural problem-solving in software.",
      type: "Higher Education"
    },
    {
      title: "Bilingual Professional",
      issuer: "Bengali (Native) · English (Professional working proficiency)",
      description: "Fluent communication with global teams across US, European, and Asian client stakeholders.",
      type: "Languages"
    }
  ],

  projects: [
    {
      id: "ai-chatbot-rag",
      title: "AI Chatbot Product — LLM APIs, AI Agents & RAG",
      subtitle: "Enterprise-grade conversational intelligence platform with vector retrieval",
      category: "AI & LLM / Agents",
      badge: "AI AGENTS & RAG",
      description: "Developing an AI-powered chatbot product using LLM APIs (OpenAI, Claude) with AI Agent tool calling and Retrieval-Augmented Generation (RAG) approaches.",
      longDescription: "Architected a full conversational system that ingests corporate documents, executes semantic vector chunking, and uses agentic reasoning to query knowledge bases. Features real-time token streaming, citation provenance, and multi-turn conversational memory.",
      highlights: [
        "Implemented high-accuracy vector embeddings and semantic search with hybrid lexical-vector retrieval.",
        "Orchestrated tool-calling agent loops capable of verifying facts and querying operational databases.",
        "Built responsive Next.js frontend with low-latency Server-Sent Events (SSE) streaming."
      ],
      technologies: ["OpenAI API", "Claude API", "RAG Pipelines", "Next.js", "TypeScript", "Node.js", "Vector DB"],
      image: projectAiAgentImg,
      featured: true,
      demoUrl: "https://rowshanara.dev/projects/ai-chatbot",
      githubUrl: "https://github.com/rowshanaraakhter/ai-chatbot-rag",
      videoUrl: "/assets/aistudio/microjob_showcase.mp4"
    },
    {
      id: "multi-tenant-saas",
      title: "Multi-Tenant SaaS Platform — Full Stack",
      subtitle: "Scalable B2B SaaS architecture with organization-isolated data and role control",
      category: "Full Stack / SaaS",
      badge: "MULTI-TENANT SAAS",
      description: "Building a multi-tenant SaaS product where multiple organizations share one application with their own isolated data and tenant-aware permissions.",
      longDescription: "Engineered from the ground up for high concurrency and strict enterprise data boundaries. Supports custom organization subdomains, dynamic membership invites, automated subscription billing, and real-time organizational analytics.",
      highlights: [
        "Enforced tenant-level data isolation at the ORM/database layer to guarantee zero cross-tenant leakage.",
        "Built granular Role-Based Access Control (RBAC) with owner, admin, manager, and member permission gates.",
        "Developed custom dashboard with Zustand state and optimized cache invalidation."
      ],
      technologies: ["Next.js (App Router)", "React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "Tailwind CSS"],
      image: projectSaasImg,
      featured: true,
      demoUrl: "https://rowshanara.dev/projects/multi-tenant-saas",
      githubUrl: "https://github.com/rowshanaraakhter/multi-tenant-saas"
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform — Next.js, Express & MongoDB",
      subtitle: "High-performance online marketplace with dual payment gateways and webhook verification",
      category: "Full Stack / SaaS",
      badge: "FULL STACK E-COMMERCE",
      description: "Built a full-stack e-commerce application with secure JWT authentication using HTTP-only cookies and Zustand-powered cart state.",
      longDescription: "A production-grade retail platform engineered for high transaction speed and ironclad security. Supports international and local payment checkouts, dynamic inventory reconciliation, and background order status updates.",
      highlights: [
        "Optimized Mongoose aggregation pipelines and composite indexing to eliminate N+1 data access patterns.",
        "Integrated Stripe Checkout and SSLCommerz payment flows with SHA-256 webhook signature verification.",
        "Implemented secure JWT session state stored in HTTP-only, SameSite cookies to mitigate XSS vulnerabilities."
      ],
      technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Stripe", "SSLCommerz", "Zustand"],
      image: projectSaasImg,
      featured: false,
      demoUrl: "https://rowshanara.dev/projects/ecommerce-shop",
      githubUrl: "https://github.com/rowshanaraakhter/ecommerce-platform"
    },
    {
      id: "realtime-delivery-tracker",
      title: "Real-Time Delivery Tracker — Socket.io & Next.js",
      subtitle: "Live courier tracking with connection heartbeat and coordinate delta compression",
      category: "Real-Time & API",
      badge: "REAL-TIME & SOCKET.IO",
      description: "Developed real-time courier tracking with heartbeat, reconnection, and connection-fallback handling.",
      longDescription: "Created for logistics operators and customers to track dynamic fleets with sub-second accuracy. Features bandwidth-efficient delta broadcasts and resilient network recovery algorithms.",
      highlights: [
        "Reduced websocket bandwidth consumption by broadcasting coordinate deltas instead of full location structures.",
        "Throttled updates at a steady 250 ms interval with bezier interpolation for smooth on-map marker movement.",
        "Constructed connection-fallback mechanisms that gracefully transition to HTTP long-polling on unstable mobile networks."
      ],
      technologies: ["Next.js", "Node.js", "Socket.io", "Express.js", "Leaflet Maps", "Redis"],
      image: projectTrackerImg,
      featured: true,
      demoUrl: "https://rowshanara.dev/projects/delivery-tracker",
      githubUrl: "https://github.com/rowshanaraakhter/realtime-delivery-tracker"
    },
    {
      id: "ai-job-matcher",
      title: "AI Job Matcher — React, Next.js & LLM APIs",
      subtitle: "Intelligent career opportunity recommendation engine powered by LLM embeddings",
      category: "AI & LLM / Agents",
      badge: "AI RECOMMENDATIONS",
      description: "Created an AI-powered job matching interface that analyzes user skills and resume data to surface relevant job listings.",
      longDescription: "An interactive application that accepts raw candidate CVs or portfolios, extracts structured competency profiles, and conducts deep alignment scoring against live employer requisitions with natural language justifications.",
      highlights: [
        "Integrated OpenAI and Claude APIs using structured prompt templates and streamed token responses.",
        "Generates explainable skill gap analyses and actionable recommendations to improve applicant match scores.",
        "Clean, responsive interface with instant search, filtering, and bookmarking."
      ],
      technologies: ["React.js", "Next.js", "OpenAI API", "Claude API", "TypeScript", "Tailwind CSS"],
      image: projectAiAgentImg,
      featured: false,
      demoUrl: "https://rowshanara.dev/projects/ai-job-matcher",
      githubUrl: "https://github.com/rowshanaraakhter/ai-job-matcher"
    },
    {
      id: "micro-job-platform",
      title: "Micro Job Application Platform — Laravel (PHP)",
      subtitle: "Modular task marketplace with Eloquent eager loading and responsive dashboard",
      category: "Laravel",
      badge: "LARAVEL MVC",
      description: "Built a job-posting and application platform using Laravel MVC architecture with optimized database querying.",
      longDescription: "A comprehensive freelancing micro-job platform engineered with clean separation of concerns, automated task lifecycle tracking, and an administrative control center.",
      highlights: [
        "Used Eloquent eager loading to eliminate N+1 query loops and maximize database retrieval throughput.",
        "Integrated AI-driven candidate matching logic and developed a responsive client and contractor dashboard.",
        "Implemented robust server-side request validation and role-based permissions."
      ],
      technologies: ["Laravel (PHP)", "MySQL", "Eloquent ORM", "REST API", "Tailwind CSS", "Blade"],
      image: projectSaasImg,
      featured: false,
      demoUrl: "https://rowshanara.dev/projects/micro-job-laravel",
      githubUrl: "https://github.com/rowshanaraakhter/laravel-micro-jobs"
    }
  ] as Project[],

  testimonials: [
    {
      id: "test-1",
      name: "Marcus Vance",
      role: "Product Lead",
      company: "SaaSify Technologies",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Rowshanara is one of the sharpest engineers we've hired. She architected our multi-tenant SaaS schema and integrated the AI RAG chatbot ahead of schedule. Her code is pristine and well-documented.",
      rating: 5,
      platform: "Remote Client Engagement"
    },
    {
      id: "test-2",
      name: "Bashier Al-Mansoor",
      role: "Founder",
      company: "Apex Digital Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Super fast delivery and unmatched attention to detail. She eliminated our database query bottlenecks and set up webhook signature verifications that solved all our payment sync failures.",
      rating: 5,
      platform: "PeoplePerHour / Verified Client"
    },
    {
      id: "test-3",
      name: "Elena Rostova",
      role: "CTO",
      company: "LogixCourier Systems",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Her work on our real-time courier tracking platform with Socket.io was flawless. Throttling coordinate deltas cut our server bandwidth by 40%. A true full-stack problem solver.",
      rating: 5,
      platform: "Upwork Enterprise"
    },
    {
      id: "test-4",
      name: "Thomas Dunn",
      role: "Director of Engineering",
      company: "Veloce Media Group",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Fantastic collaboration from start to finish. Rowshanara takes complex AI prompt engineering and turns it into intuitive, reliable user experiences. Will definitely hire again!",
      rating: 5,
      platform: "Verified Remote Partner"
    },
    {
      id: "test-5",
      name: "Farhan Chowdhury",
      role: "Hackathon Organizer & Lead",
      company: "SOLVIO AI Tech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Competing among 900+ teams, Rowshanara's agentic pipeline prototype stood out for its rigorous logic and clean execution. One of the top engineering talents from Bangladesh.",
      rating: 5,
      platform: "SOLVIO AI Hackathon 2025"
    },
    {
      id: "test-6",
      name: "Sarah Jenkins",
      role: "Founder & CEO",
      company: "NovaRetail",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Rowshanara built our Next.js and MongoDB e-commerce backend with Stripe and SSLCommerz. She is communicative, extremely responsive, and writes production-ready code.",
      rating: 5,
      platform: "Freelance Client"
    },
    {
      id: "test-7",
      name: "David Kim",
      role: "VP of Engineering",
      company: "PulseAI Labs",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Her deep grasp of RAG chunking and vector index retrieval solved our latency spikes. Our semantic search queries went from 600ms down to 80ms.",
      rating: 5,
      platform: "Remote Enterprise Client"
    },
    {
      id: "test-8",
      name: "Tasmia Haque",
      role: "Lead Architect",
      company: "CloudSync Labs",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&h=150&q=80",
      text: "A brilliant full-stack engineer. The multi-tenant database isolation she implemented for our organization workspace has run with zero leaks or bugs in production.",
      rating: 5,
      platform: "SaaS Collaboration"
    },
    {
      id: "test-9",
      name: "Adrien Bucci",
      role: "CEO",
      company: "MyBandi",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Outstanding collaboration! Rowshanara transformed our complex product spec into a silky-smooth React and Next.js frontend with clean TypeScript typings.",
      rating: 5,
      platform: "PeoplePerHour / Verified Client"
    },
    {
      id: "test-10",
      name: "Saj K",
      role: "Digital Solutions Consultant",
      company: "Apex Media",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Super fast turnaround and communicative throughout. She fixed all our backend Express auth middleware and cookie issues in less than 48 hours.",
      rating: 5,
      platform: "Upwork Enterprise"
    },
    {
      id: "test-11",
      name: "Tariq Rahman",
      role: "Co-Founder",
      company: "NextDrop Logistics",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Her real-time WebSocket architecture for courier coordination is top-notch. She wrote reconnect handlers and telemetry filters that save massive server costs.",
      rating: 5,
      platform: "Remote Contract"
    },
    {
      id: "test-12",
      name: "Rebecca Sterling",
      role: "Head of Product",
      company: "ArtisanTech",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      text: "One of the best remote developers we've collaborated with. Her code is modular, tested, and she understands AI prompt engineering better than most senior devs.",
      rating: 5,
      platform: "Verified Partner"
    },
    {
      id: "test-13",
      name: "Hamza Tariq",
      role: "Chief Architect",
      company: "ApexFin Global",
      avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Rowshanara eliminated our N+1 queries and brought down API latency across the board. Her database schema design for high concurrency is exceptional.",
      rating: 5,
      platform: "Enterprise Freelance"
    },
    {
      id: "test-14",
      name: "Sophia Lindqvist",
      role: "Founder",
      company: "Vanguard AI Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Fast delivery, high intelligence, and incredible ownership. The AI agent prototype she delivered for our document analysis won praise from our seed investors.",
      rating: 5,
      platform: "Upwork Verified"
    },
    {
      id: "test-15",
      name: "Kazi Nabil",
      role: "Lead Full-Stack Engineer",
      company: "NexusCloud Dhaka",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      text: "Great problem-solving mindset! She worked with our Laravel and Next.js microservices effortlessly. Clear communication and proactive bug fixes every sprint.",
      rating: 5,
      platform: "Remote Collaboration"
    },
    {
      id: "test-16",
      name: "Chloe Dupont",
      role: "Operations Director",
      company: "SwiftRoute Express",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      text: "The live courier telemetry and socket reconnection logic were executed with extreme precision. We've experienced zero downtime since deploying her code.",
      rating: 5,
      platform: "PeoplePerHour / Verified Client"
    }
  ] as Testimonial[]
};
