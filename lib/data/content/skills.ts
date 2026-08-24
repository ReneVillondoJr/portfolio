import {
  Braces,
  Database,
  Layout,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Building responsive and polished web interfaces.',
    icon: Layout,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'shadcn/ui',
    ],
  },
  {
    title: 'Backend',
    description: 'Creating reliable application logic and data systems.',
    icon: Database,
    skills: ['Prisma', 'PostgreSQL', 'REST APIs', 'Database Design'],
  },
  {
    title: 'Mobile',
    description: 'Applying React concepts to mobile experiences.',
    icon: Smartphone,
    skills: ['React Native', 'React', 'JavaScript', 'Mobile UI'],
  },
  {
    title: 'Development',
    description: 'Tools and practices I use to build applications.',
    icon: Braces,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Component Architecture',
      'Responsive Design',
    ],
  },
  {
    title: 'IT Support',
    description: 'Practical troubleshooting and technical problem solving.',
    icon: Wrench,
    skills: ['Technical Support', 'Troubleshooting', 'Hardware', 'Networking'],
  },
];
