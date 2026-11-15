export type IllustrationId = "automation-systems" | "united-elite-operations" | "automation-card-player" | "sales-bank-comparison" | "sdn-container-support" | "hirehustle-ranking" | "commerce-api" | "about-docker-engineer";

export interface Project {
  name: string;
  category: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
  illustration: IllustrationId;
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
  technologies: string[];
  illustration: IllustrationId;
}

export interface SkillGroup { name: string; skills: string[] }

export const profile = {
  name: "Mohamed Khaled",
  brand: "m.abdelmaqsooud",
  title: "Automation Developer & Software Engineer",
  location: "Sheikh Zayed, Giza, Egypt",
  phone: { display: "+20 128 008 8412", href: "tel:+201280088412" },
  email: "m.abdelmaqsooud@gmail.com",
  github: "https://github.com/Bondo2-1",
  linkedin: "https://www.linkedin.com/in/m-abdelmaqsooud/",
  resume: "/assets/resume/Mohamed-Khaled-Resume.pdf",
};

export const heroMascot = {
  image: "/assets/illustrations/hero-n8n-robot-1200.webp",
  smallImage: "/assets/illustrations/hero-n8n-robot-640.webp",
  logo: "/assets/brands/n8n-logo-white-accent.svg",
  description: "A friendly robot with a smooth head and no glasses, wearing a charcoal n8n hoodie with pink details.",
};

export const about: { introduction: string; paragraphs: string[]; illustration: IllustrationId } = {
  introduction: "After graduating from Cairo University and completing my military service, I joined SDN as a Software Technical Support Engineer.",
  paragraphs: [
    "I supported production environments, investigated technical issues involving integrations with 3S Egypt and Union Courier, and deployed application updates using Docker Swarm.",
    "Today, at United Elite, I develop n8n workflows, connect business systems through APIs, and automate sales and operational processes.",
  ],
  illustration: "about-docker-engineer",
};

export const projects: Project[] = [
  {
    name: "HireHustle",
    category: "AI recruitment platform",
    period: "Graduation project / 2022–2023",
    description: "Match candidates to the role. An AI-powered recruitment platform that ranks CVs against job requirements.",
    details: ["CV ranking against job descriptions", "Backend services and web and mobile applications"],
    technologies: ["Flask", "Spring Boot", "Angular", "Flutter", "PostgreSQL"],
    illustration: "hirehustle-ranking",
  },
  {
    name: "Commerce backend",
    category: "E-commerce REST API",
    period: "Backend project / 2024–2025",
    description: "The systems behind a storefront. A Node.js API for products, customer accounts, orders, and online payments.",
    details: ["Authentication, authorization, and validation", "Product reviews, wishlists, and order processing"],
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    illustration: "commerce-api",
  },
];

export const experience: Experience[] = [
  {
    organization: "United Elite",
    role: "IT Administrator & n8n Automation Developer",
    period: "August 2026 — Present",
    summary: "Connecting sales operations, messaging, and financial workflows with automation.",
    details: [
      "ClickUp workspace architecture, permissions, and dashboards.",
      "Browser-extension activity tracking through webhooks and n8n.",
      "WhatsApp workflows with Evolution API, plus loan eligibility and DBR/EMI calculations.",
    ],
    technologies: ["n8n", "ClickUp", "Evolution API", "Webhooks"],
    illustration: "automation-card-player",
  },
  {
    organization: "SDN",
    role: "L2 Software Technical Support Engineer",
    period: "June 2025 — June 2026",
    summary: "Supporting the APIs, databases, and container deployments that software teams depend on.",
    details: [
      "n8n registration workflows integrated with Docker Swarm services.",
      "API troubleshooting, PostgreSQL investigation, and deployment support.",
      "Backend log analysis and issue escalation with development and DevOps teams.",
    ],
    technologies: ["Docker Swarm", "PostgreSQL", "APIs", "n8n"],
    illustration: "sdn-container-support",
  },
];

export const bankComparison: { title: string; description: string; banks: string[]; illustration: IllustrationId } = {
  title: "Bank comparison workflow",
  description: "A sales form compares bank options using a client's salary, nationality, company, current bank, and preferred interest point: minimum rate, maximum deferral, or both.",
  banks: ["FAB", "DIB", "ENBD", "ADIB", "EIB"],
  illustration: "sales-bank-comparison",
};

export const skillGroups: SkillGroup[] = [
  { name: "Automation", skills: ["n8n", "Joget", "Webhooks", "API integrations"] },
  { name: "Languages", skills: ["JavaScript", "Python", "Java", "C++", "Prolog"] },
  { name: "Frontend", skills: ["React", "HTML", "CSS", "Bootstrap", "jQuery"] },
  { name: "Backend & data", skills: ["Node.js", "Express", "SQL", "PostgreSQL", "MongoDB", "Power BI"] },
  { name: "Infrastructure", skills: ["Docker", "OpenShift", "Linux", "Bash", "Git", "GitLab CI/CD", "Terraform"] },
  { name: "Testing", skills: ["Selenium", "Cypress", "Postman", "Jira", "ISTQB Foundation"] },
];

export const illustrationAlt: Record<IllustrationId, string> = {
  "automation-card-player": "The same developer character holding cards, with ClickUp, Docker, and the new n8n logo on three floating cards.",
  "sales-bank-comparison": "A saleswoman using the client-details form while considering FAB, DIB, ENBD, ADIB, and EIB in a thought cloud.",
  "about-docker-engineer": "A standing 3D character with dark hair and headphones, wearing a Docker hoodie, jeans, and sneakers.",
  "automation-systems": "Connected concrete processing modules, wooden input trays, and container blocks.",
  "united-elite-operations": "A message routed through a concrete processor into financial-rule modules in a wooden tray.",
  "sdn-container-support": "The same developer seated at an office desk in a development-symbol hoodie, managing PostgreSQL production data, deploying Docker Swarm updates, and reading backend API logs.",
  "hirehustle-ranking": "Candidate documents passing through a matching mechanism into an ordered shortlist.",
  "commerce-api": "Product blocks, an authentication lock, order trays, and a payment module connected together.",
};
