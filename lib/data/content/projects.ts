export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  private: boolean;
  privateNotice?: string;

  demoLogin?: {
    admin?: string;
    customer?: string;
    notice?: string;
  };

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
    title: 'LoanFlow',
    category: 'Full-Stack Web Application',
    description:
      'Modern loan origination and decisioning platform designed to streamline loan applications, customer management, credit assessment, document processing, and loan decisioning. Features customer and staff authentication, role-based access control, loan application management, credit scoring, automated decisioning, document management, loan tracking, customer portals, and administrative workflows.',
    image: '/project5.png',
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
    demoLogin: {
      admin: 'admin@gmail.com',
      customer: 'customer@gmail.com',
      notice:
        'Demo accounts are provided for testing and demonstration purposes.',
    },
    link: 'https://loanflow-one.vercel.app/auth/login',
  },

  {
    title: 'Real Estate Property Management Platform',
    category: 'Full-Stack Web Application',
    description:
      'Full-stack real estate property management platform designed to manage property listings, agents, customers, inquiries, appointments, reports, and activity records through a centralized admin workspace. Includes a premium public property experience with detailed listings, property discovery, viewing requests, and an AI-powered real estate concierge, supported by structured dashboards and role-based management workflows.',
    image: '/project5.png',
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
    guestLink: 'https://real-estate-property-gilt.vercel.app/',
    adminLink: 'https://real-estate-property-gilt.vercel.app/login',
    demoLogin: {
      admin: 'admin@gmail.com',
      notice:
        'Demo accounts are provided for testing and demonstration purposes.',
    },
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
