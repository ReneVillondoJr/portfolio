import type { LucideIcon } from 'lucide-react';
import { BriefcaseBusiness, Database, Globe, Smartphone } from 'lucide-react';

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
}

export const experiences: ExperienceItem[] = [
  {
    period: 'Current',
    role: 'Full-Stack Web Development',
    company: 'Next.js · React · TypeScript',
    description:
      'Building modern, responsive web applications with component-based architecture, reusable UI patterns, API integration, and clean TypeScript code.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Globe,
  },
  {
    period: 'Current',
    role: 'Database & Backend Development',
    company: 'Prisma · PostgreSQL',
    description:
      'Working with relational databases and Prisma ORM to design data models, manage database operations, build APIs, and connect full-stack applications to reliable backend systems.',
    technologies: ['Prisma', 'PostgreSQL', 'REST APIs', 'Database Design'],
    icon: Database,
  },
  {
    period: 'Current',
    role: 'UI Development',
    company: 'shadcn/ui · Tailwind CSS',
    description:
      'Creating clean, responsive, and accessible interfaces using reusable UI components, consistent design patterns, and modern React development practices.',
    technologies: ['shadcn/ui', 'Tailwind CSS', 'Radix UI', 'Lucide'],
    icon: BriefcaseBusiness,
  },
  {
    period: 'Current',
    role: 'Mobile Application Development',
    company: 'React Native',
    description:
      'Exploring and building mobile experiences using React Native while applying reusable React concepts and responsive interface principles across platforms.',
    technologies: ['React Native', 'React', 'JavaScript', 'Mobile UI'],
    icon: Smartphone,
  },
];
