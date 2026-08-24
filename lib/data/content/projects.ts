export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  private: boolean;
  privateNotice?: string;
}

export const projects: Project[] = [
  {
    title: 'Client Management System',
    category: 'Private Client Project',
    description:
      'Modern business management platform built with React, Next.js, TypeScript, and Tailwind CSS, featuring role-based access control, automated data reconciliation, Excel/Instafin integration, bulk data updates, and client and beneficiary status tracking. Designed with separate access levels for Super Admin, Finance, Staff, and Branch Manager to provide secure and efficient operations.',
    image: '/project3.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    private: true,
    privateNotice:
      'Screenshots are shown for portfolio purposes. Source code and client data are private.',
  },

  {
    title: 'Portfolio Website',
    category: 'Personal Project',
    description:
      'A responsive developer portfolio focused on clean UI, modern interactions, and a professional presentation of projects and experience.',
    image: '/project2.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    private: false,
  },
];
