export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  private: boolean;
  privateNotice?: string;
  link?: string;
};

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
    title: 'Paws Grooming',
    category: 'Web Application',
    description:
      'A modern dog grooming website with appointment booking, grooming services, gallery, and responsive user interface.',
    image: '/project2.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    private: false,
    link: 'https://pawsgrooming.vercel.app/',
  },
];
