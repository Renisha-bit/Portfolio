/**
 * Central portfolio content.
 * Phase 1: static source of truth for the UI.
 * Phase 2+: this shape mirrors the database schema so the admin panel can
 * read/write the same structure and the public site fetches it live.
 */

export const profile = {
  name: 'Renisha Chauhan',
  role: 'Cybersecurity Student',
  tagline: 'Digital Forensics Enthusiast',
  location: 'India',
  email: 'sp3llmanvictoria@gmail.com',
  github: 'https://github.com/',
  githubHandle: 'Renisha Chauhan',
  linkedin: 'https://www.linkedin.com/',
  linkedinHandle: 'Renisha Chauhan',
  resumeUrl: '/resume.pdf',
  summary:
    'Motivated cybersecurity student with solid technical curiosity, a steady work ethic, and creative problem-solving abilities. Seeking to apply foundational security skills and analytical thinking in an internship or junior security role.',
  objective:
    'Interested in gaining hands-on experience in system security, threat analysis, and technical documentation — building a strong foundation across offensive and defensive security disciplines.',
} as const

export const stats = [
  { label: 'CGPA', value: 8.56, suffix: '', decimals: 2 },
  { label: 'Memberships', value: 3, suffix: '' },
  { label: 'Certifications', value: 3, suffix: '' },
  { label: 'Projects', value: 2, suffix: '' },
] as const

export const timeline = [
  {
    year: '2024',
    title: 'Started B.Tech in Cybersecurity',
    detail: 'Joined Silver Oak University to pursue a degree in Cybersecurity.',
  },
  {
    year: '2024',
    title: 'IEEE Student Branch — Core Member',
    detail: 'Became a Student & Core Member of the SOU IEEE Student Branch.',
  },
  {
    year: '2024',
    title: 'SecureOps & CTF',
    detail: 'Joined SecureOps and began participating in Capture The Flag events.',
  },
  {
    year: '2025',
    title: 'Ethical Hacking Workshop',
    detail: 'Completed hands-on ethical hacking training with Spaidy Labs.',
  },
  {
    year: '2026',
    title: 'Cloud Elevate: Powering GenAI',
    detail: 'Completed AWS Cloud Club program on GenAI and cloud services.',
  },
]

export const education = [
  {
    institution: 'Silver Oak University',
    degree: "Bachelor's in Cybersecurity",
    period: '2024 – 2028',
    detail: 'CGPA: 8.56',
    highlight: 'CGPA 8.56',
  },
  {
    institution: 'Kendriya Vidyalaya ONGC',
    degree: 'School Education',
    period: '2022 – 2024',
    detail: 'Higher secondary education.',
    highlight: 'Higher Secondary',
  },
]

export const experience = [
  {
    org: 'IEEE Student Branch — Silver Oak University',
    role: 'Student Member & Core Committee Member',
    period: '2024 – Present',
    points: [
      'Assisted in organizing technical workshops and student events.',
      'Supported documentation and coordination activities.',
      'Contributed to event promotions and awareness materials.',
    ],
  },
  {
    org: 'SecureOps',
    role: 'Student Volunteer',
    period: '2024 – Present',
    points: [
      'Participated in Capture The Flag (CTF) events.',
      'Active member contributing to security-focused activities.',
    ],
  },
  {
    org: 'AWS Cloud Club',
    role: 'Student Volunteer',
    period: '2024 – Present',
    points: [
      'Participated in cloud computing workshops and hands-on labs.',
      'Collaborated on projects involving core AWS services.',
    ],
  },
]

export const skillGroups = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', level: 78 },
      { name: 'C / C++', level: 70 },
      { name: 'Front-End Development', level: 72 },
    ],
  },
  {
    category: 'Cybersecurity',
    skills: [
      { name: 'Vulnerability Scanning', level: 68 },
      { name: 'Ethical Hacking Fundamentals', level: 70 },
      { name: 'Cyber Hygiene & Best Practices', level: 80 },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { name: 'Networking Basics', level: 66 },
      { name: 'Secure Communication', level: 62 },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS Services', level: 60 },
      { name: 'Cloud Fundamentals', level: 64 },
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Linux Fundamentals', level: 72 },
      { name: 'Windows', level: 74 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Cybersecurity Tools (Intro)', level: 58 },
      { name: 'Technical Documentation', level: 82 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 84 },
      { name: 'Communication', level: 80 },
      { name: 'Teamwork', level: 82 },
    ],
  },
]

export const projects = [
  {
    title: 'Swift Cloak',
    subtitle: 'P2P VPN-Based Project',
    description:
      'A peer-to-peer VPN project focused on secure networking and encrypted communication between nodes without a central authority.',
    tech: ['Networking', 'Encryption', 'Python', 'Security'],
    status: 'Active',
    featured: true,
    github: 'https://github.com/',
    demo: '',
    image: '/projects/swift-cloak.png',
  },
  {
    title: 'Cybersecurity Game',
    subtitle: 'Educational Security Game',
    description:
      'A cybersecurity-focused educational game designed to teach core security concepts through interactive, gamified challenges.',
    tech: ['Game Dev', 'Education', 'Security Concepts'],
    status: 'In Development',
    featured: true,
    github: 'https://github.com/',
    demo: '',
    image: '/projects/cyber-game.png',
  },
]

export const certificates = [
  {
    title: 'Cysec',
    issuer: 'IEEE SOU WIE Affinity Group & SecureOps',
    date: 'September 2024',
  },
  {
    title: 'Cloud Elevate: Powering GenAI',
    issuer: 'AWS Cloud Club',
    date: 'January 2026',
  },
  {
    title: 'Ethical Hacking Workshop',
    issuer: 'E-CELL IGNITE × Spaidy Labs',
    date: 'November 2025',
  },
]

export const memberships = [
  {
    org: 'IEEE Student Branch',
    role: 'Student & Core Member',
    period: '2024 – Present',
  },
  { org: 'SecureOps', role: 'Active Member', period: '2024 – Present' },
  { org: 'AWS Cloud Club', role: 'Active Member', period: '2024 – Present' },
]

export const achievements = [
  {
    title: 'CTF Participation',
    detail: 'Competed in Capture The Flag security challenges with SecureOps.',
  },
  {
    title: 'Ethical Hacking Certified',
    detail: 'Completed hands-on ethical hacking workshop with Spaidy Labs.',
  },
  {
    title: 'GenAI on Cloud',
    detail: 'Completed AWS Cloud Club Cloud Elevate: Powering GenAI program.',
  },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]
