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
  role: 'Full Stack Developer & Data Scientist',
  greeting: 'Hello, I\'m',
  shortIntro: 'Full Stack Developer with expertise in React, Python/FastAPI, and Data Science. Building scalable web applications and implementing real-time data solutions with Kafka, Docker, and Linux deployment.',
  description: 'Passionate developer with hands-on experience in modern web technologies, data science, and AI/ML. Proficient in React ecosystem, Python backend development with FastAPI, and real-time data processing using Apache Kafka. Strong expertise in Docker containerization and Linux deployment workflows.',
  location: 'Mumbai, India',
  email: 'siddheshp103@gmail.com',
  phone: '+91 9022855395',
};

// ============================================
// SOCIAL LINKS
// ============================================
export const socialLinks = {
  github: 'https://github.com/siddhesh',
  linkedin: 'https://linkedin.com/in/siddhesh',
  leetcode: 'https://leetcode.com/siddhesh',
  portfolio: 'https://siddhesh.dev',
};

// ============================================
// HERO SECTION
// ============================================
export const heroData = {
  greeting: personalInfo.greeting,
  name: personalInfo.name,
  role: personalInfo.role,
  intro: personalInfo.shortIntro,
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
  videoUrl: '/hero-video.mp4', // Placeholder - user can replace with actual video
};

// ============================================
// EXPERIENCE SECTION
// ============================================
export interface ExperienceData {
  role: string;
  organization: string;
  duration: string;
  description: string[];
  techStack: string[];
}

export const experienceData: ExperienceData[] = [
  {
    role: 'Junior Software Developer',
    organization: 'ENVECON GLOBAL PVT LTD',
    duration: 'Aug 2025 - Present (6 months)',
    description: [
      'Developed and maintained full-stack applications using React and Python/FastAPI',
      'Implemented Apache Kafka for real-time data streaming and event-driven architecture',
      'Designed and optimized MySQL database schemas for enterprise applications',
      'Deployed applications using Docker and Linux for production environments',
    ],
    techStack: ['React', 'Python', 'FastAPI', 'MySQL', 'Apache Kafka', 'Docker', 'Linux'],
  },
  {
    role: 'Intern',
    organization: 'IBM Skills-Build and CSRBOX-AIML',
    duration: 'Internship',
    description: [
      'Developed a Water Sanitation Chatbot as part of an AI for social good project',
      'Implemented NLP to enable the chatbot to understand user queries and provide real-time responses',
      'Integrated IBM Watson services to enhance the bot\'s data analysis and response capabilities',
    ],
    techStack: ['IBM Watson', 'Python', 'NLP', 'AI/ML', 'Chatbot Development'],
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
    id: '1',
    title: 'Facial Recognition Attendance System',
    description: 'Engineered a real-time facial recognition system using Haar Cascade and LBPH, achieving 95%+ accuracy. Designed a custom desktop GUI using Tkinter with OpenCV for image processing, Pandas for data handling, and NumPy for numerical computations. Added pyttsx3-based speech feedback for accessibility.',
    techStack: ['Python', 'OpenCV', 'Haar Cascade', 'LBPH', 'Tkinter', 'Pandas', 'NumPy', 'pyttsx3'],
    status: 'completed',
    githubUrl: 'https://github.com/siddhesh/facial-recognition-attendance',
  },
  {
    id: '2',
    title: 'E-commerce Website',
    description: 'Built a full-stack e-commerce web application using Next.js, React, Tailwind CSS, Node.js, and MongoDB. Implemented features like product filtering, search functionality, cart management, and order tracking with secure user authentication and dynamic product listings.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express'],
    status: 'completed',
    githubUrl: 'https://github.com/siddhesh/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: '3',
    title: 'Path Following Robo Car',
    description: 'Built an IoT system using Arduino with smooth hardware-software integration. Implemented Dijkstra\'s algorithm for efficient pathfinding in complex scenarios. Used L298N motor driver module to interface with DC motors for speed and direction control.',
    techStack: ['Arduino', 'IoT', 'C++', 'L298N Motor Driver', 'Dijkstra Algorithm'],
    status: 'completed',
    githubUrl: 'https://github.com/siddhesh/path-following-robo-car',
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
    category: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux'],
  },
  {
    category: 'Backend Development',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Data Science & AI/ML',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Data Analysis', 'Machine Learning'],
  },
  {
    category: 'Data Streaming',
    skills: ['Apache Kafka', 'Real-time Data Processing', 'Event-driven Architecture'],
  },
  {
    category: 'DevOps & Deployment',
    skills: ['Docker', 'Linux', 'CI/CD', 'Git', 'GitHub', 'Vercel'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook'],
  },
];

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  title: 'About Me',
  subtitle: 'Passionate about building scalable solutions with modern technologies',
  paragraphs: [
    'I am a Full Stack Developer with strong expertise in React and Python/FastAPI. I enjoy building responsive, performant web applications and RESTful APIs. My practical experience includes developing complete applications from frontend to backend deployment.',
    'My journey extends into Data Science and AI/ML where I leverage Python libraries like Pandas, NumPy, and Scikit-learn for data analysis and building intelligent systems. I have hands-on experience with Apache Kafka for real-time data streaming and event-driven architectures.',
    'I am proficient in DevOps practices including Docker containerization and Linux server management. My professional experience includes working extensively with Git/GitHub in collaborative team environments for version control and deployment workflows.',
  ],
  stats: [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Git Contributions', value: 'Active' },
    { label: 'Location', value: 'Mumbai' },
  ],
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactData = {
  title: 'Get In Touch',
  subtitle: 'Let\'s work together',
  description: 'I\'m always open to discussing new opportunities, innovative projects, or collaboration ideas. Feel free to reach out!',
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
  tagline: 'Building software that makes a difference.',
  socials: [
    { label: 'GitHub', href: socialLinks.github },
    { label: 'LinkedIn', href: socialLinks.linkedin },
    { label: 'LeetCode', href: socialLinks.leetcode },
  ],
};
