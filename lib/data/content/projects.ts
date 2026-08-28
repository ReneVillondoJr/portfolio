export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  private: boolean;
  privateNotice?: string;
  link?: string;
  guestLink?: string;
  adminLink?: string;
};

export const projects: Project[] = [
  {
    title: 'Client Management System',
    category: 'Private Client Project',
    description:
      'Modern business management platform built with React, Next.js, TypeScript, and Tailwind CSS, featuring role-based access control, automated data reconciliation, Excel/Instafin integration, bulk data updates, and client and beneficiary status tracking. Designed with separate access levels for Super Admin, Finance, Staff, and Branch Manager to provide secure and efficient operations.',
    image: '/project3.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
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

  {
    title: 'Hotel Booking System',
    category: 'Full-Stack Web Application',
    description:
      'Modern hotel booking platform designed for guests to explore rooms, view detailed room information, filter accommodations by room type and guest capacity, and make reservations through a streamlined booking experience. Built with a responsive, premium hotel-focused interface and structured for secure full-stack operations.',
    image: '/project4.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    private: false,
    guestLink: 'https://hotel-booking-lake-three.vercel.app/guest',
    adminLink: 'https://hotel-booking-lake-three.vercel.app/admin',
  },
];
