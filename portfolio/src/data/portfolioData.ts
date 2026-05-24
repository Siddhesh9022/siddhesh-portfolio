/**
 * Portfolio Data - Centralized data source for all portfolio content
 * All content is stored here, no hardcoded text in components
 */
import type { ProjectStatusType } from '../components/ui/ProjectCard';

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  name: 'Siddhesh Patil',
  role: 'Software Developer',
  niche: 'Full Stack',
  greeting: 'Hello, I\'m',
  shortIntro:
    'Full Stack Software Developer building modern web applications end to end — from responsive React frontends to robust Python/FastAPI backends, databases, and production deployments.',
  description:
    'Passionate about clean code, scalable architecture, and shipping reliable products. Comfortable across the stack with React, TypeScript, Python, SQL, Docker, and Linux.',
  location: 'Mumbai, India',
  email: 'siddheshp103@gmail.com',
  phone: '+91 9022855395',
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
  github: 'https://github.com/Siddhesh9022',
  linkedin: 'https://www.linkedin.com/in/siddhesh-patil-795161226',
  leetcode: 'https://leetcode.com/u/_Siddhesh_patil_05/',
  portfolio: 'https://siddhesh-portfolio-ashy.vercel.app/',
};

// ============================================
// HERO SECTION
// ============================================
export const heroData = {
  greeting: personalInfo.greeting,
  name: personalInfo.name,
  role: personalInfo.role,
  niche: personalInfo.niche,
  intro: personalInfo.shortIntro,
  profileLinks: [
    { label: 'GitHub', href: socialLinks.github },
    { label: 'LinkedIn', href: socialLinks.linkedin },
  ],
  highlightTags: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Tailwind CSS'],
  ctaButtons: {
    primary: {
      label: 'View My Work',
      href: '#projects',
    },
    secondary: {
      label: 'Get In Touch',
      href: '#contact',
    },
  },
  resumeUrl: '/Siddhesh_Patil_Resume.pdf',
  videoUrl: '/hero-video.mp4',
};

// ============================================
// EXPERIENCE SECTION
// ============================================
export interface ExperienceData {
  role: string;
  organization: string;
  duration: string;
  location?: string;
  description: string[];
  techStack: string[];
}

export const experienceData: ExperienceData[] = [
  {
    role: 'Software Developer',
    organization: 'Envecon',
    location: 'Mumbai, India',
    duration: 'Aug 2025 – Present',
    description: [
      'Centrify — Built an in-house Jira-style agile platform for projects, backlogs, sprints, user stories, tasks, epics, and bugs with JWT auth and role-based access; used by 200+ active users in production.',
      'Supply Chain Management (SCM) — Delivered supplier onboarding, inventory and parts management with serial tracking, multi-site warehouse management, and PR/RFQ workflows with hierarchical approval chains using Apache Kafka.',
      'Fleet Management — Developed transport order management with real-time broadcasting, driver assignment, and Geapify Routing API integration for vehicle-size-aware route planning in an event-driven architecture.',
    ],
    techStack: [
      'React',
      'TanStack Query',
      'TypeScript',
      'FastAPI',
      'MySQL',
      'Apache Kafka',
      'Docker',
      'Linux',
    ],
  },
];

// ============================================
// PROJECTS SECTION
// ============================================
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: ProjectStatusType;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'centrify',
    title: 'Centrify — Agile Project Management Platform',
    description:
      'In-house Jira-style platform for day-to-day planning and delivery: projects, backlogs, sprints, user stories, tasks, epics, bugs, collaboration, and a personal dashboard. Secure JWT authentication, role-based access, dark/light theme, and 200+ active production users.',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'React Router',
      'FastAPI',
      'SQLAlchemy',
      'MySQL',
      'JWT',
    ],
    status: 'completed',
    githubUrl: 'https://github.com/Siddhesh9022/Centrify-',
  },
  {
    id: 'e-contracts',
    title: 'E-Contracts — Business Operations & Job Management',
    description:
      '3-module role-based application for Business, Contractor, and Workforce with separate dashboards and access control. Quotation bidding for large orders, direct contractor assignment for smaller jobs, contract tracking, workforce allocation, and automated PDF generation with ReportLab.',
    techStack: [
      'React',
      'TypeScript',
      'TanStack',
      'FastAPI',
      'MySQL',
      'Tailwind CSS',
      'DaisyUI',
      'ReportLab',
    ],
    status: 'in-progress',
    githubUrl: 'https://github.com/Siddhesh9022/E-Contracts_UI',
  },
  {
    id: 'trackify',
    title: 'Trackify — Personal Money Tracker',
    description:
      'Full-stack finance app for daily expenses, monthly income, bank balances, cash on hand, and savings (including SIPs). Calendar-style expense grid, multi-bank accounts, monthly summaries, CSV export, and email OTP verification.',
    techStack: ['React', 'Vite', 'FastAPI', 'SQLAlchemy', 'MySQL', 'JWT', 'Tailwind CSS'],
    status: 'completed',
    githubUrl: 'https://github.com/Siddhesh9022/Trackify',
  },
  {
    id: 'trackify-android',
    title: 'Trackify Mobile — Flutter App',
    description:
      'Flutter client for the Trackify API: expenses, income, banks, savings/SIPs, and JWT session management. Thin mobile client using Provider, Dio, and shared_preferences — pairs with the Trackify FastAPI backend.',
    techStack: ['Flutter', 'Dart', 'Provider', 'Dio', 'Material Design 3'],
    status: 'completed',
    githubUrl: 'https://github.com/Siddhesh9022/Trackify-Android-Application',
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition Attendance System',
    description:
      'Real-time facial recognition pipeline with 95%+ accuracy using Haar Cascade and LBPH. Tkinter desktop GUI with admin/user access, OpenCV image processing, and pyttsx3 speech feedback for accessibility.',
    techStack: ['Python', 'OpenCV', 'Haar Cascade', 'LBPH', 'Tkinter', 'Pandas', 'NumPy', 'pyttsx3'],
    status: 'completed',
  },
];

// ============================================
// SKILLS SECTION
// ============================================
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'React',
      'TanStack Query',
      'TanStack Router',
      'Node.js',
      'Tailwind CSS',
      'FastAPI',
      'SQLAlchemy',
      'Pydantic',
      'Tkinter',
      'ReportLab',
    ],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Infra & DevOps',
    skills: ['Apache Kafka', 'Docker', 'Linux', 'Git', 'GitHub'],
  },
  {
    category: 'Data Analysis',
    skills: [
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'EDA',
      'Matplotlib',
      'Seaborn',
    ],
  },
];

// ============================================
// EDUCATION & CERTIFICATIONS
// ============================================
export const educationData = {
  institution: 'Vasantdada Patil College of Engineering',
  degree: 'Bachelor of Engineering in Information Technology',
  location: 'Mumbai',
  duration: 'Aug 2021 – Jun 2025',
};

export const certificationsData = [
  {
    name: 'Artificial Intelligence & Machine Learning',
    issuer: 'IBM SkillsBuild',
  },
  {
    name: 'AIML Certification',
    issuer: 'CSRBOX',
  },
];

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  title: 'About Me',
  subtitle: 'Building production software for real teams',
  paragraphs: [
    'I am a Software Developer at Envecon in Mumbai, shipping full-stack products used by hundreds of users every day. I work across React and TanStack on the frontend and Python/FastAPI with MySQL on the backend.',
    'My recent work includes Centrify (agile project management), an SCM platform with Kafka-driven approval workflows, and a fleet management system with real-time routing. I also build personal projects like Trackify and E-Contracts end to end.',
    'I hold a B.E. in Information Technology from Vasantdada Patil College of Engineering and certifications in AI/ML from IBM SkillsBuild and CSRBOX. I am comfortable with Docker, Linux deployment, and collaborative Git workflows.',
  ],
  stats: [
    { label: 'Production Users', value: '200+' },
    { label: 'Core Stack', value: 'React + FastAPI' },
    { label: 'Education', value: 'B.E. IT' },
    { label: 'Location', value: 'Mumbai' },
  ],
  education: educationData,
  certifications: certificationsData,
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactData = {
  title: 'Get In Touch',
  subtitle: 'Let\'s work together',
  description:
    'Open to discussing new opportunities, collaborations, or interesting projects. Reach out via email or connect on GitHub and LinkedIn.',
  email: personalInfo.email,
  phone: personalInfo.phone,
  location: personalInfo.location,
  availability: 'Open to opportunities',
  responseTime: 'Usually respond within 24 hours',
  cta: {
    label: 'Send Message',
    href: `mailto:${personalInfo.email}`,
  },
};

// ============================================
// NAVIGATION DATA
// ============================================
export const navigationData = {
  brandName: personalInfo.name,
  brandSubtitle: `${personalInfo.niche} ${personalInfo.role}`,
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

// ============================================
// FOOTER DATA
// ============================================
export const footerData = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  tagline: 'Building software that ships to production.',
  socials: [
    { label: 'GitHub', href: socialLinks.github },
    { label: 'LinkedIn', href: socialLinks.linkedin },
    { label: 'LeetCode', href: socialLinks.leetcode },
  ],
};
